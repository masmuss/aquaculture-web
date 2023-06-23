import { useState } from 'react'
import { useAuth } from '../../../hooks/auth'
import { Navigate } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})
	const { login, cookies } = useAuth()

	if (cookies.token) {
		return <Navigate to="/home" />
	}

	const handleLogin = () => {
		login({ email, password }).catch(
			err => err.response && setErrors(err.response.data.errors)
		)

		console.log(errors)
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8 lg:max-w-xl">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					Sign in
				</h2>
				<div className="mt-8 space-y-6">
					<div>
						<Label
							htmlFor="email"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your email
						</Label>
						<TextInput
							type="email"
							name="email"
							placeholder="johndoe@example.com"
							onChange={ e => setEmail(e.target.value) }
							color={errors.email && 'failure'}
							helperText={
								errors.email && (
									<div className="mt-2 text-sm text-red-500">
										{errors.email}
									</div>
								)
							}
						/>
					</div>
					<div>
						<Label
							htmlFor="password"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your password
						</Label>
						<TextInput
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							onChange={ e => setPassword(e.target.value) }
							color={errors.password && 'failure'}
							helperText={
								errors.password && (
									<div className="mt-2 text-sm text-red-500">
										{errors.password}
									</div>
								)
							}
						/>
					</div>
					<Button type="submit" onClick={handleLogin}>
						Login to your account
					</Button>
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Not registered yet?{' '}
						<a className="text-blue-600 hover:underline dark:text-blue-500">
							Create account
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
