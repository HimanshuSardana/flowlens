
"use client"
import { Toaster, toast } from 'sonner'
import React from 'react'
import Navbar from '@/components/Navbar'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { ArrowLeft2 } from 'iconsax-react'
import { Button } from '@nextui-org/button'
import { Mail, Github } from 'lucide-react'
import supabase from '../../components/config/supabaseClient'

function page() {
	return (
		<div className='mx-auto max-w-7xl pt-16'>
			<Toaster richColors position='top-right'
				toastOptions={{
					style: {
						background: 'black',
						border: '2px solid #222',
					},
					className: 'class',
				}} />
			<div className='topbar w-full'>
				<Link href="/" className=' flex items-center gap-2 font-bold text-default-800 text-sm'>
					<ArrowLeft2 size={18} color="#fff" />
					Back
				</Link>
			</div>

			<div className="flex gap-48">
				<div className="right flex items-center">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam?</p>
				</div>
				<div className="form flex flex-col justify-center h-[80vh] gap-2">
					<h3 className='text-5xl w-3/4 font-extrabold'>Create your Flow<span className='text-blue-500'>Lens</span> Account</h3>
					<p className='text-default-400 font-bold w-2/3 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quia.</p>

					<div className="mt-5 flex flex-col gap-3">
						<div className="flex gap-2">

							<Input className="w-[9.4rem]" label="First Name" radius='sm' />
							<Input className="w-[9.4rem]" label="Last Name" radius='sm' />
						</div>
						<Input className="w-1/2" label="Email" radius='sm' isClearable />
						<Input className="w-1/2" label="Password" type='password' radius='sm' />
						<Button onClick={() => {
							console.log("Hello World")
							toast.success("User created Successfully")
						}} color="primary" radius="sm" className='w-1/2'>Register</Button>
						<Divider className='w-1/2 my-2' />
						<p>Already have an account? <Link href={"/login"} className='text-blue-500 font-bold'>Log In</Link></p>
					</div>
				</div>

			</div>

		</div>
	)
}

export default page
