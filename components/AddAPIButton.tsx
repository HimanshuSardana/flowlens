"use client"
import { Button } from '@nextui-org/button'
import React from 'react'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Input } from '@nextui-org/input'
import { Snippet } from "@nextui-org/snippet";
import { Switch } from '@nextui-org/switch'
import { Divider } from '@nextui-org/divider'
import { createAPI } from '../app/dashboard/api/actions'

function AddAPIButton() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [input, setInput] = useState("")
	const [apiURL, setApiURL] = useState("")
	return (
		<>
			<Button color='primary' onPress={onOpen} className='font-bold' radius='sm' startContent={<Plus />}>Create Lense</Button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Create Lens</ModalHeader>
							<ModalBody>
								<Input onChange={(e) => setInput(e.target.value)} label="Lens Name" radius="sm" />
								<Switch size='sm' className='mt-3'>Enable Notifications</Switch>
								{apiURL && (<><h3 className='mt-5 font-bold text-sm'>API Created</h3><Snippet size="md" className=''>{apiURL}</Snippet></>)}
							</ModalBody>
							<ModalFooter>
								<Button radius="sm" color="danger" variant="light" onPress={() => {
									setApiURL("")
									onClose()
								}
								}
								>
									Close
								</Button>
								<Button radius='sm' color="primary" onClick={() => {
									createAPI(input)
								}}>
									Proceed
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default AddAPIButton
