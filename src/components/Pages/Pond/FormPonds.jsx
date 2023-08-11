import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticatedApi } from '../../../services/api'
import { Button, TextInput, Label } from 'flowbite-react'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'
import { usePonds } from '../../../hooks/ponds'
import { useParams } from 'react-router-dom'

const FormPonds = () => {
	let navigate = useNavigate()
	const [ponds, setPonds] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const params = useParams()

	const {
		ponds: pondsCollection,
		loading: pondLoading,
		error: pondError
	} = usePonds()
	const pond = pondsCollection.find(pond => pond.id == params.pond_id)

	console.log(pond)
	console.log(params)

	// const fetchPondsById = async () => {
	// 	try {
	// 		const { data } = await authenticatedApi.get(`/ponds/${id}`)
	// 		setPonds(data)
	// 		setLoading(false)
	// 	} catch (error) {
	// 		setError(error)
	// 		setLoading(false)
	// 	}
	// }
	// useEffect(() => {
	// 	fetchPondsById()
	// }, [])

	// const pond = ponds.find(pond => pond.hardware_id == hardware_id)
	// console.log(fetchPondsById?.hardware_id)

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
					{params?.pond_id ? 'Edit' : 'Tambahkan'} Ponds
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
						// defaultValue={input.hardware_id}
						placeholder={params?.pond_id ? pond?.hardware_id: 'Hardware ID'}
						value={params? input.hardware_id: pond?.hardware_id}
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
						placeholder={params?.pond_id ? pond?.name: 'Nama Tambak'}
						name="name"
						// defaultValue={input.name}
						value={params? input.name : pond?.name}
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
						placeholder={params?.pond_id ? pond?.address: 'Alamat'}
						name="address"
						// defaultValue={input.address}
						value={params? input.address: pond?.address}
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

export default FormPonds
