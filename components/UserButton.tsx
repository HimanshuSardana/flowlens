"use client"
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { ChevronRight } from 'lucide-react'
import { Avatar } from '@nextui-org/avatar'

import React from 'react'

function UserButton({ name, email }) {
	return (
		<div className='px-10 border border-0 border-t-1 border-t-zinc-800 py-7 user flex justify-between items-center gap-5'>
			<div className='flex gap-5 items-center'>

				<Avatar name="HS" size='sm' className='font-bold flex-2' isBordered color='primary' />
				<div className="flex flex-col font-bold">
					<h3 className='text-sm'>{name}</h3>
					<p className='text-sm text-default-300'>{email.slice(0, 20)}...</p>
				</div>
			</div>
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly className='hover:bg-zinc-800 bg-zinc-950' radius='full'>
						<ChevronRight />
					</Button>
				</DropdownTrigger>
				<DropdownMenu className='rounded-sm'>
					<DropdownItem className='text-danger'><Link href="/">Log Out</Link></DropdownItem>
					<DropdownItem isDisabled>Settings</DropdownItem>
				</DropdownMenu>

			</Dropdown>
		</div>

	)
}

export default UserButton
