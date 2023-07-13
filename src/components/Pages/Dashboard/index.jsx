import { Card } from 'flowbite-react'
import { useUsers } from '../../../hooks/users'
import { usePonds } from '../../../hooks/ponds'
import { usePools } from '../../../hooks/pools'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { PiWavesBold } from 'react-icons/pi'
import { Cookies } from 'react-cookie'

import NavbarSidebarLayout from '../../Layouts/NavbarSidebarLayout'

const DashboardPage = function () {
	const { users } = useUsers()
	const { ponds } = usePonds()
	const { pools } = usePools()
	const cookie = new Cookies()
	const user = cookie.get('user')

	return (
		<NavbarSidebarLayout isFooter={false}>
			<div className="px-4 pt-10">
				<div className="grid-rows-auto grid grid-cols-5 gap-4">
					{user?.is_admin === 1 && (
						<Card className="flex-grow border-2 border-gray-200 transition-all hover:bg-gray-100">
							<div className="flex items-center justify-start gap-4">
								<FiUsers className="w-2/5 text-5xl text-gray-800" />
								<div className="w-full">
									<p className="text-sm text-gray-600">
										Users
									</p>
									<h4 className="text-xl font-bold text-gray-700">
										{users?.length}{' '}
										{users?.length > 1 ? 'users' : 'user'}
									</h4>
								</div>
							</div>
						</Card>
					)}
					<Card className="flex-grow border-2 border-gray-200 transition-all hover:bg-gray-100">
						<div className="flex items-center justify-start gap-4">
							<FiSettings className="w-2/5 text-5xl text-gray-800" />
							<div className="w-full">
								<p className="text-sm text-gray-600">
									Ponds and active hardware
								</p>
								<h4 className="text-xl font-bold text-gray-700">
									{ponds?.length}{' '}
									{ponds?.length > 1 ? 'ponds' : 'pond'}
								</h4>
							</div>
						</div>
					</Card>

					<Card className="flex-grow border-2 border-gray-200 transition-all hover:bg-gray-100">
						<div className="flex items-center justify-start gap-4">
							<PiWavesBold className="w-2/5 text-5xl text-gray-800" />
							<div className="w-full">
								<p className="text-sm text-gray-600">
									Pools of ponds
								</p>
								<h4 className="text-xl font-bold text-gray-700">
									{pools?.length}{' '}
									{pools?.length > 1 ? 'pools' : 'pool'}
								</h4>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</NavbarSidebarLayout>
	)
}

export default DashboardPage
