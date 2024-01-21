import { FC } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Card1 from "@/assets/Cards/Card1.svg";
import Card2 from "@/assets/Cards/Card2.svg";
import Card3 from "@/assets/Cards/Card3.svg";
import Card4 from "@/assets/Cards/Card4.svg";

import Card6 from "@/assets/Cards/Card6.svg";
import Card7 from "@/assets/Cards/Card7.svg";

import Testimonial1 from "@/assets/Testimonials/group1.svg";
import Testimonial2 from "@/assets/Testimonials/group2.svg";

import Image from "next/image";
interface AboutCardProps {}

const AboutCard: FC<AboutCardProps> = ({}) => {
	const Cards = [Card1, Card2, Card3, Card4, Card6, Card7];

	return (
		<main className="w-full flex items-center justify-start h-screen flex-col  ">
			<section className=" relative w-full flex items-center justify-center  h-40 ">
				<Image
					src={Testimonial1}
					alt="hello there"
					className="absolute  left-0   w-[24rem]   "
				/>
				<div className="h-full  w-[22rem] ">
					<h1 className="w-full flex  text-sm tracking-[.3rem] justify-center items-center text-purple-500  animate-pulse">
						TESTIMONIALS
					</h1>
					<div className="w-full h-full flex items-start justify-center text-5xl  text-center   text-white  bg-gradient-to-b     from-white to-white/80 ">
						what our clients say{" "}
					</div>
				</div>
				<Image
					src={Testimonial2}
					alt="hello there"
					className="absolute right-0 w-[24rem] "
				/>
			</section>

			<Carousel className="w-full ">
				<CarouselContent>
					{Cards.map((item, i) => (
						<CarouselItem key={i} className="basis-1/3">
							<Image src={item} alt="hello there" className="" />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</main>
	);
};

export default AboutCard;
