import { Card } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import { Link, useParams } from 'react-router-dom'

const PondList = () => {
	const { ponds, loading, error } = usePonds()
	const { id } = useParams()
	const pond = ponds.find(pond => pond.id === id)

	console.log(pond)

	if (error) {
		return <p>{error}</p>
	}

	return (
		<div className="grid-rows-auto grid grid-cols-4 gap-4">
			{loading ? (
				<p>Loading...</p>
			) : (
				pond.pools.map(pool => (
					<Link to={`/pools/${pool.id}`} key={pool.id}>
						<Card className="w-full">
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
	)
}

export default PondList
