import { Route, Routes } from 'react-router-dom'
import { ProtectRoutes } from './hooks/protectedRoutes'
import Dashboard from './components/Pages/Dashboard'
import Login from './components/Pages/Login'
import Pond from './components/Pages/Pond'
import Pool from './components/Pages/Pool'
import PondList from './components/Pages/Pond/PondList'
import Users from './components/Pages/Users'
import FormPonds from './components/Pages/Pond/FormPonds'
import Register from './components/Pages/Register'
import Home from './components/Pages/Home'
import FormPool from './components/Pages/Pool/FormPool'

export default function App() {
	return (
		<Routes>
			<Route path="/" index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			<Route element={<ProtectRoutes />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/users" element={<Users />} />

				<Route path="/ponds">
					<Route path="" element={<Pond />} />
					<Route path="/ponds/:hardware_id" element={<PondList />} />
					<Route
						path="/ponds/:hardware_id/create"
						element={<FormPool />}
					/>
					<Route path="/ponds/create" element={<FormPonds />} />
					<Route path="/ponds/edit/:pond_id" element={<FormPonds />} />
				</Route>

				<Route path="/pools/:hardware_id/:id" element={<Pool />} />
			</Route>
		</Routes>
	)
}