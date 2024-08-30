"use client"
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { ChevronRight } from 'lucide-react'
import { Avatar } from '@nextui-org/avatar'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import settingsModal from '@/components/settingsModal'

import React from 'react'

function UserButton({ name, email }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div className='px-10 border border-0 border-t-1 border-t-default-400 dark:border-t-zinc-800 py-7 user flex justify-between items-center gap-5'>
			<div className='flex gap-5 items-center'>

				<Avatar name="HS" size='sm' className='font-bold flex-2' isBordered color='primary' />
				<div className="flex flex-col font-bold">
					<h3 className='text-sm'>{name}</h3>
					<p className='text-sm text-default-600 dark:text-default-300'>{email.slice(0, 20)}...</p>
				</div>
			</div>
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly className='hover:bg-zinc-400 dark:hover:bg-zinc-700 bg-zinc-100 dark:bg-zinc-950' radius='full'>
						<ChevronRight />
					</Button>
				</DropdownTrigger>
				<DropdownMenu className='rounded-sm'>
					<DropdownItem className='text-danger'><Link href="/">Log Out</Link></DropdownItem>
				</DropdownMenu>

			</Dropdown>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div >

	)
}

export default UserButton
