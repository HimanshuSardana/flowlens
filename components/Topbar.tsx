import React from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { breadcrumbs } from '@nextui-org/theme'

const Topbar = ({ breadcrumbs }) => {
	return (
		<div className="px-10 topbar h-20 flex justify-between items-center bg-zinc-950 w-[80vw]">
			<h3 className='text-md font-bold'>{breadcrumbs}</h3>
			<ThemeSwitcher />
		</div>
	);
};

export default Topbar
