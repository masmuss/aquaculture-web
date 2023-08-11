import { Card } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import { Link, useParams } from 'react-router-dom'
import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'

const PondList = () => {
	const { ponds, loading, error } = usePonds()
	const { hardware_id } = useParams()
	const pond = ponds.find(pond => pond.hardware_id == hardware_id)

	console.log(pond)

	if (error) {
		return <p>{error}</p>
	}
	return (
		<NavbarSidebarLayout isFooter={false}>
			<div className="mx-4 mt-10">
				<div className="flex items-center justify-end">
					<Link
						to={`/ponds/${pond?.hardware_id}/create`}
						type="button"
						className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Tambah Kolam
					</Link>
				</div>
				<div className="grid-rows-auto mt-10 grid grid-cols-4 gap-4">
					{loading ? (
						<p>Loading...</p>
					) : (
						pond.pools.map(pool => (
							<Link
								to={`/pools/${pond.hardware_id}/${pool.id}`}
								key={pool.id}
							>
								<Card
									className="w-full border-2 border-gray-200 transition-all hover:bg-gray-100"
									key={pool.id}
								>
									<h5 className="flex items-center gap-3 text-2xl font-bold tracking-wide text-gray-700 dark:text-white">
										<p>{pool.name}</p>
									</h5>
									<ul className="space-y-3">
										<li className="flex items-center space-x-3">
											<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
												Panjang: {pool.long} m
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
												Lebar: {pool.wide} m
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
												Kedalaman: {pool.depth} m
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<span className="flex items-center gap-2 text-base font-normal leading-tight text-gray-700 dark:text-gray-400">
												{pool.noted}
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

export default PondList
