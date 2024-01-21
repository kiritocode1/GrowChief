import { FC } from 'react'
import Logo from "@/assets/logo.svg";
import Buttony from "@/assets/button.svg";
import Image from 'next/image';
interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
	const NavItems = ["Home", "Product", "Pricing", "Blog"];
    return (
			<main>
				<section className="hidden md:flex  w-full h-16 mt-4  px-8 mb-8">
					<div className="w-full border-2 flex items-center justify-center  [border-image:linear-gradient(#ffffff,#000000)_20;] rounded-full  ">
						<div className="w-full px-4 flex  justify-around">
							<div className="flex gap-2">
								<Image src={Logo} alt="glow" className="hello world" />
								<span className="text-gray-200">Growchief</span>
							</div>
						<div className="flex gap-4 w-full justify-center z-50 ">
							{NavItems.map((item, i) => (
								<span className="text-gray-200 cursor-pointer hover:animate-pulse" key={i}>{item}</span>
							))}


						</div>
												<div className="flex gap-2">
							<Image src={Buttony} alt="glow" className="hello world" />


						</div>
						</div>
					</div>
				</section>
				<section className="md:hidden flex">small</section>
			</main>
		);
}

export default Navbar