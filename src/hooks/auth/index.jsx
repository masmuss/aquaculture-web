import { createContext, useContext, useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import api, { authenticatedApi } from '../../services/api'

const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
	const navigate = useNavigate()
	const [cookies, setCookies, removeCookie] = useCookies()

	const login = async ({ email, password }) => {
		await api.post('auth/login', { email, password }).then(res => {
			setCookies('token', res.data.token)

			authenticatedApi
				.get('user')
				.then(() => {
					setCookies('user', res.data.data)

					if (res.data.data.is_admin === 1) {
						navigate('/dashboard')
						return
					}
					navigate('/ponds')
				})
				.catch(() => {
					navigate('/login')
					removeCookie('token')
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
