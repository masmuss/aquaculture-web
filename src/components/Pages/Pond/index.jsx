import { Card } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import { Link } from 'react-router-dom'
import { HiQrcode, HiLocationMarker, HiPencil } from 'react-icons/hi'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'

const Pond = () => {
	const { ponds, loading, error } = usePonds()

	if (error) {
		return <p>{error}</p>
	}

	return (
		<NavbarSidebarLayout isFooter={false}>
			<div className="px-4 pt-10">
				<div className="flex justify-end">
					<Link
						to="/ponds/create"
						type="button"
						className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Tambah
					</Link>
				</div>

				<div className="grid-rows-auto grid grid-cols-4 gap-4">
					{loading ? (
						<p>Loading...</p>
					) : (
						ponds.map(pond => (
							<Link
								to={`/ponds/${pond.hardware_id}`}
								key={pond.id}
							>
								<Card className="w-full border-2 border-gray-200 transition-all hover:bg-gray-100">
									<h5 className="flex items-center gap-3 text-2xl font-bold tracking-wide text-gray-700 dark:text-white">
										<HiQrcode
											size="1.5em"
											className="text-gray-800"
										/>
										<p>{pond.hardware_id}</p>
									</h5>
									<ul className="space-y-3">
										<li className="flex items-center space-x-3">
											<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
												<HiPencil
													className="text-gray-800"
													size="1.2em"
												/>
												{pond.name}
											</span>
										</li>
										<li className="flex items-center space-x-3">
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
			</div>
		</NavbarSidebarLayout>
	)
}

export default Pond
