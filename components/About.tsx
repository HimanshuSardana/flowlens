import React from 'react';
import { ShieldQuestion, Cpu } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
	const containerVariants = {
		hidden: { opacity: 0, },
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				staggerChildren: 0.3, // Adjust the stagger delay here
			},
		},
	};

	const controls = useAnimation();

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3, // Adjust the threshold as needed
	});

	React.useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);


	const cardVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div>
			<motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-5xl font-black text-right'>About Us</motion.h3>
			<motion.div
				className="my-16 flex justify-between gap-7"
				initial="hidden"
				animate={controls}
				variants={containerVariants}
				ref={ref}
			>
				<motion.div
					className="card border-2 border-default-200 mission  w-1/3 dark:border-0 dark:bg-zinc-900 p-7 pb-10 rounded-md flex flex-col gap-3"
					variants={cardVariants}
				>
					<i className='font-3xl scale-[120%] bg-blue-500/10 p-2 text-blue-500 w-fit rounded-md'><ShieldQuestion /></i>
					<h3 className='font-bold text-xl'>Mission Statement</h3>
					<p className='text-zinc-600 dark:text-zinc-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora adipisci ut minus voluptatibus, voluptates quasi harum saepe laborum eaque totam!</p>
					<p className='text-zinc-600 dark:text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus non iste voluptatibus iure facere omnis dolorem.</p>
				</motion.div>

				<motion.div
					className="card border-2 border-default-200 mission  dark:border-0 w-1/3 dark:bg-zinc-900 p-7 pb-10 rounded-md flex flex-col gap-3"
					variants={cardVariants}
				>
					<i className='font-3xl scale-[120%] bg-blue-500/10 p-2 text-blue-500 w-fit rounded-md'><Cpu /></i>
					<h3 className='font-bold text-xl'>Tech Stack</h3>
					<p className='text-zinc-600 dark:text-zinc-400'>Our tech stack includes the most recent and industry-relevant technologies</p>
					<ul className='text-zinc-600 dark:text-zinc-400 list-disc list-inside'>
						<li>NextJS</li>
						<li>Supabase</li>
						<li>Microsoft Azure</li>
						<li>Google Colab</li>
						<li>LeafletJS</li>
					</ul>
				</motion.div>

				<motion.div
					className="card mission border-2 border-default-200 dark:border-0  w-1/3 dark:bg-zinc-900 p-7 pb-10 rounded-md flex flex-col gap-3"
					variants={cardVariants}
				>
					<i className='font-3xl scale-[120%] bg-blue-500/10 p-2 text-blue-500 w-fit rounded-md'><Cpu /></i>
					<h3 className='font-bold text-xl'>Tech Stack</h3>
					<p className='text-zinc-600 dark:text-zinc-400'>Our Tech Stack includes the most recent and industry-relevant</p>
					<p className='text-zinc-600 dark:text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus non iste voluptatibus iure facere omnis dolorem.</p>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default About
