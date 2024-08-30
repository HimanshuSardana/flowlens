"use client"
import React from 'react'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { DateRangePicker } from '@nextui-org/date-picker'
import Topbar from '@/components/Topbar'
import { useEffect } from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { ThemeSwitch } from '@/components/theme-switch'
import { Input } from '@nextui-org/input'
import { Snippet } from '@nextui-org/snippet'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Select, SelectItem } from '@nextui-org/select'
import { Switch } from '@nextui-org/switch'
import { Tabs, Tab } from '@nextui-org/tabs'
import { getAPIName, uploadImage } from './actions'
import { Skeleton } from '@nextui-org/skeleton'
import UploadImage from '@/components/UploadImage'

export default function Page({ params }: { params: { endpoint: string } }) {
	const [geotagging, setGeotagging] = React.useState(true)
	const [image, setImage] = React.useState(null as any)
	const [apiName, setApiName] = React.useState(null as any)

	useEffect(() => {
		setApiName(getAPIName(params.endpoint))
		console.log(apiName);

	}, [])

	const handleImageChange = (event: any) => {
		const file = event.target.files[0]; // Get the selected file
		if (file) {
			const reader = new FileReader(); // Create a FileReader to read the file

			reader.onloadend = () => {
				setImage(reader.result); // Set the image data URL to the state
			};

			reader.readAsDataURL(file); // Read the file as a data URL
		}
	};

	return (
		<div className='flex flex-col gap-3 max-w-7xl mx-auto'>

			<div className="flex h-20 px-10 items-center justify-between w-full">
				<h3 className='font-bold text-xl'>Flow<span className='text-blue-500'>Lens</span></h3>
				<ThemeSwitch />

			</div>
			<div className='px-10'>


				<h3 className='text-3xl font-black'>
					{apiName == null ? <Skeleton className='w-32 h-7' /> : apiName}
				</h3>
				<div>
					<Tabs fullWidth variant='underlined' color='primary' classNames={{
						tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
						cursor: "w-full bg-blue-500",
						tab: "max-w-fit px-0 h-12",
						tabContent: "group-data-[selected=true]:text-blue-500"
					}}>
						<Tab key="1" title="Upload Manually">
							<p className='text-default-500'>Upload via the Web Interface</p>
							<UploadImage />
						</Tab>
						<Tab key="2" title="Upload via API">
							<Snippet lang='bash'>curl -LO localhost:3000/api/66df07eb-eede-4cd4-9947-105c67b6dcc7/upload</Snippet>
						</Tab>
						<Tab key="3" title="Use Existing API">
							<div className='flex flex-col gap-3'>
								<Card className='p-5 flex flex-col gap-3 w-1/3 mt-2 border-2 border-default-200 dark:border-0' shadow="none">
									<h3 className='text-lg font-bold'>Select Location</h3>
									<Select label='Select API' defaultSelectedKeys={["nasa"]} className='' radius='sm'>
										<SelectItem key={"nasa"}>NASA Earth</SelectItem>
									</Select>
									<Input label="Location" className='' radius='sm' />
									<div className="flex gap-2">
										<Input label="Latitude" radius="sm"/><Input label='Longitude' radius='sm' />
									</div>
									<Divider className='my-5' />
									<h3 className='text-lg font-bold'>Select Dates</h3>
									<DateRangePicker radius="sm" label="Select Dates" />
									<Button color='primary' radius='sm'>Get Images</Button>

								</Card>


							</div>
						</Tab>
					</Tabs>


				</div>
			</div >
		</div>
	)
}
