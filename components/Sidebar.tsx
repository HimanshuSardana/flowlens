import React from 'react'
import Link from 'next/link'
import UserButton from '@/components/UserButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";
import { LayoutDashboard, Computer } from 'lucide-react';

async function Sidebar() {
	const supabase = createClient()

	const { data, error } = await supabase.auth.getUser()
	if (error || !data?.user) {
		redirect('/login')
	}

	return (
		<div className="sidebar h-screen w-[20%] bg-zinc-100 dark:bg-zinc-950 flex flex-col justify-between">
			<div>
				<div className="brand p-10">
					<h3 className='font-extrabold text-3xl'>Flow<span className='text-blue-500'>Lens</span></h3>
				</div>
				<div className="links flex flex-col">
					<Link className="px-10 py-3 text-blue-500 font-bold  flex gap-3 items-center" href="localhost:3000/dashboard/"><LayoutDashboard /> Dashboard</Link>
					<Link className="px-10 py-3 font-bold flex gap-3 items-center" href="localhost:3000/dashboard/api"><Computer /> APIs</Link>
				</div>
			</div>
			<UserButton name={"Himanshu Sardana"} email={data.user.email} />
		</div>

	)
}

export default Sidebar
