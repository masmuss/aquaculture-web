import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticatedApi } from '../../../services/api'
import { Button, TextInput, Label } from 'flowbite-react'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'

const CreatePonds = () => {
	let navigate = useNavigate()
	const [input, setInput] = useState({
		hardware_id: '',
		name: '',
		address: ''
	})
	const [errors, setErrors] = useState({})
	const [message, setMessage] = useState('')

	const handleInput = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = () => {
		authenticatedApi
			.post('ponds', input)
			.then(() => {
				navigate('/ponds')
			})
			.catch(err => {
				if (err.response) {
					setErrors(err.response.data.errors)
					setMessage(err.response.data.message)
				}
			})

		setInput({
			hardware_id: '',
			name: '',
			address: ''
		})
	}

	return (
		<NavbarSidebarLayout isFooter={false}>
			<div className="px-4 pt-10">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					Tambahkan Ponds
				</h5>
				{message && (
					<div className="relative mb-3 rounded border border-red-400 bg-red-100 px-4 py-3 text-sm text-red-700">
						<span className="block sm:inline">{message}</span>
					</div>
				)}
				<div className="mb-3">
					<Label htmlFor="hardware_id">Hardware ID</Label>
					<TextInput
						name="hardware_id"
						placeholder="A30.1"
						value={input.hardware_id}
						onChange={handleInput}
						color={errors?.hardware_id && 'failure'}
						helperText={
							errors?.hardware_id && (
								<span className="mt-2 text-sm text-red-500">
									{errors?.hardware_id}
								</span>
							)
						}
					/>
				</div>

				<div className="mb-3">
					<Label htmlFor="name">Nama Tambak</Label>
					<TextInput
						type="text"
						placeholder="Tambak A30"
						name="name"
						value={input.name}
						onChange={handleInput}
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

				<div className="mb-3">
					<Label htmlFor="address">Alamat</Label>
					<TextInput
						type="text"
						placeholder="Jl. Raya Bogor"
						name="address"
						value={input.address}
						onChange={handleInput}
						color={errors?.address && 'failure'}
						helperText={
							errors?.address && (
								<span className="mt-2 text-sm text-red-500">
									{errors?.address}
								</span>
							)
						}
					/>
				</div>

				<div className="flex justify-end">
					<Button onClick={handleSubmit}>Add Pond</Button>
				</div>
			</div>
		</NavbarSidebarLayout>
	)
}

export default CreatePonds
