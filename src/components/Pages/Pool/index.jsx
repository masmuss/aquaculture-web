import { useParams } from 'react-router-dom'
import { usePools } from '../../../hooks/pools'
import { Table } from 'flowbite-react'

const Pool = () => {
	const { hardware_id, id } = useParams()
	const { pools, loading, error } = usePools()

	if (error) {
		return <p>{error}</p>
	}

	const pool = pools.find(pool => pool.hardware_id == hardware_id)

	console.log(pool?.tools)

	return (
		<Table>
			<Table.Head>
				<Table.HeadCell>#</Table.HeadCell>
				<Table.HeadCell>Waktu & Tanggal</Table.HeadCell>
				<Table.HeadCell>pH</Table.HeadCell>
				<Table.HeadCell>Salinitas (ppt)</Table.HeadCell>
				<Table.HeadCell>Suhu (C)</Table.HeadCell>
				<Table.HeadCell>DO (ppm)</Table.HeadCell>
			</Table.Head>
			<Table.Body className="divide-y">
				{loading ? (
					<tr>
						<td colSpan="5" className="text-center">
							Loading...
						</td>
					</tr>
				) : (
					pool.tools.map((tool, index) => (
						<Table.Row
							className="bg-white dark:border-gray-700 dark:bg-gray-800"
							key={tool.id}
						>
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{index + 1}
							</Table.Cell>
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{new Date(tool?.time).toLocaleDateString(
									'en-US',
									{
										timeZone: 'Asia/Jakarta',
										hour: 'numeric',
										minute: 'numeric',
										second: 'numeric'
									}
								)}
							</Table.Cell>
							<Table.Cell>{tool?.ph}</Table.Cell>
							<Table.Cell>{tool?.salinity}</Table.Cell>
							<Table.Cell>{tool?.temperature}</Table.Cell>
							<Table.Cell>{tool?.do}</Table.Cell>
						</Table.Row>
					))
				)}
			</Table.Body>
		</Table>
	)
}

export default Pool
