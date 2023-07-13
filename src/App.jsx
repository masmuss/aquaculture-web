import { Route, Routes, Navigate } from 'react-router-dom'
import { ProtectRoutes } from './hooks/protectedRoutes'
import { Cookies } from 'react-cookie'
import Dashboard from './components/Pages/Dashboard'
import Login from './components/Pages/Login'
import Pond from './components/Pages/Pond'
import Pool from './components/Pages/Pool'
import PondList from './components/Pages/Pond/PondList'
import Users from './components/Pages/Users'
import CreatePonds from './components/Pages/Pond/CreatePonds'

export default function App() {
	const cookie = new Cookies()
	const user = cookie.get('user')

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Navigate
						to={user?.is_admin === 1 ? 'dashboard' : 'ponds'}
						exact
					/>
				}
			/>
			<Route path="/login" element={<Login />} />

			<Route element={<ProtectRoutes />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/users" element={<Users />} />

				<Route path="/ponds">
					<Route path="" element={<Pond />} />
					<Route path="/ponds/:hardware_id" element={<PondList />} />
					<Route path="/ponds/create" element={<CreatePonds/>} />
				</Route>

				<Route path="/pools/:hardware_id/:id" element={<Pool />} />
			</Route>
		</Routes>
	)
}
