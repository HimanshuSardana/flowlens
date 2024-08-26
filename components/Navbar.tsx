"use client"
import React from 'react'
import Link from "next/link";
import { button, button as buttonStyles } from "@nextui-org/theme";
import { Button } from '@nextui-org/button'
import { ThemeSwitch } from '@/components/theme-switch';

function Navbar() {
	return (
		<div className="navbar flex justify-between">
			<div className="brand">
				<h3 className="font-bold text-lg">Flow<span className="text-blue-500">Lens</span></h3>
			</div>

			<div>
				<div className='flex gap-3 items-center'>
					<Button color='primary' variant='light' radius='full'><Link href="/login" className='font-bold'>Get Started</Link></Button>
					<ThemeSwitch />

				</div>
			</div>
		</div>
	)
}

export default Navbar
