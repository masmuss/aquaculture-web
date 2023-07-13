import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import pens from '../../../assets/img/logopens.png'
import aqua from '../../../assets/img/aqua.png'
import lpdp from '../../../assets/img/lpdp.png'
import kemendikbud from '../../../assets/img/kemendikbud.png'

export default function Landing() {
	return (
		<>
			<Navbar transparent />
			<main>
				<div
					className="relative flex content-center items-center justify-center pb-32 pt-16"
					style={{
						minHeight: '75vh'
					}}
				>
					<div
						className="absolute top-0 h-full w-full bg-cover bg-center"
						style={{
							backgroundImage:
								"url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/01/07084143/tambak-udang-aceh-tamiang-perikanan-budidaya.jpeg')"
						}}
					>
						<span
							id="blackOverlay"
							className="absolute h-full w-full bg-black opacity-50"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="flex flex-wrap items-center">
							<div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
								<div className="pr-12">
									<h1 className="text-5xl font-semibold text-white">
										Totally Integrated Smart Aquaculture
										System for Indonesia
									</h1>
									<p className="mt-4 text-lg text-gray-300">
										Sebuah platform digital yang dibangun
										dengan tujuan untuk mendukung penguatan
										sektor budidaya perairan (akuakultur)
										Indonesia yang maju dan mandiri.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
						style={{ height: '70px' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-current text-gray-300"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</div>

				<section className="-mt-24 bg-gray-300 pb-20">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
											<i className="fas fa-award"></i>
										</div>
										<h6 className="text-xl font-semibold">
											Memonitor Tambak
										</h6>
										<p className="mb-4 mt-2 text-gray-600">
											Dengan bergabung di TISASforINA,
											anda bisa melihat, memantau kondisi
											kolam anda, bisa melihat sejarah
											dari proses budidaya, memudahkan
											anda untuk melihat data kolam anda
											yang sekarang atau yang lampau.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full px-4 text-center md:w-4/12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg">
											<i className="fas fa-retweet"></i>
										</div>
										<h6 className="text-xl font-semibold">
											Sebagai Inovasi Bangsa
										</h6>
										<p className="mb-4 mt-2 text-gray-600">
											Dengan bergabung di TISASforINA,
											anda telah memberikan kontribusi
											untuk meningkatkan inovasi nasional
											dibidang akuakultur.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full px-4 pt-6 text-center md:w-4/12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-3 text-center text-white shadow-lg">
											<i className="fas fa-fingerprint"></i>
										</div>
										<h6 className="text-xl font-semibold">
											Kontribusi pada Aquakultur
										</h6>
										<p className="mb-4 mt-2 text-gray-600">
											Dengan bergabung di TISASforINA,
											anda telah memberikan kontribusi
											untuk meningkatkan penelitian
											dibidang akuakultur, membangun
											akuakultur Indonesia yang maju, kuat
											dan mandiri.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="container mx-auto px-4 ">
							<div className="flex flex-wrap justify-center text-center">
								<div className="w-full px-4 lg:w-6/12">
									<h2 className="text-4xl font-semibold text-black">
										Web Pendukung Tambak
									</h2>
								</div>
							</div>
							<div className="mt-12 flex flex-wrap justify-center">
								<div className="w-full px-6 text-center lg:w-6/12">
									<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
										<i className="fas fa-medal text-xl"></i>
									</div>
									<h6 className="mt-5 text-xl font-semibold text-black">
										Pusat Data Iklim Indonesia
									</h6>
									<p className="mb-4 mt-2 text-gray-500">
										Menampilkan data cuaca dan iklim
										historis nasional. Terdiri dari
										pengukuran suhu, curah hujan, angin, dan
										derajat harian yang dikontrol
										kualitasnya setiap hari, bulanan,
										musiman, dan tahunan serta data radar
										dan Iklim Normal 30 tahun.
									</p>
								</div>
								<div className="w-full px-6 text-center lg:w-6/12">
									<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
										<i className="fas fa-poll text-xl"></i>
									</div>
									<h5 className="mt-5 text-xl font-semibold text-black">
										Peta Angin dan Cuaca Global
									</h5>
									<p className="mb-4 mt-2 text-gray-500">
										Melihat kondisi angin, cuaca, lautan,
										dan polusi saat ini, seperti yang
										diperkirakan oleh superkomputer, pada
										peta animasi interaktif. Diperbarui
										setiap tiga jam.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div
						className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
						style={{ height: '80px' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-current text-white"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="mt-7 flex flex-wrap items-center">
						<div className="ml-auto mr-auto w-full px-4 md:w-5/12">
							<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-3 text-center text-gray-600 shadow-lg">
								<i className="fas fa-user-friends text-xl"></i>
							</div>
							<h3 className="mb-2 text-3xl font-semibold leading-normal">
								Tentang kami
							</h3>
							<p className="mb-4 mt-4 text-lg font-light leading-relaxed text-gray-700"></p>
							<p className="mb-4 mt-0 text-lg font-light leading-relaxed text-gray-700">
								TISASforINA adalah sebuah platform digital yang
								dibangun dengan tujuan untuk mendukung penguatan
								sektor budidaya perairan (akuakultur) Indonesia
								yang maju dan mandiri. Platform ini dibangun
								oleh tim Riset Grup Aquacultural Engineering
								Applied Technology (ACE App-Tech) Politeknik
								Elektronika Negeri Surabaya dan didanai oleh
								Direktorat Jenderal Pendidikan Vokasi,
								Kementerian Pendidikan dan Kebudayaan, Riset dan
								Teknologi, Republik Indonesia yang dikelola oleh
								Lembaga Pengelolaan Dana Pendidikan (LPDP) .
							</p>
							{/* <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a> */}
						</div>

						<div className="ml-auto mr-auto w-full px-4 md:w-4/12">
							<div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-pink-600 bg-white shadow-lg">
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
									className="w-full rounded-t-lg align-middle"
								/>
								<blockquote className="relative mb-4 p-8">
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 block w-full"
										style={{
											height: '95px',
											top: '-94px'
										}}
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="fill-current text-pink-600"
										></polygon>
									</svg>
									<h4 className="text-xl font-bold text-white">
										Top Notch Services
									</h4>
									<p className="text-md mt-2 font-light text-white">
										The Arctic Ocean freezes every winter
										and much of the sea-ice then thaws every
										summer, and that process will continue
										whatever happens.
									</p>
								</blockquote>
							</div>
						</div>
					</div>
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center">
							<div className="ml-auto mr-auto w-full px-4 md:w-4/12">
								<img
									alt="..."
									className="max-w-full rounded-lg shadow-lg"
									src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
								/>
							</div>
							<div className="ml-auto mr-auto w-full px-4 md:w-5/12">
								<div className="md:pr-12">
									<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-300 p-3 text-center text-pink-600 shadow-lg">
										<i className="fas fa-rocket text-xl"></i>
									</div>
									<h3 className="text-3xl font-semibold">
										About TISASforINA
									</h3>
									<p className="mt-4 text-lg leading-relaxed text-gray-600">
										TISASforINA merupakan singkatan dari
										Totally Integrated Smart Aquaculture
										System for Indonesia TISASforINA adalah
										sebuah platform online yang menjadi
										tempat bertemu pengusaha, peneliti,
										pengajar, komunitas akuakultur (budidaya
										air) serta pemerintah untuk
										mempromosikan potensi akuakultur
										Indonesia.
									</p>
									<ul className="mt-6 list-none">
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600">
														<i className="fas fa-fingerprint"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														VISI
													</h4>
												</div>
											</div>
										</li>
										<p>
											Mewujudkan sektor budidaya air untuk
											ketahanan pangan Indonesia yang
											mandiri, maju dan kuat berdasarkan
											keadilan dan beradab.
										</p>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600">
														<i className="fab fa-html5"></i>
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														MISI
													</h4>
												</div>
											</div>
										</li>
										<p>
											Mempertemukan dan mengkolaborasikan
											pengusaha, peneliti, pengajar,
											komunitas dan pemerintah untuk
											memiliki persamaan persepsi
											mengembangkan akuakultur Indonesia
											melalui penelitian, inovasi dan
											penerapan teknologi.
										</p>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pb-48 pt-20">
					<div className="container mx-auto px-4">
						<div className="mb-24 flex flex-wrap justify-center text-center">
							<div className="w-full px-4 lg:w-6/12">
								<h2 className="text-4xl font-semibold">
									Featured Sponsors
								</h2>
								<p className="m-4 text-lg leading-relaxed text-gray-600">
									Pelaksanaan kegiatan ini didukung oleh
									beberapa lembaga
								</p>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={pens}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: '120px' }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">
											PENS
										</h5>
										<div className="mt-6">
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-facebook-f"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={aqua}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: '120px' }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">
											AQUACULTURE PENS
										</h5>
										<div className="mt-6">
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-dribbble"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<div></div>
									<img
										alt="..."
										src={lpdp}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: '120px' }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">
											LPDP
										</h5>
										<div className="mt-6">
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-twitter"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-instagram"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={kemendikbud}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: '120px' }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">
											KEMENDIKBUD
										</h5>
										<div className="mt-6">
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-dribbble"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-twitter"></i>
											</button>
											<button
												className="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
												type="button"
											>
												<i className="fab fa-instagram"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative block bg-gray-900 pb-20 lg:pb-64 lg:pt-24">
					<div
						className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
						style={{ height: '80px' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-current text-gray-900"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>
				<section className="relative block bg-gray-900 py-24 lg:pt-0">
					<div className="container mx-auto px-4">
						<div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
							<div className="w-full px-4 lg:w-6/12">
								<div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-300 shadow-lg">
									<div className="flex-auto p-5 lg:p-10">
										<h4 className="text-2xl font-semibold">
											Hubungi Kami?
										</h4>
										<p className="mb-4 mt-1 leading-relaxed text-gray-600">
											Complete this form and we will get
											back to you in 24 hours.
										</p>
										<div className="relative mb-3 mt-8 w-full">
											<label
												className="mb-2 block text-xs font-bold uppercase text-gray-700"
												htmlFor="full-name"
											>
												Nama Lengkap
											</label>
											<input
												type="text"
												className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Full Name"
												style={{
													transition: 'all .15s ease'
												}}
											/>
										</div>

										<div className="relative mb-3 w-full">
											<label
												className="mb-2 block text-xs font-bold uppercase text-gray-700"
												htmlFor="email"
											>
												Email
											</label>
											<input
												type="email"
												className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Email"
												style={{
													transition: 'all .15s ease'
												}}
											/>
										</div>

										<div className="relative mb-3 w-full">
											<label
												className="mb-2 block text-xs font-bold uppercase text-gray-700"
												htmlFor="message"
											>
												Pesan
											</label>
											<textarea
												rows="4"
												cols="80"
												className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Type a message..."
											/>
										</div>
										<div className="mt-6 text-center">
											<button
												className="mb-1 mr-1 rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
												type="button"
												style={{
													transition: 'all .15s ease'
												}}
											>
												KIRIM
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
