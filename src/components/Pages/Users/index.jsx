import { Table } from 'flowbite-react'
import { useUsers } from '../../../hooks/users'
import { datetimeConverter } from '../../../utils/datetimeConverter'

const Users = () => {
	const { users, loading } = useUsers()

	return (
		<Table>
			<Table.Head>
				<Table.HeadCell>Name</Table.HeadCell>
				<Table.HeadCell>Email</Table.HeadCell>
				<Table.HeadCell>Status</Table.HeadCell>
				<Table.HeadCell>Last Seen</Table.HeadCell>
			</Table.Head>
			<Table.Body className="divide-y">
				{loading ? (
					<tr>
						<td colSpan="5" className="text-center">
							Loading...
						</td>
					</tr>
				) : (
					users.map(user => (
						<Table.Row
							className="bg-white dark:border-gray-700 dark:bg-gray-800"
							key={user.id}
						>
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{user?.name}
							</Table.Cell>
							<Table.Cell>{user?.email}</Table.Cell>
							<Table.Cell>
								{new Date(user?.last_seen).toLocaleString(
									'en-US',
									{
										timeZone: 'Asia/Jakarta'
									}
								)}
							</Table.Cell>
							<Table.Cell>
								{user?.last_seen
									? datetimeConverter(user?.last_seen)
									: 'Never'}
							</Table.Cell>
						</Table.Row>
					))
				)}
			</Table.Body>
		</Table>
	)
}

export default Users
