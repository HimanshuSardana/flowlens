"use client"
import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { ThemeSwitch } from '@/components/theme-switch'
import { Divider } from '@nextui-org/divider'
import { Tabs, Tab } from "@nextui-org/tabs";
import { useTransition } from 'react'
import { Toaster, toast } from 'sonner'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { ArrowLeft2 } from 'iconsax-react'
import { Button } from '@nextui-org/button'
import LoginForm from '@/components/LoginForm'
import { Mail, Github } from 'lucide-react'
import { login } from './actions';

function page() {
	const [isPending, startTransition] = useTransition()
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		setLoading(true)

		startTransition(async () => {
			const result = await login(formData)

			if (!result.success) {
				toast.error(result.message)
			}
			setLoading(false)
		})
	}
	return (
		<>
			<div className='pt-16 max-w-7xl mx-auto'>

				<Toaster richColors position='top-right' toastOptions={{
					style: {
						background: 'black',
						border: '2px solid #222',
						fontWeight: 'bold',
					},
					className: 'class',
				}} />
				<div className='topbar w-full flex justify-between'>
					<Link href="/" className=' flex items-center gap-2 font-bold text-default-800 text-sm'>
						<ArrowLeft2 size={18} className='dark:#fff' />
						Back
					</Link>
					<ThemeSwitch />
				</div>

				<div className="flex gap-48">

					<div className="right flex items-center">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam?</p>
					</div>
					<div className="form flex flex-col justify-center h-[80vh] gap-2">
						<h3 className='text-5xl w-3/4 font-extrabold'>Log In to your Flow<span className='text-blue-500'>Lens</span> Account</h3>
						<p className='text-default-400 font-bold w-2/3 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quia.</p>

						<form onSubmit={handleSubmit}>
							<div className="mt-5 flex flex-col gap-3">
								<Input id='email' name='email' className="w-1/2" label="Email" radius='sm' />
								<Input className="w-1/2" label="Password" id="password" name="password" type='password' radius='sm' />
								<Button isLoading={loading} type="submit" color="primary" radius="sm" className='w-1/2'>Log In</Button>
								<h3 className='text-default-400 text-center w-1/2 my-2'>OR</h3>
								<div className="flex gap-3 justify-center w-1/2">
									<Button fullWidth className='bg-zinc-900 ' radius='sm'>GitHub</Button>
									<Button fullWidth className='bg-zinc-900 font-bold' radius='sm'>Google</Button>
								</div>
								<Divider className='w-1/2 my-2' />
								<p>Don't have an account yet? <Link href={"/register"} className='text-blue-500 font-bold'>Register</Link></p>
							</div>
						</form>
					</div>

				</div>

			</div>
		</>
	)
}

export default page
