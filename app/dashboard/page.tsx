import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import AddAPIButton from '@/components/AddAPIButton'
import APITable from '../../components/APITable'
import MapTest from '../../components/MapTest'
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
import UserButton from '../../components/UserButton'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {
	ssr: false, // This disables server-side rendering for this component
});

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
				<Topbar breadcrumbs={"Dashboard"} />
				<div className='p-10'>
					<div className='flex justify-between'>
						<h3 className='text-lg font-bold'>Dashboard</h3>
					</div>
				</div>
				<div className='dark:invert px-10 h-[50vh]'>
					<h3></h3>
					<Map latitude={28.560741} longitude={77.214371} />
				</div>

			</div>
		</div>
	)
}

