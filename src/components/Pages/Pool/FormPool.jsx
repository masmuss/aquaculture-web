import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { authenticatedApi } from '../../../services/api'
import { Button, TextInput, Label } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'
import axios from 'axios'

const FormPool = () => {
	const { ponds, loading, error } = usePonds()
	const { hardware_id } = useParams()
	let navigate = useNavigate()
	const pond = ponds.find(pond => pond.hardware_id == hardware_id)

	console.log(hardware_id);
	const [input, setInput] = useState({
		hardware_id: hardware_id,
		name: '',
		wide: '',
		long: '',
		depth: '',
		noted: ''
	})
	const [errors, setErrors] = useState({})
	const [message, setMessage] = useState('')

	const handleInput = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('input')

		authenticatedApi
			.post('pools', input)
			.then(res => {
				console.log(res)
				navigate(`/ponds/${hardware_id}`)
			})
			.catch(err => {
				if (err.response) {
					setErrors(err.response.data.errors)
					setMessage(err.response.data.message)
				}
			})

		// res = axios
		// 	.post(`${authenticatedApi}/pools`, input)
		// 	.then(res => {
		// 		console.log(res)
		// 		navigate('/ponds/:hardware_id')
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})

	}

	return (
		<NavbarSidebarLayout isFooter={false}>
			<form onSubmit={handleSubmit}>
				<div className="px-4 pt-10">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						Tambahkan Kolam
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
							placeholder={pond?.hardware_id}
							value={input.hardware_id}
							onChange={handleInput}
							color={errors?.hardware_id && 'failure'}
							disabled
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
						<Label htmlFor="wide">Lebar</Label>
						<TextInput
							type="text"
							placeholder="Lebar"
							name="wide"
							value={input.wide}
							onChange={handleInput}
							color={errors?.wide && 'failure'}
							helperText={
								errors?.wide && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.wide}
									</span>
								)
							}
						/>
					</div>
					<div className="mb-3">
						<Label htmlFor="long">Panjang</Label>
						<TextInput
							type="text"
							placeholder="Panjang"
							name="long"
							value={input.long}
							onChange={handleInput}
							color={errors?.long && 'failure'}
							helperText={
								errors?.long && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.long}
									</span>
								)
							}
						/>
					</div>
					<div className="mb-3">
						<Label htmlFor="depth">Kedalaman</Label>
						<TextInput
							type="text"
							placeholder="Kedalaman"
							name="depth"
							value={input.depth}
							onChange={handleInput}
							color={errors?.depth && 'failure'}
							helperText={
								errors?.depth && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.depth}
									</span>
								)
							}
						/>
					</div>
					<div className="mb-3">
						<Label htmlFor="noted">Noted</Label>
						<TextInput
							type="text"
							placeholder="Catatan"
							name="noted"
							value={input.noted}
							onChange={handleInput}
							color={errors?.noted && 'failure'}
							helperText={
								errors?.noted && (
									<span className="mt-2 text-sm text-red-500">
										{errors?.noted}
									</span>
								)
							}
						/>
					</div>

					<div className="flex justify-end">
						<Button type="submit">Add Pool</Button>
					</div>
				</div>
			</form>
		</NavbarSidebarLayout>
	)
}

export default FormPool
