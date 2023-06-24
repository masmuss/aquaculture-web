import { Sidebar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { MdOutlineWater, MdOutlineDashboard } from 'react-icons/md'

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
					<Link to="/dashboard">
						<Sidebar.Item icon={MdOutlineDashboard}>
							Dashboard
						</Sidebar.Item>
					</Link>
					<Link to="/ponds">
						<Sidebar.Item icon={MdOutlineWater}>Ponds</Sidebar.Item>
					</Link>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default Aside
