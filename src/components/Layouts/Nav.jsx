import { DarkThemeToggle, Navbar } from 'flowbite-react'

const Nav = function () {
	return (
		<Navbar
			fluid
			className="fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
		>
			<div className="w-full p-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Navbar.Brand href="/">
							<img
								alt=""
								src="/images/logo.svg"
								className="mr-3 h-6 sm:h-8"
							/>
							<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
								Flowbite
							</span>
						</Navbar.Brand>
					</div>
					<div className="flex items-center gap-3">
						<DarkThemeToggle />
					</div>
				</div>
			</div>
		</Navbar>
	)
}

export default Nav
