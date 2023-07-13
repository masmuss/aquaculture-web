import { Sidebar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import {
	MdOutlineWater,
	MdOutlineDashboard,
	MdOutlinePeople
} from 'react-icons/md'
import { HiLogout } from 'react-icons/hi'
import { Cookies } from 'react-cookie'
import { useAuth } from '../../hooks/auth'

const ExampleSidebar = function () {
	const [currentPage, setCurrentPage] = useState('')
	const { logout } = useAuth()

	const destroySession = () => {
		logout()
	}

	const cookie = new Cookies()
	const user = cookie.get('user')

	useEffect(() => {
		const newPage = window.location.pathname

		setCurrentPage(newPage)
	}, [setCurrentPage])

	return (
		<Sidebar
			aria-label="Sidebar with multi-level dropdown example"
			className="transition-width fixed left-0 top-0 z-20 flex h-full flex-shrink-0 flex-col border-r border-gray-200 pt-16 duration-75 dark:border-gray-700 lg:flex"
		>
			<div className="flex h-full flex-col justify-between py-2">
				<div>
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							<Sidebar.Item
								href="/dashboard"
								icon={MdOutlineDashboard}
								className={
									'/dashboard' === currentPage
										? 'bg-gray-100 dark:bg-gray-700'
										: ''
								}
							>
								Dashboard
							</Sidebar.Item>
							<Sidebar.Item
								href="/ponds"
								icon={MdOutlineWater}
								className={
									'/ponds' === currentPage
										? 'bg-gray-100 dark:bg-gray-700'
										: ''
								}
							>
								Ponds
							</Sidebar.Item>
							{user?.is_admin === 1 && (
								<Sidebar.Item
									href="/users"
									icon={MdOutlinePeople}
									className={
										'/users' === currentPage
											? 'bg-gray-100 dark:bg-gray-700'
											: ''
									}
								>
									Users
								</Sidebar.Item>
							)}
						</Sidebar.ItemGroup>
						<Sidebar.ItemGroup>
							<Sidebar.Item
								icon={HiLogout}
								onClick={destroySession}
							>
								Logout
							</Sidebar.Item>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</div>
			</div>
		</Sidebar>
	)
}

export default ExampleSidebar
