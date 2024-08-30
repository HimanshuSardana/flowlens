'use client'

import React, { useState } from 'react'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Input } from '@nextui-org/input'
import { Toaster, toast } from 'sonner'
import Link from 'next/link'
import { ArrowLeft2 } from 'iconsax-react'
import { signup } from './actions'

function RegisterPage() {
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)

		const form = new FormData()
		form.append('email', formData.email)
		form.append('password', formData.password)

		const result = await signup(form)

		if (!result.success) {
			toast.error(result.message)
		} else {
			toast.success('User created successfully!')
		}

		setLoading(false)
	}

	return (
		<div className='mx-auto max-w-7xl pt-16'>
			<Toaster richColors position='top-right' toastOptions={{
				style: {
					background: 'black',
					border: '2px solid #222',
				},
				className: 'class',
			}} />
			<div className='topbar w-full'>
				<Link href="/" className='flex items-center gap-2 font-bold text-default-800 text-sm'>
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

					<form onSubmit={handleSubmit}>
						<div className="mt-5 flex flex-col gap-3">
							<div className="flex gap-2">
								<Input name="username" className="w-1/2" label="Username" radius='sm' onChange={handleChange} />
							</div>
							<Input name="email" className="w-1/2" label="Email" radius='sm' isClearable onChange={handleChange} />
							<Input name="password" className="w-1/2" label="Password" type='password' radius='sm' onChange={handleChange} />
							<Button isLoading={loading} type="submit" color="primary" radius="sm" className='w-1/2'>
								Register
							</Button>
							<Divider className='w-1/2 my-2' />
							<p>Already have an account? <Link href={"/login"} className='text-blue-500 font-bold'>Log In</Link></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterPage
