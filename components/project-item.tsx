import { useState } from 'react';
import { MousePosition, Item } from '@/lib/interface';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({
	mousePosition,
	item,
}: {
	mousePosition: MousePosition;
	item: Item;
}) {
	const [animateCard, setAnimateCard] = useState<string>(
		`scale-0 -translate-x-[0%] -translate-y-[75%] z-[1]`
	);

	const handleMouseEnter = () => {
		setAnimateCard('scale-100 translate-x-[10%] -translate-y-[100%] z-[3]');
	};

	const handleMouseLeave = () => {
		setAnimateCard('scale-0 -translate-x-[0%] -translate-y-[75%] z-[1]');
	};

	return (
		<div className='flex flex-col rounded-2xl'>
			<Link
				href={item.link as string}
				target='_blank'
				onClick={handleMouseLeave}
			>
				<div
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='bg-primary-offblack hover:text-gray-400 transition-all w-36 duration-300 ease-out aspect-square scale-[0.9] rounded-3xl hover:scale-100 p-2 flex items-center justify-center text-[4rem]'
				>
					{item.icon}
				</div>
			</Link>
			<div
				className={`${animateCard} transition-transform duration-[250ms] ease-out rounded-xl p-4 bg-white text-black flex flex-col break-words max-w-[20rem] absolute aspect-square`}
				style={{
					top: `${mousePosition.y}px`,
					left: `${mousePosition.x}px`,
				}}
			>
				<h2>{item.name}</h2>
				<p className='text-sm mt-1 mb-2'>{item.description}</p>
				<div className='flex flex-row gap-1 flex-wrap'>
					{item.techStack?.map((tech, index) => (
						<div
							key={index}
							className='flex flex-row'
						>
							<span
								className={`px-1 m-0 rounded-md ${tech.bgcolor} ${tech.fgcolor}`}
							>
								{`${tech.icon} ${tech.name}`}
							</span>
						</div>
					))}
				</div>
				<Image
					src={item.image as string}
					alt={item.name as string}
					width={300}
					height={300}
					className='rounded-md mt-2 aspect-video'
				/>
			</div>
		</div>
	);
}
