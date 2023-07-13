import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'

const CreatePonds = () => {
	let navigate = useNavigate()
	const [input, setInput] = useState({
		hardware_id: '',
		name: '',
		address: ''
	})

	const handleInput = e => {
		let name = e.target.name
		let value = e.target.value

		if (name === 'hardware_id') {
			setInput({ ...input, hardware_id: value })
		} else if (name === 'name') {
			setInput({ ...input, name: value })
		} else if (name === 'address') {
			setInput({ ...input, address: value })
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		const cookies = new Cookies()
		const token = cookies.get('token')
		let { hardware_id, name, address } = input
		axios
			.post(
				'http://127.0.0.1:8000/api/ponds',
				{
					hardware_id,
					name,
					address
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			.then(res => {
				console.log(res)
				navigate('/ponds')
			})
			.catch(err => {
				console.log(err)
			})

		setInput({
			hardware_id: '',
			name: '',
			address: ''
		})
	}

	return (
		<>
			<div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					Tambahkan Ponds
				</h5>
				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
							Hardware ID
						</label>
						<input
							type="text"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
							name="hardware_id"
							value={input.hardware_id}
							onChange={handleInput}
						/>
					</div>

					<div className="mb-6">
						<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
							Kolam
						</label>
						<input
							type="text"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
							name="name"
							value={input.name}
							onChange={handleInput}
						/>
					</div>

					<div className="mb-6">
						<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
							Alamat
						</label>
						<input
							type="text"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
							name="address"
							value={input.address}
							onChange={handleInput}
						/>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default CreatePonds