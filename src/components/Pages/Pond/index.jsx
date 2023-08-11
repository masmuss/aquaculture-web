import { Card } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import { Link, useNavigate } from 'react-router-dom'
import { HiQrcode, HiLocationMarker, HiPencil } from 'react-icons/hi'
import { HiArchiveBoxArrowDown } from 'react-icons/hi2'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'

const Pond = () => {
	let navigate = useNavigate()
	const { ponds, loading, error } = usePonds()

	const deletePonds = async id => {
		const cookies = new Cookies()
		const token = cookies.get('token')
		res = await axios
			.delete(`http://127.0.0.1:8000/api/ponds/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => {
				console.log(res)
				navigate('/ponds')
			})
			.catch(err => console.log(err))
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<NavbarSidebarLayout isFooter={false}>
			<div className="flex justify-end">
				<Link
					to="/ponds/create"
					type="button"
					className="mb-2 mr-5 mt-10 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Tambah Tambak
				</Link>
			</div>
			<div className="grid-rows-auto mx-5 mt-3 grid grid-cols-4 gap-4">
				{loading ? (
					<p>Loading...</p>
				) : (
					ponds.map(pond => (
						<Link to={`/ponds/${pond.hardware_id}`} key={pond.id}>
							<Card className="w-full border-2 border-gray-200 transition-all hover:bg-gray-100">
								<div className="flex items-center justify-between gap-3">
									<div className="title flex gap-3  text-2xl font-bold tracking-wide text-gray-700 dark:text-white">
										<HiQrcode
											size="1.5em"
											className="text-gray-800"
										/>
										<p>{pond.hardware_id}</p>
									</div>
									<div className="flex gap-2">
										<Link to={`/ponds/edit/${pond?.id}`}>
											<HiPencil
												className="text-green-500 hover:text-green-600"
												size="1.5em"
											/>
										</Link>
										<HiArchiveBoxArrowDown
											className="text-2xl text-red-600 hover:text-red-700"
											onClick={() =>
												window.confirm('yakin deck?')
													? deletePonds(pond?.id)
													: ''
											}
										/>
									</div>
								</div>

								<ul className="space-y-3">
									<li className="flex items-center space-x-3">
										<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
											<HiPencil
												className="text-gray-800"
												size="1.5em"
											/>
											{pond.name}
										</span>
									</li>
									<li className="flex items-center justify-between space-x-3">
										<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
											<HiLocationMarker
												className="text-gray-800"
												size="1.2em"
											/>
											{pond.address}
										</span>
									</li>
								</ul>
							</Card>
						</Link>
					))
				)}
			</div>
		</NavbarSidebarLayout>
	)
}

export default Pond
