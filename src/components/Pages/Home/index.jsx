import { useEffect, useState } from 'react'
import { useAuth } from '../../../hooks/auth'
import { authenticatedApi } from '../../../services/api'

export default function Home() {
	const [user, setUser] = useState({})
	const { logout } = useAuth()

	const destroySession = () => {
		logout()
	}

	useEffect(() => {
		authenticatedApi.get('user').then(res => setUser(res.data))
	}, [])

	console.log(user)

	return (
		<div>
			<h1 className="text-lg font-semibold">Home Page</h1>
			<p className="text-sm text-gray-500">Welcome, {user.name}</p>
			<button onClick={destroySession}>Logout</button>
		</div>
	)
}
