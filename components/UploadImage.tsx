import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Switch } from '@nextui-org/switch'
import { uploadImage } from '../app/api/[endpoint]/actions'

function UploadImage() {
	const [geotagging, setGeotagging] = React.useState(true)
	const [fileName, setFileName] = React.useState('');
	const [image, setImage] = React.useState(null as any)
	const [fileData, setFileData] = React.useState()
	const handleImageChange = (event: any) => {
		const file = event.target.files[0]; // Get the selected file
		setFileData(file);
		setFileName(event.target.files[0].name)
		if (file) {
			const reader = new FileReader(); // Create a FileReader to read the file

			reader.onloadend = () => {
				setImage(reader.result); // Set the image data URL to the state
			};

			reader.readAsDataURL(file); // Read the file as a data URL
		}
	};

	return (
		<div className="flex gap-20 w-2/3 mx-auto my-20 items-center">
			<div className='flex flex-col gap-3'>
				<Input type="file" onChange={handleImageChange} label="Upload Image" className='flex-1' accept='image/*' radius='sm' />
				<div className="rounded-md h-56 w-full bg-default-200 dark:bg-zinc-900 flex justify-center items-center" style={{
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundImage: `url(${image})`,
				}}>{image == null ? "Image Preview" : ""}</div>

			</div>
			<div className="flex flex-col gap-3 flex-1">
				<Switch isSelected={geotagging} onChange={() => setGeotagging(!geotagging)}>Enable Geotagging</Switch>
				<div className="flex gap-3">
					<Input disabled={geotagging} type="text" label="Latitude" radius='sm' size="sm" className='w-1/2' />
					<Input disabled={geotagging} type="text" label="Longtitude" radius='sm' size='sm' className='w-1/2' />

				</div>
				<Button color="primary" onClick={() => uploadImage(image, fileName)}>Upload Image</Button>
			</div>
		</div>

	)
}

export default UploadImage
