import { FC } from "react";
import TiltCube from "@/assets/tilt_cube.svg";
import Watch from "@/assets/watch.svg";
import Image from "next/image";
import GlowyButton from "@/assets/GlowyButton.svg";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<main className="w-full h-[27rem] flex justify-end items-center">
			<section className=" w-full flex flex-col items-start  h-full px-20 pt-8">
				<Image src={Watch} alt="glow" className="" />
				<div className="text-white  bg-gradient-to-b     from-white to-purple-400 text-7xl w-full z-50">
					Devtools launch week
				</div>
				<div className="z-50">
					We do a whole week of launch around your prouct, including an article,
					Reddit promotion, influencers posts, and so much more
				</div>
				<div className="flex  w-full items-center h-40 ">
					<div className="z-50 cursor-pointer">
						<Image src={GlowyButton} alt="hello there " className="pt-6 " />
					</div>
					<div className="rounded-full border-2 h-14  w-40 flex text-center items-center justify-center border-gray-400">
						Gitroom Blog
					</div>
				</div>
			</section>
			<div className="w-full">
				<Image src={TiltCube} alt="glow" className="select-none" />
			</div>
		</main>
	);
};

export default Hero;
