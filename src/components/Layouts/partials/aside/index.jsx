import { Sidebar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../hooks/auth'

import {
	MdOutlineWater,
	MdOutlineDashboard,
	MdOutlinePeople
} from 'react-icons/md'
import { Cookies } from 'react-cookie'

const Aside = () => {
	const cookie = new Cookies()
	const user = cookie.get('user')
	const { logout } = useAuth()

	const destroySession = () => {
		logout()
	}

	return (
		<Sidebar className="h-screen w-1/6 border-r-2">
			<Sidebar.Logo
				href="#"
				img="/vite.svg"
				imgAlt="Flowbite logo"
				className="px-3 py-4"
			>
				<p className="font-semibold uppercase tracking-wider">
					aquaculture
				</p>
			</Sidebar.Logo>
			<Sidebar.Items className="px-">
				<Sidebar.ItemGroup>
					<Link to="/dashboard">
						<Sidebar.Item icon={MdOutlineDashboard}>
							Dashboard
						</Sidebar.Item>
					</Link>
					<Link to="/ponds">
						<Sidebar.Item icon={MdOutlineWater}>Ponds</Sidebar.Item>
					</Link>
					<Button onClick={destroySession}>Sign out</Button>
					{user?.is_admin === 1 && (
						<Link to="/users">
							<Sidebar.Item icon={MdOutlinePeople}>
								Users
							</Sidebar.Item>
						</Link>
					)}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default Aside
