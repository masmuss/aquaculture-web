import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
	const navigate = useNavigate()

	const redirect = () => {
		navigate('/login')
	}

	return (
		<header className="sticky top-0 z-30 w-full bg-white px-2 py-4 shadow-xl sm:px-4">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<a href="#">
					<span className="text-2xl font-extrabold text-blue-600">
						Aquaculture
					</span>
				</a>
				<div className="flex items-center space-x-1">
					<ul className="hidden space-x-2 md:inline-flex md:items-center">
						<li>
							<a
								href="#"
								className="rounded px-4 py-2 font-semibold text-gray-600"
							>
								Layanan
							</a>
						</li>
						<li>
							<a
								href="#"
								className="rounded px-4 py-2 font-semibold text-gray-600"
							>
								Prediksi
							</a>
						</li>
						<li>
							<a
								href="#"
								className="rounded px-4 py-2 font-semibold text-gray-600"
							>
								Tentang Kami
							</a>
						</li>
						<li>
							<a
								href="#"
								className="rounded px-4 py-2 font-semibold text-gray-600"
							>
								Hubungi Kami
							</a>
						</li>
						<li>
							<a
								href="#"
								className="rounded px-4 py-2 font-semibold text-gray-600"
							>
								Panduan
							</a>
						</li>
						<Button
							gradientmonochrome="info"
							pill=""
							onClick={redirect}
						>
							Sign In
						</Button>
					</ul>
					<div className="inline-flex md:hidden">
						<button className="flex-none px-2 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 8h16M4 16h16"
								/>
							</svg>
							<span className="sr-only">Open Menu</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
