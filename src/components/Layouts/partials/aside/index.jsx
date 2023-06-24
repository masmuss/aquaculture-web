import { Sidebar } from 'flowbite-react'
import {
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
	HiArrowSmRight
} from 'react-icons/hi'

const Aside = () => {
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
					<Sidebar.Item href="#" icon={HiChartPie}>
						<p>Dashboard</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiViewBoards}>
						<p>Kanban</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiInbox}>
						<p>Inbox</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiUser}>
						<p>Users</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiShoppingBag}>
						<p>Products</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiArrowSmRight}>
						<p>Sign In</p>
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiTable}>
						<p>Sign Up</p>
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default Aside
