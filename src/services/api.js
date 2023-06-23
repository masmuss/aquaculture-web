import axios from 'axios'
import { Cookies } from 'react-cookie'

const apiBaseURL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
	baseURL: apiBaseURL
})

const authenticatedApi = axios.create({
	baseURL: apiBaseURL,
	headers: {
		Authorization: `Bearer ${new Cookies().get('token')}`
	}
})

export { authenticatedApi }
export default api
