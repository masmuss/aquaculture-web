import { Card } from 'flowbite-react'
import { usePonds } from '../../../hooks/ponds'
import { Link } from 'react-router-dom'
import { HiQrcode, HiLocationMarker, HiPencil } from 'react-icons/hi'

const Pond = () => {
	const { ponds, loading, error } = usePonds()

	if (error) {
		return <p>{error}</p>
	}

	return (
		<div className="grid-rows-auto grid grid-cols-4 gap-4">
			{loading ? (
				<p>Loading...</p>
			) : (
				ponds.map(pond => (
					<Link to={`/ponds/${pond.id}`} key={pond.id}>
						<Card className="w-full border-2 border-gray-200">
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
	)
}

export default Pond
