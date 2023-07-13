import { UserProvider } from './auth'

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children  }) => (
	<>
		<UserProvider>{children}</UserProvider>
	</>
)

export default AppProvider
