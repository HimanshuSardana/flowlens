'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
	const supabase = createClient()

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		return { success: false, message: "Incorrect email or password" }
	}

	revalidatePath('/', 'layout')
	redirect('/dashboard')
}


export async function handleGitHubLogin() {
	const supabase = createClient()
	console.log("Attempting GitHub OAuth login...")

	const { error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
	})

	if (error) {
		console.log("GitHub OAuth error:", error)
		return { success: false, message: "Failed to login with GitHub" }
	}

	console.log("GitHub OAuth login successful!")
	return { success: true }
}
