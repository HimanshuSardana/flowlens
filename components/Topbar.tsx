"use client"
import React from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Switch } from '@nextui-org/switch'
import { ThemeSwitch } from '@/components/theme-switch';
import { breadcrumbs } from '@nextui-org/theme'
import { Settings } from 'lucide-react';
import { Button } from '@nextui-org/button'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";

const Topbar = ({ breadcrumbs }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="px-10 topbar h-20 flex justify-between items-center bg-white dark:bg-zinc-950 w-[80vw]">
			<h3 className='text-md font-bold'>{breadcrumbs}</h3>
			<div className='flex gap-5'>
				<Button onPress={onOpen} className="hover:bg-default-100 rounded-full bg-transparent text-default-400" isIconOnly><Settings /></Button>
				<Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
								<ModalBody>
									<div className='flex flex-col gap-5'>
										<div className='flex flex-col gap-3'>
											<h3 className='font-bold text-xs text-default-400'>GENERAL</h3>
											<Switch>Enable Notifications</Switch>
										</div>
										<div className='flex flex-col gap-3'>
											<h3 className='font-bold text-xs text-default-400'>VIDEO GENERATION</h3>
											<RadioGroup defaultValue={"1"} className='w-full flex flex-col gap-1'>
												<Radio className='my-1 data-[selected=true]:border-blue-500 border border-2 border-default-600 p-3 gap-2 rounded-md font-semibold w-screen bg-default-200 dark:bg-zinc-800 ' value="1" description="lorem ipsum dolor sit amet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ">FILM</Radio>
												<Radio isDisabled className='my-1 border border-2 border-default-300 p-3 gap-2 rounded-md w-screen bg-default-200 dark:bg-zinc-800 font-bold description:text-danger' value="2" description="lorem ipsum dolor sit amet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ">DAIN</Radio>
												<Radio isDisabled className='my-1 border border-2 border-default-300 p-3 gap-2 rounded-md w-screen bg-zinc-800 ' value="3" description="lorem ipsum dolor sit amet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " >RIFE</Radio>
											</RadioGroup>
										</div>

									</div>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="light" radius='sm' onPress={onClose}>
										Close
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
				<ThemeSwitch />

			</div>
		</div>
	);
};

export default Topbar
