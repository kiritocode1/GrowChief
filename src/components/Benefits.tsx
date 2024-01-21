import { FC } from "react";
import Image from "next/image";
import RightSgv from "/src/assets/Testimonials/group2.svg";
import Bento1 from "@/assets/bento/bento1.svg";
import Bento2 from "@/assets/bento/bento2.svg";
import Bento3 from "@/assets/bento/bento3.svg";
import Bento4 from "@/assets/bento/bento4.svg";
interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = ({}) => {
	return (
		<main>
			<section className="flex items-center">
				<span className="h-40  w-96">
					<h1 className="w-full flex  text-sm tracking-[.3rem] pl-8 items-center text-purple-500  animate-pulse">
						THE BENEFIT
					</h1>
					<div className="w-full h-full flex items-start justify-center text-5xl  text-center   text-white  bg-gradient-to-b     text-white ">
						{"Crafting quality you'll remember"}
					</div>
				</span>
				<Image src={RightSgv} alt="hello there" className="" />
			</section>
			<section className="w-full px-20 ">
				<div className="flex  gap-2">
					<div className="relative w-[40rem] ">
						<div className="absolute inset-0 w-full h-full flex items-center justify-start  flex-col p-6">
							<div className="text-3xl w-full pt-2 pl-3 text-white">
								Instant Impact
							</div>
							<div className="px-2 font-extralight text-gray-200">
								From strategizing your optimal UX, to building a flexible
								back-end that syncs with your internal ops, our goal is
								beautifully fluid and flawlessly functional websites that solve
								the right problems—and look really good while they do it.
							</div>
						</div>
						<Image src={Bento4} alt="hello there" className="w-full h-full" />
					</div>
					<div className="relative w-[28.2rem]  ">
						<div className="absolute inset-0 w-full h-full flex items-center justify-start flex-col p-6">
							<div className="text-3xl w-full pt-2 pl-3 text-white">
								Branding
							</div>
							<div className="px-2 font-extralight text-gray-200">
								From strategizing your optimal UX, to building a flexible
								back-end that syncs with your internal ops, our goal is
								beautifully fluid
							</div>
						</div>
						<Image src={Bento1} alt="hello there" className="w-full h-full" />
					</div>
				</div>
				<div className="flex gap-2 mt-2">
					<div className="w-[29rem]  relative">
						<div className="absolute inset-0 w-full h-full flex items-center justify-start flex-col p-6">
							<div className="text-3xl w-full pt-2 pl-3 text-white">
								Get from 0 to 1
							</div>
							<div className="px-2 font-extralight text-gray-200">
								From strategizing your optimal UX, to building a flexible
								back-end that syncs with your internal ops, our goal is
								beautifully fluid
							</div>
						</div>
						<Image src={Bento2} alt="hello there" className="w-full h-full" />
					</div>
					<div className="w-[40rem]  h-34 relative ">
						<div className="absolute inset-0 w-full h-full flex items-center justify-start flex-col p-6">
							<div className="text-3xl w-full pt-2 pl-3 text-white">
								Stay on Developers Mind
							</div>
							<div className="px-2 font-extralight text-gray-200">
								From strategizing your optimal UX, to building a flexible
								back-end that syncs with your internal ops, our goal is
								beautifully fluid and flawlessly functional websites that solve
								the right problems—and look really good while they do it.
							</div>
						</div>
						<Image src={Bento3} alt="hello there" className="w-full h-full" />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Benefits;
