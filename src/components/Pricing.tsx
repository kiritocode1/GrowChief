import { FC } from "react";
import behind from "@/assets/Startup/Startupcontent.svg";
import forefront from "@/assets/Startup/card.svg";
import tick from "@/assets/Startup/tickvector.svg";
import ButtnSvg from "@/assets/Startup/button.svg";
import Image from "next/image";
interface PricingProps {}

const Pricing: FC<PricingProps> = ({}) => {
	return (
		<main className="flex flex-col w-full h-full pt-2">
			<section className="w-full flex flex-col items-center">
				<h1 className="w-full flex  text-sm tracking-[.3rem] justify-center items-center text-purple-500  animate-pulse">
					PRICING
				</h1>
				<div className="w-full h-full flex items-start justify-center text-5xl  text-center   text-white  bg-gradient-to-b     text-white ">
					The Startup Package
				</div>
				<p className="w-96 text-center pt-2 font-extralight">
					{
						"Should you be unsatisfied with the initial article, we are committed to offering a full refund."
					}
				</p>
			</section>
			<section className="h-[40rem] w-full flex flex-col relative justify-center items-center mt-2 ">
				<div className="absolute">
					<div className="w-[25rem] h-[30rem]  flex items-center justify-start relative pt-28">
						<Image src={forefront} alt="forefront" className="z-0   absolute" />
						<div className="z-10  h-full w-full p-5">
							<h1 className="text-2xl ">Explosive Growth</h1>
							<h1 className="text-sm font-extralight ">
								Perfect for your next content, leave to us and enjoy the result!
							</h1>
							<div className="w-full h-[0.05rem] bg-gray-400"></div>
							<div className="flex flex-col gap-2 mt-2">
								<div className="flex gap-2">
									{" "}
									<Image src={tick} alt="hi" />
									<p> 10 Launch Weeks</p>
								</div>
								<div className="flex gap-2">
									{" "}
									<Image src={tick} alt="hi" />
									<p> 10 Influencer Posts</p>
								</div>
								<div className="flex gap-2">
									{" "}
									<Image src={tick} alt="hi" />
									<p> 100,000 views</p>
								</div>
								<div className="flex gap-2">
									<Image src={tick} alt="hi" />
									<p> 10 Reddit Posts</p>
								</div>

								<div className="flex gap-2">
									<Image src={tick} alt="hi" />
									<p> 2 hrs Marketing Consultation</p>
								</div>
							</div>
							<Image src={ButtnSvg} alt="button" className="mt-2" />
						</div>
					</div>
				</div>
				<Image src={behind} alt="behind" className="object-cover absolute" />
			</section>
		</main>
	);
};

export default Pricing;
