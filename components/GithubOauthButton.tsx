import { Button } from '@nextui-org/button'
import { toast } from 'sonner'
import { createClient } from '@/utils/supabase/server'

function LoginPage() {
	const handleGitHubLogin = async () => {
		try {
			const supabase = createClient()
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'github',
			})

			if (error) {
				toast.error('Failed to sign in with GitHub')
			}
		} catch (error) {
			toast.error('An unexpected error occurred')
		}
	}

	return (
		<Button onClick={handleGitHubLogin} fullWidth className='bg-zinc-900' radius='sm'>
			GitHub
		</Button>
	)
}

export default LoginPage

