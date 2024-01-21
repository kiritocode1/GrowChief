import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Grid from "@/assets/grid.svg";
import Vector_top from "@/assets/glow_hero_page.svg";
import { TrustedLogos } from "@/assets/logos/ErportLogosStuff";
import AboutGrowChief from "@/components/AboutGrowChief";
import AboutCard from "@/components/AboutCard";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import GitroomCard from "@/components/GitroomCard";
import Logo from "@/assets/logo.svg";
import Subbtn from "@/assets/wow/subbtn.svg";
import One from "@/assets/wow/one.svg";
import { FaSquareXTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";






import NavbarSmall from "@/components/small/Navbar";
import SideglowThingy from "@/small/side_thingvector1.svg";






export default function Home () {

	return (
		<>
			<main className="w-full  hidden flex-col sm:flex">
				<Image
					src={Vector_top}
					alt="glow"
					className="absolute inset-0 -translate-y-1/4"
				/>
				<Navbar />
				<Hero />

				<div className="w-full text-center mt-18 text-gray-500">TRUSTED BY</div>
				<section className="w-full flex  justify-around flex-wrap ">
					{TrustedLogos.map((item, i) => (
						<Image src={item} alt="hello there" key={i} className="w-32 h-20" />
					))}
				</section>
				<Image
					src={Grid}
					alt="grid"
					className="absolute inset-0  select-none "
				/>

				<section className="h-screen  w-full mt-80">
					<AboutGrowChief />
					<div className="w-full h-screen ">
						<AboutCard />
					</div>

					<section className="w-full h-screen">
						<Benefits />
					</section>

					<section className="w-full  mt-[30rem] ">
						<Process />
					</section>
					<section className="w-full h-screen ">
						<FAQ />
					</section>
					<section className="w-full h-[50rem] mt-12 ">
						<Pricing />
					</section>
					<section className="w-full h-[30rem] mt-12 ">
						<GitroomCard />
					</section>

					<section className="w-full  mt-12 ">
						<div className="w-full flex justify-around">
							<div className="h-40 w-full px-10">
								<div className="flex gap-2 text-3xl">
									<Image src={Logo} alt="logo" />
									GROWCHIEF
								</div>
								<div className="text-sm font-extralight w-72">
									We do a whole week of launch around your prouct, including an
									article, Reddit promotion, influencers posts, and so much more
								</div>
							</div>
							<div className="h-40 w-full">
								<div className="text-2xl">SUBSCRIBE TO OUR NEWSLETTER</div>
								<div className="flex gap-2">
									<div className="div border-[0.2px] border-gray-500 w-60 text-gray-400 p-3 rounded-full">
										JOHNDOE@gmail.com
									</div>
									<Image src={Subbtn} alt="subbtn" />
								</div>
							</div>
						</div>
					</section>
					<section className="w-full   h-[0.1rem] bg-gray-500"></section>
					<section className="w-full mt-2 h-40 flex  justify-around">
						<div className="w-2/5 flex  ">
							<span className="flex flex-col gap-2 w-1/2 px-6">
								<h1 className="text-extrabold text-xl">Page</h1>
								<h1 className="text-sm  font-extralight text-gray-500">Home</h1>
								<h1 className="text-sm  font-extralight text-gray-500">
									Pricing
								</h1>
								<h1 className="text-sm  font-extralight text-gray-500">Blog</h1>
							</span>
							<span className="flex flex-col gap-2 w-1/2">
								<h1 className="text-extrabold text-xl">Resources</h1>
								<h1 className="text-sm  font-extralight text-gray-500">
									Book a Call
								</h1>
								<h1 className="text-sm  font-extralight text-gray-500">
									{" "}
									Term and Use
								</h1>
								<h1 className="text-sm  font-extralight text-gray-500">
									{" "}
									Privacy Policy
								</h1>
							</span>
						</div>
						<div className="w-3/5 relative flex  items-center justify-end overflow-hidden">
							<div className="rounded-full overflow-clip flex items-center justify-center w-80 h-96 translate-y-2	 absolute -translate-x-24 ">
								<Image src={One} alt="one" className="object-none " />
							</div>

							<div className="w-96 h-full flex gap-6 justify-end px-6">
								<FaSquareXTwitter className="text-purple-500   w-8 " />
								<FaLinkedin className="text-purple-500   w-8" />

								<FaDiscord className="text-purple-500   w-8" />
							</div>
						</div>
					</section>
				</section>
			</main>

			<main className="w-full  flex flex-col sm:hidden pt-6">small</main>
		</>
	);
}

