import { Account, Client } from 'react-native-appwrite'

export const client = new Client()
	.setEndpoint(process.env.EXPO_PUBLIC_APPWRITER_ENDPOINT!)
	.setProject(process.env.EXPO_PUBLIC_APPWRITER_PROJECT_ID!)
	.setPlatform(process.env.EXPO_PUBLIC_APPWRITER_PLATFORM!)

export const account = new Account(client)
