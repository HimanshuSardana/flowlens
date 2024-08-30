"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { Eye, Pencil, Trash, Clipboard } from 'lucide-react';
import { fetchData, deletesAPI } from '../app/dashboard/api/actions';

interface ApiData {
	id: string;
	api_name: string;
	last_modified: string; // Or the actual type you expect
}

const ApiTable = () => {
	const [apis, setApis] = useState<ApiData[]>([]);


	useEffect(() => {
		const fetchApis = async () => {
			const data = await fetchData();
			setApis(data);
		};

		fetchApis();
	}, []);

	const router = useRouter();

	return (
		<Table
			shadow="none"
			className="border border-1 border-default-300 rounded-md dark:border-0 shadow-none dark:bg-zinc-950"
			aria-label="API Table"
			radius='sm'
		>
			<TableHeader>
				<TableColumn>NAME</TableColumn>
				<TableColumn>IMAGES</TableColumn>
				<TableColumn>LAST UPDATED</TableColumn>
				<TableColumn>ACTIONS</TableColumn>
			</TableHeader>
			<TableBody emptyContent={"No content to display"}>
				{apis.map((api) => (
					<TableRow key={api.id}>
						<TableCell>{api.api_name}</TableCell>
						<TableCell>--</TableCell>
						<TableCell>{new Date(api.last_modified).toLocaleString()}</TableCell>
						<TableCell>
							<div className="flex gap-1 items-center">
								<Tooltip content="Copy URL">
									<Button onClick={() => navigator.clipboard.writeText(`http://localhost:3000/api/${api.api_id}`)} isIconOnly className='bg-transparent text-default-400 scale-[90%]'>
										<Clipboard />
									</Button>
								</Tooltip>

								<Tooltip content="View API">
									<Button onClick={() => router.push(`/dashboard/view/${api.api_id}`)} isIconOnly className='bg-transparent text-default-400 scale-[90%]'>
										<Eye />
									</Button>
								</Tooltip>
								<Tooltip content="Edit API">
									<Button isIconOnly className='bg-transparent text-default-400 scale-[90%]'>
										<Pencil />
									</Button>
								</Tooltip>
								<Tooltip content="Delete API" color='danger'>
									<Button isIconOnly className='bg-transparent text-danger scale-[90%]' onClick={() => deletesAPI(api.api_id)}>
										<Trash />
									</Button>
								</Tooltip>
							</div>
						</TableCell>
					</TableRow>
				))}
				{/* Remove or keep the hardcoded row */}
			</TableBody>
		</Table>
	);
};

export default ApiTable;
