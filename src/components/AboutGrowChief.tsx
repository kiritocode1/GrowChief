import { FC } from "react";
import Aboutsvg from "@/assets/ABoutSvg.svg";
import GGthingy from "@/assets/AboutUsRightStuffvector6.svg";
import Image from "next/image";
import Cube from "@/assets/cuberight.svg";
interface AboutGrowChiefProps {}

const AboutGrowChief: FC<AboutGrowChiefProps> = ({}) => {
	return (
		<main>
			<section>
				<div className="w-full flex justify-center items-center relative ">
					<Image
						src={Aboutsvg}
						alt="glow"
						className="inset-0 absolute -translate-y-20 select-none"
					/>

					<div className=" w-full h-96 flex items-center justify-center flex-col">
						<div className="w-full px-40 text-[#BC8CFF] line-relaxed">
							WHATS GROWCHIEF
						</div>
						<div className="text-white  bg-gradient-to-b   text-white text-5xl  z-50 w-full px-40 ">
							We specialize in human-centered design where technology serves
							humanity, not the other way around.
						</div>
					</div>
					<Image
						src={GGthingy}
						alt="glow"
						className="inset-y-0 absolute  right-0 -translate-y-20 select-none"
					/>
				</div>
				<div className="w-full h-96 flex pt-20 justify-center px-20 ">
					<div className=" w-full">
						<Image src={Cube} alt="glow" className="select-none scale-150" />
					</div>
					<div className=" w-full items-center flex text-gray-200">
						This not only elevates your brand but also solves real-world
						problems. We see ourselves as your long-term partner working closely
						with you for true collaboration, from initial concept to final
						product. This way, were invested in your success.
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutGrowChief;
