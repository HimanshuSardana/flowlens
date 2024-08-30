"use server"
import React from 'react'
import { createClient } from '@/utils/supabase/server'

export async function getAPIName(api_id: string) {
	const supabase = createClient();
	const { data, error } = await supabase.from('apis').select('api_name').eq('api_id', api_id).single();
	if (error) {
		console.error('Error fetching API name:', error);
		return "Error"
	}
	else {
		return data['api_name']
	}
}

export async function uploadImage(file: any, fileName: string) {
	const supabase = createClient();
	const { data, error } = await supabase.storage.from('images').upload(fileName, file);
	if (error) {
		console.error(error);
	}
	else {
		console.log("Uploaded successfully");
	}

}
