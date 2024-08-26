
"use client"
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet's CSS

function Map({ latitude, longitude }) {
	return (
		<MapContainer className='rounded-md' center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
}

export default Map;
