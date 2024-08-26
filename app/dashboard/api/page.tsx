import React from 'react'
import AddAPIButton from '@/components/AddAPIButton'
import APITable from '../../../components/APITable'
import MapTest from '../../../components/MapTest'
import { redirect } from 'next/navigation'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell
} from "@nextui-org/table";
import { createClient } from '@/utils/supabase/server'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { LayoutDashboard, Computer, Plus } from 'lucide-react'
import UserButton from '../../../components/UserButton'
import ThemeSwitcher from '../../../components/ThemeSwitcher'

export default async function DashboardPage() {
	const supabase = createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
		redirect('/login')
	}

	return (
		<div className='p-0 m-0 flex'>
			<div className="sidebar h-screen w-[20%] bg-zinc-950 flex flex-col justify-between">
				<div>
					<div className="brand p-10">
						<h3 className='font-extrabold text-3xl'>Flow<span className='text-blue-500'>Lens</span></h3>
					</div>
					<div className="links flex flex-col">
						<Link className="px-10 py-3 font-bold text-default-500 flex gap-3 items-center" href="#"><LayoutDashboard /> Dashboard</Link>
						<Link className="px-10 py-3 font-bold text-blue-500 flex gap-3 items-center" href="#"><Computer /> APIs</Link>
					</div>
				</div>
				<UserButton name={"Himanshu Sardana"} email={data.user.email} />
			</div>
			<div className='flex flex-col'>
				<div className="px-10 topbar h-20 flex justify-between items-center bg-zinc-950 w-[80vw]">
					<h3 className='text-md font-bold'>Dashboard > <span className='hover:underline text-blue-500'>APIs</span></h3>
					<ThemeSwitcher />
				</div>
				<div className='p-10'>
					<div className='flex justify-between'>
						<h3 className='text-lg font-bold'>APIs</h3>
						<AddAPIButton />
					</div>
				</div>
				<div className='px-10'>
					<APITable />
				</div>

			</div>
		</div>
	)
}

