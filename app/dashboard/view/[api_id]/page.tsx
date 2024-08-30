"use client"
import React from 'react'
import { ThemeSwitch } from '@/components/theme-switch'
import Map from '@/components/Map'
import { ResizableBox } from 'react-resizable';
import MapVideo from '@/components/MapVideo'
import { Select, SelectItem } from '@nextui-org/select'
import { Button } from '@nextui-org/button'
import 'react-resizable/css/styles.css';
import { ArrowLeft2 } from 'iconsax-react'
import { useRouter } from 'next/navigation'

function page() {
	const router = useRouter()
	const [view, setView] = React.useState(new Set(["map"]))
	return (
		<div className="max-w-screen">
			<div className="topbar flex gap-3 px-20 items-center h-32 justify-between">
				<Button onClick={() => router.push("/dashboard/api")} className='flex gap-3 dark:bg-black bg-white font-bold text-sm' startContent={<ArrowLeft2 />}>
					Back

				</Button>
				<ThemeSwitch />
			</div>
			<div className='flex gap-5 mx-20'>
				<ResizableBox
					width={800}
					height={700}
					minConstraints={[100, 100]}
					maxConstraints={[1000, 700]}
					resizeHandles={['se']}
				>
					<div className='rounded-md w-full h-full text-zinc-600 text-sm font-bold bg-default-100 dark:bg-zinc-900 flex p-5'>
						<div className="flex flex-col w-56 gap-5">
							<div className='flex gap-5 items-center h-10 w-full'>

								<h3>
									PLAYBACK
								</h3>
								<Select label="View" size='sm' disabledKeys={["video"]} selectedKeys={view} onSelectionChange={setView} color='default' radius='sm' classNames={['bg-zinc-900']}>
									<SelectItem key={"map"}>Map View</SelectItem>
									<SelectItem key={"video"}>Video View</SelectItem>
									<SelectItem key={"map+video"}>Map + Video View</SelectItem>
								</Select>
							</div>
							<div className='w-[40vw] h-[70vh] dark:invert'>
								<h3></h3>
								{Array.from(view).join(" ") == "map" && <Map latitude="23" longitude="90" />}
								{Array.from(view).join(" ") == "map+video" && <MapVideo />}

							</div>


						</div>
					</div>
				</ResizableBox>
				<div className="flex flex-col gap-4">

					<ResizableBox
						width={900}
						height={350}
						minConstraints={[100, 100]}
						maxConstraints={[900, 500]}
						resizeHandles={['se']}
					>
						<div
							className='rounded-md w-full h-full font-bold bg-default-100 dark:bg-zinc-900 flex flex-col gap-3 p-5'
						>
							<h3 className='text-sm text-zinc-600'>LOGS</h3>
						</div>
					</ResizableBox>
					<ResizableBox
						width={900}
						height={333}
						minConstraints={[100, 100]}
						maxConstraints={[900, 500]}
						resizeHandles={['se']}
					>
						<div
							className='rounded-md w-full h-full font-bold bg-default-100 dark:bg-zinc-900 flex flex-col gap-3 p-5'
						>
							<h3 className='text-sm text-zinc-600'>IMAGE GALLERY</h3>
						</div>
					</ResizableBox>
				</div>

			</div >


		</div >


	)
}

export default page
