import { useState } from 'react'
import { useAuth } from '../../../hooks/auth'
import { Navigate, Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phone_number, setPhone] = useState('')
	const [name, setName] = useState('')
	const [errors, setErrors] = useState({})
	const [message, setMessage] = useState('')
	const { register, cookies } = useAuth()

	if (cookies?.token) {
		return <Navigate to="/home" />
	}

	const handleRegister = () => {
		register({ name, email, phone_number, password }).catch(err => {
			if (err.response) {
				setErrors(err.response.data.errors)
				setMessage(err.response.data.message)
			}
		})

		console.log(errors)
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8 lg:max-w-xl">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
					Sign Up
				</h2>
				<div className="mt-8 space-y-6">
					{message && (
						<div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-sm text-red-700">
							<span className="block sm:inline">{message}</span>
						</div>
					)}
					<div>
						<Label
							htmlFor="name"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your Name
						</Label>
						<TextInput
							type="text"
							name="name"
							placeholder="Your Name"
							onChange={e => setName(e.target.value)}
							color={errors?.name && 'failure'}
							helperText={
								errors?.name && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.name}
									</span>
								)
							}
						/>
					</div>
					<div>
						<Label
							htmlFor="email"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your Email
						</Label>
						<TextInput
							type="email"
							name="email"
							placeholder="johndoe@example.com"
							onChange={e => setEmail(e.target.value)}
							color={errors?.email && 'failure'}
							helperText={
								errors?.email && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.email}
									</span>
								)
							}
						/>
					</div>
					<div>
						<Label
							htmlFor="phone"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your Phone Number
						</Label>
						<TextInput
							type="text"
							name="phone"
							placeholder="08xxxxxxx"
							onChange={e => setPhone(e.target.value)}
							color={errors?.phone_number && 'failure'}
							helperText={
								errors?.phone_number && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.phone_number}
									</span>
								)
							}
						/>
					</div>
					<div>
						<Label
							htmlFor="password"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Your Password
						</Label>
						<TextInput
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							onChange={e => setPassword(e.target.value)}
							color={errors?.password && 'failure'}
							helperText={
								errors?.password && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.password}
									</span>
								)
							}
						/>
					</div>
					<Button type="submit" onClick={handleRegister}>
						Create Account
					</Button>
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Has Account?{' '}
                
						<Link to="/login" className="text-blue-600 hover:underline dark:text-blue-500">
							Sign In
						</Link>

					</div>
				</div>
			</div>
		</div>
	)
}
