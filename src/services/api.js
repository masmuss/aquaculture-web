import axios from 'axios'
import { Cookies } from 'react-cookie'

const apiBaseURL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
	baseURL: apiBaseURL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
})

const authenticatedApi = axios.create({
	baseURL: apiBaseURL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
})

authenticatedApi.interceptors.request.use(
	config => {
		if (typeof window !== 'undefined') {
			const cookies = new Cookies()
			const token = cookies.get('token')
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export { authenticatedApi }
export default api
