import { useAuth } from '../../../hooks/auth'

export default function Home() {
	const { logout } = useAuth()

	const destroySession = () => {
		logout()
	}

	return (
		<div>
			<h1 className="text-lg font-semibold">Home Page</h1>
			<button onClick={destroySession}>Logout</button>
		</div>
	)
}
