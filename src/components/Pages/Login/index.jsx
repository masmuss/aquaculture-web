import { useState } from 'react'
import { useAuth } from '../../../hooks/auth'
import { Navigate } from 'react-router-dom'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, cookies } = useAuth()

	if (cookies.token) {
		return <Navigate to="/home" />
	}

	const handleLogin = () => {
		login({ email, password })
	}

	return (
		<div>
			<input
				onChange={e => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				onChange={e => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button onClick={handleLogin} type="submit">
				Login
			</button>
		</div>
	)
}
