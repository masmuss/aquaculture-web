import React from 'react'
import { Button } from 'flowbite-react'

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false)
	return (
  <header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
      <a href="#">
        <span class="text-2xl font-extrabold text-blue-600">Aquaculture</span>
      </a>
      <div class="flex items-center space-x-1">
        <ul class="hidden space-x-2 md:inline-flex">
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Layanan</a></li>
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Prediksi</a></li>
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Tentang Kami</a></li>
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Hubungi Kami</a></li>
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Panduan</a></li>
          <Button gradientMonochrome="info" pill>Sign In</Button>

        </ul>
        <div class="inline-flex md:hidden">
          <button class="flex-none px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <span class="sr-only">Open Menu</span>
          </button>
        </div>
      </div>
    </div>
  </header>
	)
}
