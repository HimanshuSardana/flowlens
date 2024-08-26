import React from 'react'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { Divider } from '@nextui-org/divider'

function LoginForm() {
	return (
		<form >

			<div className="mt-5 flex flex-col gap-3">
				<Input className="w-1/2" label="Email" radius='sm' />
				<Input className="w-1/2" label="Password" type='password' radius='sm' />
				<Button type="submit" color="primary" radius="sm" className='w-1/2'>Log In</Button>
				<h3 className='text-default-400 text-center w-1/2 my-2'>OR</h3>
				<div className="flex gap-3 justify-center w-1/2">
					<Button fullWidth className='bg-zinc-900 ' radius='sm'>GitHub</Button>
					<Button fullWidth className='bg-zinc-900 font-bold' radius='sm'>Google</Button>
				</div>
				<Divider className='w-1/2 my-2' />
				<p>Don't have an account yet? <Link href={"/register"} className='text-blue-500 font-bold'>Register</Link></p>
			</div>
		</form>

	)
}

export default LoginForm
