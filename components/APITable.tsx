"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button } from '@nextui-org/button'
import { Eye, Pencil, Trash } from 'lucide-react';
import { Tooltip } from '@nextui-org/tooltip'

function APITable() {
	return (
		<>

			<Table className='bg-zinc-950' aria-label="Example static collection table">
				<TableHeader>
					<TableColumn>NAME</TableColumn>
					<TableColumn>IMAGES</TableColumn>
					<TableColumn>LAST UPDATED</TableColumn>
					<TableColumn>ACTIONS</TableColumn>

				</TableHeader>
				<TableBody>
					<TableRow key="1">
						<TableCell className='font-bold'>Thapar Institute of Engineering and Technology</TableCell>
						<TableCell>3</TableCell>
						<TableCell>10:32</TableCell>
						<TableCell>
							<div className='flex gap-3 items-center'>
								<Tooltip content="View">
									<Button className='bg-transparent scale-[90%] text-default-400' isIconOnly size='sm'><Eye /></Button>
								</Tooltip>
								<Tooltip content="Edit">
									<Button isIconOnly className='bg-transparent scale-[80%] text-default-400' size='sm'><Pencil /></Button>
								</Tooltip>
								<Tooltip content="Delete" color='danger'>
									<Button isIconOnly className='bg-transparent text-danger scale-[80%] ' size='sm'><Trash /></Button>
								</Tooltip>

							</div>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	)
}

export default APITable
