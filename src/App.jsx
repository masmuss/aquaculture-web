import { Route, Routes } from 'react-router-dom'
import { ProtectRoutes } from './hooks/protectedRoutes'
import Dashboard from './components/Pages/Dashboard'
import Login from './components/Pages/Login'
import Pond from './components/Pages/Pond'
import Pool from './components/Pages/Pool'
import PondList from './components/Pages/Pond/PondList'
import Users from './components/Pages/Users'
import CreatePonds from './components/Pages/Pond/CreatePonds'
import Register from './components/Pages/Register'
import Home from './components/Pages/Home'

import { Flowbite } from 'flowbite-react'
import flowbiteTheme from './flowbiteTheme'

export default function App() {
	return (
		<Flowbite theme={{ theme: flowbiteTheme }}>
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<ProtectRoutes />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/users" element={<Users />} />

					<Route path="/ponds">
						<Route path="" element={<Pond />} />
						<Route
							path="/ponds/:hardware_id"
							element={<PondList />}
						/>
						<Route path="/ponds/create" element={<CreatePonds />} />
					</Route>

					<Route path="/pools/:hardware_id/:id" element={<Pool />} />
				</Route>
			</Routes>
		</Flowbite>
	)
}
