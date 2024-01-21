import { FC } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
	return (
		<main className="flex flex-col h-full w-full pt-10">
			<section className="w-full flex flex-col items-center">
				<h1 className="w-full flex  text-sm tracking-[.3rem] justify-center items-center text-purple-500  animate-pulse">
					FAQ
				</h1>
				<div className="w-full h-full flex items-start justify-center text-5xl  text-center   text-white  bg-gradient-to-b     text-white ">
					Frequently Asked Questions
				</div>
				<p className="w-96 text-center pt-2 font-extralight">
					{
						"Still unsure? Find the answers you’re looking for here in our laatest FAQ"
					}
				</p>
			</section>

			<section className="w-full  px-20">
				<Accordion type="multiple" className="">
					<AccordionItem value="item-1 ">
						<AccordionTrigger>What are launch weeks?</AccordionTrigger>
						<AccordionContent className="font-extralight ">
							{`Launch weeks is a concept of driving traffic into a specific source within a week.
The goal is to achieve virality. Most platforms reward you when you bring massive traffic in a short period. That's the best way to drive a lot of attention in a short time.
Once the launch week is finished, you will remain with unique assets that drive SEO traffic.
The service is Done-For-You. Sit back and relax. We take care of everything.`}
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							What type of content do you write?
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>Can you work with any company?</AccordionTrigger>
						<AccordionContent>lorem50</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger>How do I know it will work?</AccordionTrigger>
						<AccordionContent>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
							consectetur magni minus. Ratione placeat, quod eaque quo aliquid
							minus, aliquam voluptatum tempora at, a laudantium molestiae.
							Adipisci eaque deserunt nesciunt!
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
};

export default FAQ;
