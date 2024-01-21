import { FC } from "react";
import Testimonial1 from "@/assets/Integrate/InvertedGritgroup5.svg";
import Testimonial2 from "@/assets/Integrate/InvertedGritgroup6.svg";
import Line from "@/assets/Line.svg";
import Image from "next/image";
import One from "@/assets/Shorts/one.svg";
import Two from "@/assets/Shorts/two.svg";
import Three from "@/assets/Shorts/three.svg";

const processItems = [
	{
		Title: "Topic Selection and Article Preparation",
		Description:
			"The process begins with the provision of various topics from which you can choose. This selection phase typically takes 1-2 days. Once the topic is selected, the next step is to work on the article. This stage involves research, drafting, and finalizing the article, which usually takes about 7 days.",
		Image: Three,
	},
	{
		Title: "Article Posting and Promotion",
		Description:
			"After the article is ready, it's time to post it. The article should be posted on a specific date for maximum impact. Once posted, the article should be promoted on various platforms. This includes posting the article on Reddit with the aim of making it trending. Additionally, the article should be cross-posted on Hashnode and Medium to reach a wider audience.",
		Image: Two,
	},
	{
		Title: "Traffic Generation and Trending Potential",
		Description:
			"The final section of the process involves driving traffic to your website. This is achieved through the use of an influencer, who will promote your article 2 days after it has been posted",
		Image: One,
	},
];

interface ProcessProps {}

const Process: FC<ProcessProps> = ({}) => {
	return (
		<div className="w-full   h-[80rem]">
			<div className="h-screen">
				<section className=" relative w-full flex items-center justify-center  h-40 ">
					<Image
						src={Testimonial2}
						alt="hello there"
						className="absolute  left-0   w-[24rem] h-full"
					/>
					<div className="h-full  w-[22rem] pt-20">
						<h1 className="w-full flex  text-sm tracking-[.3rem] justify-center items-center text-purple-500  animate-pulse">
							Our Process
						</h1>
						<div className="w-full h-full flex items-start justify-center text-5xl  text-center   text-white  bg-gradient-to-b     text-white ">
							How We Work
						</div>
					</div>
					<Image
						src={Testimonial1}
						alt="hello there"
						className="absolute right-0 w-[24rem]  "
					/>
				</section>

				<section className="w-full h-[70rem]   flex justify-center ">
					<Image src={Line} alt="line" className="h-full  w-40" />
					<div className=" text-bold w-full flex flex-col justify-around">
						{processItems.map((item, i) => (
							<div
								key={i}
								className="w-full h-[30rem] flex mt-6 overflow-hidden">
								<div className="flex flex-col gap-2">
									<h1 className="text-3xl font-bold ">{item.Title}</h1>
									<p className="font-extralight text-gray-400 w-80">
										{item.Description}
									</p>
								</div>
								<Image
									src={item.Image}
									alt="hello there"
									className="h-full w-full scale-[0.9] "
								/>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Process;
