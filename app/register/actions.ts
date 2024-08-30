'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
	const supabase = createClient()

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		email_verified: true,
		user_metadata: {
			username: formData.get('username') as string,
		},

	}

	const { error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	})

	if (error) {
		return { success: false, message: error.message }
	}

	revalidatePath('/', 'layout')
	redirect('/dashboard')
}

