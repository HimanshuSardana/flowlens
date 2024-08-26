"use client"
import React from 'react'
import { Switch } from '@nextui-org/switch'
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react'

function ThemeSwitcher() {
	const [theme, setTheme] = React.useState('dark')
	const changeTheme = () => {
		if (theme == 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}
	return (
		<>

			<Switch
				defaultSelected
				size="md"
				color="primary"
				startContent={<MoonIcon />}
				endContent={<SunIcon />}
			>
			</Switch>
		</>
	)
}

export default ThemeSwitcher
