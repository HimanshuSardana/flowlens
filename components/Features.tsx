import React from 'react'
import { Tabs, Tab } from '@nextui-org/tabs'

function Features() {
	return (
		<div className='flex w-full flex-col gap-3'>
			<h3 className='text-5xl font-black'>Features</h3>
			<div>
				<Tabs color='default' variant='light' isVertical fullWidth className='w-1/2' classNames={{
					tabList: "gap-6 bg-zinc-800 ",
					tab: 'p-5 bg-zinc-800 border-2 border-blue-500 text-left justify-start group-data-[selected=true]:bg-zinc-800',
					tabContent: " text-left justify-start font-bold text-xl",
				}}>
					<Tab key="1" title="AI Frame Interpolation" >test</Tab>
					<Tab key="2" title="Geospatial Detection">test</Tab>
				</Tabs>

			</div>
		</div>
	)
}

export default Features
