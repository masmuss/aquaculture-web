import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../auth'
import AuthenticatedLayout from '../../components/Layouts/AuthenticatedLayout'

export const ProtectRoutes = () => {
	const { cookies } = useAuth()

	return cookies.token ? (
		<AuthenticatedLayout>
			<Outlet />
		</AuthenticatedLayout>
	) : (
		<Navigate to="/login" replace />
	)
}
