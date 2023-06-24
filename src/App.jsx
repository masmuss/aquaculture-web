import { Route, Routes, Navigate } from 'react-router-dom'
import { ProtectRoutes } from './hooks/protectedRoutes'
import Dashboard from './components/Pages/Dashboard'
import Login from './components/Pages/Login'
import Pond from './components/Pages/Pond'
import PondList from './components/Pages/Pond/PondList'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="dashboard" exact />} />
			<Route path="/login" element={<Login />} />

			<Route element={<ProtectRoutes />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/ponds">
					<Route path="" element={<Pond />} />
					<Route path="/ponds/:id" element={<PondList />} />
				</Route>
			</Route>
		</Routes>
	)
}
