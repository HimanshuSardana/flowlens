"use client"
import React, { useState } from 'react'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import heroImage from '@/public/world.svg'

function Hero() {
	return (
		<>
			<div className="flex h-[80vh] items-center">
				<div className="left flex flex-col gap-5">
					<div className="left flex flex-col gap-2">
						<h3 className='text-5xl font-extrabold w-3/4'>Changing the world one <span className='text-blue-500 font-black'>frame</span> at a time</h3>
						<p className='text-default-600 dark:text-default-400 w-1/2'>Lorem ipsum dolor sit amet <span className='underline text-blue-500 decoration-wavy'> adipisicing </span>elit. Expedita sunt autem libero laudantium perspiciatis error!</p>

					</div>
					<div className="flex gap-3">
						<Button color="primary" variant='solid' className='w-28' radius='full'>Get Started</Button>
						<Button color="primary" variant='light' className='w-28 font-bold' radius='full'>Learn More</Button>

					</div>
				</div>

				<div className="right bg-zinc-800 w-1/2 h-3/4 bg-opacity-30 rounded-md"></div>
			</div>
		</>
	)
}

export default Hero
