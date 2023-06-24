import { Avatar, Dropdown } from 'flowbite-react'
import { HiLogout } from 'react-icons/hi'
import { useAuth } from '../../../../hooks/auth'
import { Cookies } from 'react-cookie'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

const Navbar = () => {
	const { logout } = useAuth()

	const destroySession = () => {
		logout()
	}

	const cookie = new Cookies()
	const user = cookie.get('user')
	const location = useLocation()

	return (
		<nav className="flex w-full items-center justify-between border-b-2 bg-gray-50 px-5 py-6">
			<div>
				<Breadcrumbs />
				<p className="mt-2 text-4xl font-bold">
					{location.pathname.slice(1).charAt(0).toUpperCase() +
						location.pathname.slice(2)}
				</p>
			</div>
			<Dropdown
				label={
					<div className="flex flex-wrap items-center gap-3">
						<Avatar rounded />
						<p>Welcome back, {user?.name}!</p>
					</div>
				}
				inline
			>
				<Dropdown.Header>
					<span className="block text-sm">{user?.name}</span>
					<span className="block truncate text-sm font-medium">
						{user?.email}
					</span>
				</Dropdown.Header>
				<Dropdown.Item icon={HiLogout} onClick={destroySession}>
					Sign out
				</Dropdown.Item>
			</Dropdown>
		</nav>
	)
}

export default Navbar
