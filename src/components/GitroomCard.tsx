import { FC } from "react";
import Cardy from "@/assets/gitroom/card.svg";
import Btn from "@/assets/gitroom/btnlol.svg";
import Image from "next/image";
interface GitroomCardProps {}

const GitroomCard: FC<GitroomCardProps> = ({}) => {
	return (
		<main className="w-full flex items-center justify-center  ">
			<Image src={Cardy} alt="card" className="h-96 " />
			<div className="z-10 absolute  w-full h-full flex items-center  justify-center gap-2">
				<div className="w-[50rem] h-[20rem] p-2 pt-10">
					<section className=" flex flex-col items-start ">
						<div className="text-4xl  text-start   text-white  bg-gradient-to-b     text-white w-96">
							Ready to build something? Go with us!
						</div>
						<p className=" text-start pt-2 font-extralight w-[30rem]">
							{
								"We merge tech with marketing. Helping you trend on different platforms.  Gain genuine clients, effortlessly."
							}
						</p>
					</section>
					<Image
						src={Btn}
						alt="btn"
						className=" h-40 cursor-pointer select-none"
					/>
				</div>
			</div>
		</main>
	);
};

export default GitroomCard;
