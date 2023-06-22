import { Route, Routes, Navigate } from 'react-router-dom'
import { ProtectRoutes } from './hooks/protectedRoutes'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="home" exact />} />
			<Route path="/login" element={<Login />} />

			<Route element={<ProtectRoutes />}>
				<Route path="/home" element={<Home />} />
			</Route>
		</Routes>
	)
}
