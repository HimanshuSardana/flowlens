import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Chip } from '@nextui-org/chip'
import AddAPIButton from '@/components/AddAPIButton'
import APITable from '../../components/APITable'
import MapTest from '../../components/MapTest'
import { redirect } from 'next/navigation'
import { Eye, Clipboard, ChevronRight } from 'lucide-react'
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
			<Sidebar selected={"dashboard"} />
			<div className='flex flex-col'>
				<Topbar breadcrumbs={"Dashboard"} />
				<div className='p-10'>
					<div className='flex flex-col gap-3'>
						<div className="flex gap-3 items-center">
							<h3 className='text-lg font-semibold text-zinc-400 flex gap-3 items-center'  >Recently Accessed <i className='scale-[80%] text-zinc-400'><ChevronRight /></i>
							</h3>
						</div>
						<div className="cards">
							<div className="card p-5 bg-zinc-900 w-1/4 flex flex-col gap-3 rounded-md">
								<Chip color="primary" variant="dot">A few minutes ago</Chip>
								<h3 className='text-2xl font-bold'>test_lens</h3>
								<h3 className='font-bold text-md text-zinc-400'>Images: <span>3</span></h3>
								<div className="flex gap-3">
									<Button startContent={<Eye />} variant='light' color='default' className='font-bold text-default-400'>View</Button>
									<Button startContent={<Clipboard />} variant='light' color='default' className='font-bold text-default-400'>Copy URL</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

