import React from 'react'
import Topbar from '@/components/Topbar'
import AddAPIButton from '@/components/AddAPIButton'
import APITable from '../../../components/APITable'
import Sidebar from '@/components/Sidebar'
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
			<Sidebar />
			<div className='flex flex-col'>
				<Topbar breadcrumbs="Dashboard > APIs" />
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

