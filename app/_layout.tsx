import { AuthProvider, useAuth } from '@/lib/auth-context'
import { Stack, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function RouteGuard({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	const { user, isLoadingUser } = useAuth()
	const segment = useSegments()

	useEffect(() => {
		const inAuthGroup = segment[0] === 'auth'
		if (!user && !inAuthGroup && !isLoadingUser) {
			router.replace('/auth')
		} else if (user && inAuthGroup && !isLoadingUser) {
			router.replace('/')
		}
	}, [router, segment, user, isLoadingUser])

	return <>{children}</>
}

export default function RootLayout() {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<RouteGuard>
					<Stack>
						<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					</Stack>
				</RouteGuard>
			</SafeAreaProvider>
		</AuthProvider>
	)
}
