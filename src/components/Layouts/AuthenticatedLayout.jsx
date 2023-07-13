import Aside from './partials/aside'
import Navbar from './partials/navbar'

// eslint-disable-next-line react/prop-types
const AuthenticatedLayout = ({ children }) => {
	return (
		<div className="flex w-full">
			<Aside />
			<div className="w-full">
				<Navbar />
				<div className="p-5">{children}</div>
			</div>
		</div>
	)
}

export default AuthenticatedLayout
