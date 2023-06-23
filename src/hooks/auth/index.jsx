import { createContext, useContext, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import api, { authenticatedApi } from '../../services/api'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const navigate = useNavigate()
	const [cookies, setCookies, removeCookie] = useCookies()

	const login = async ({ email, password }) => {
		await api.post('auth/login', { email, password }).then(() => {
			authenticatedApi.get('user').then(res => {
				setCookies('token', res.data.token, { path: '/' })
				setCookies('name', res.data.name, { path: '/' })
				navigate('/home')
			})
		})
	}

	const logout = () => {
		;['token', 'name'].forEach(obj => removeCookie(obj))
		navigate('/login')
	}

	const value = useMemo(
		() => ({
			cookies,
			login,
			logout
		}),
		[cookies]
	)

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useAuth = () => {
	return useContext(UserContext)
}
