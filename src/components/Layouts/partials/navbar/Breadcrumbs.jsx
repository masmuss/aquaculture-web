import { Breadcrumb } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { HiArrowSmRight } from 'react-icons/hi'

const Breadcrumbs = () => {
	const location = useLocation()

	return (
		<Breadcrumb className="text-sm" separator={<HiArrowSmRight />}>
			{location.pathname
				.slice(1)
				.split('/')
				.map((item, index) => {
					return (
						<Breadcrumb.Item key={index}>
							<Link to={`/${item}`}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</Link>
						</Breadcrumb.Item>
					)
				})}
		</Breadcrumb>
	)
}

export default Breadcrumbs
