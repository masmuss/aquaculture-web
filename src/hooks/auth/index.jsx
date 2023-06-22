import { createContext, useContext, useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const navigate = useNavigate()
	const [cookies, setCookies, removeCookie] = useCookies()

	const login = async ({ email, password }) => {
		const res = await api.post('/auth/login', {
			email: email,
			password: password
		})

		setCookies('token', res.data.token)
		setCookies('name', res.data.data.name)

		navigate('/home')
	}

	const logout = () => {
		['token', 'name'].forEach(obj => removeCookie(obj))
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
