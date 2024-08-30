"use server"
import { createClient } from '@/utils/supabase/server'
export const fetchData = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.from('apis').select('*');
	if (error) {
		console.error('Error fetching APIs:', error);
	} else {
		return (data)
	}
}

export const createAPI = async (name: string) => {
	const supabase = createClient();
	const { data, error } = await supabase.from('apis').insert([
		{ api_name: name, email: 'himanshusardana00&@gmail.com' }
	]);
	if (error) {
		console.error('Error creating API:', error);
	} else {
		console.log('API created:', data);
	}
}

export const deletesAPI = async (api_id: string) => {
	const supabase = createClient();
	const { data, error } = await supabase.from('apis').delete().eq('api_id', api_id);
	if (error) {
		console.error('Error deleting API:', error);
	} else {
		console.log('API deleted:', data);
	}
}
