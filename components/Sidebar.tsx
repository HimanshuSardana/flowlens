import React from 'react'
import Link from 'next/link'
import UserButton from '@/components/UserButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";
import { LayoutDashboard, Computer } from 'lucide-react';

async function Sidebar({ selected }) {
	const supabase = createClient()

	const { data, error } = await supabase.auth.getUser()

	if (error || !data?.user) {
		redirect('/login')
	}

	return (
		<div className="sidebar h-screen w-[20%] bg-white dark:bg-zinc-950 flex flex-col justify-between">
			<div>
				<div className="brand p-10">
					<h3 className='font-extrabold text-3xl'>Flow<span className='text-blue-500'>Lens</span></h3>
				</div>
				<div className="links flex flex-col ">
					{selected == "dashboard" ? (
						<>

							<Link className="px-10 py-3 text-blue-500 font-bold  flex gap-3 items-center" href="localhost:3000/dashboard/"><i className='bg-blue-500/10 p-3 rounded-md'><LayoutDashboard /> </i>Dashboard</Link>
							<Link className="px-10 py-3 text-default-500 font-medium flex gap-3 items-center" href="localhost:3000/dashboard/api"><i className='bg-zinc-400/10 rounded-md p-3'><Computer /> </i>Lenses</Link>
						</>
					) : (
						<>

							<Link className="px-10 py-3 text-default-500 font-bold  flex gap-3 items-center" href="localhost:3000/dashboard/"><i className='rounded-md bg-zinc-400/10 rounded-md p-3'><LayoutDashboard /> </i>Dashboard</Link>
							<Link className="px-10 py-3 text-blue-500 font-medium flex gap-3 items-center" href="localhost:3000/dashboard/api"><i className='rounded-md bg-blue-500/10 p-3 '><Computer /> </i>Lenses</Link>
						</>
					)}
				</div>
			</div>
			<UserButton name={data.user.user_metadata.username} email={data.user.email} />
		</div>

	)
}

export default Sidebar
