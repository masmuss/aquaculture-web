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
		<div className="flex h-screen flex-col bg-gray-100">
			<div className="mx-2 my-20 grid place-items-center sm:my-auto">
				<div className="w-11/12 rounded-lg bg-white p-12 px-6 py-10 shadow-md sm:w-8/12 sm:px-10 sm:py-6 md:w-6/12 lg:w-5/12 lg:shadow-lg 2xl:w-4/12">
					<h2 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
						Login
					</h2>
					<div className="mt-10">
						<label
							htmlFor="email"
							className="block text-xs font-semibold uppercase text-gray-600"
						>
							E-mail
						</label>
						<input
							type="email"
							name="email"
							placeholder="e-mail address"
							autoComplete="email"
							className="mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none"
							onChange={e => setEmail(e.target.value)}
						/>
						<label
							htmlFor="password"
							className="mt-2 block text-xs font-semibold uppercase text-gray-600"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							placeholder="password"
							className="mb-4 mt-2 block w-full appearance-none border-b-2 border-gray-100 px-1 py-3 text-gray-800 focus:border-gray-200 focus:text-gray-500 focus:outline-none"
							onChange={e => setPassword(e.target.value)}
						/>
						<button
							onClick={handleLogin}
							type="submit"
							className="mt-10 w-full rounded-sm bg-gray-800 py-3 font-medium uppercase text-white hover:bg-gray-700 hover:shadow-none focus:outline-none"
						>
							Login
						</button>
						<div className="mt-8 text-center text-sm sm:mb-4 sm:flex sm:flex-wrap">
							<a href="#" className="flex-2 underline">
								Forgot password?
							</a>
							<p className="text-md mx-4 my-1 flex-1 text-gray-500 sm:my-auto">
								or
							</p>
							<a href="#" className="flex-2 underline">
								Create an Account
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
