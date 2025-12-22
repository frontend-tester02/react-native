import { Account, Client, Databases } from 'react-native-appwrite'

export const client = new Client()
	.setEndpoint(process.env.EXPO_PUBLIC_APPWRITER_ENDPOINT!)
	.setProject(process.env.EXPO_PUBLIC_APPWRITER_PROJECT_ID!)
	.setPlatform(process.env.EXPO_PUBLIC_APPWRITER_PLATFORM!)

export const account = new Account(client)

export const databases = new Databases(client)

export const DATABASE_ID = process.env.EXPO_PUBLIC_DB_ID!
export const HABITS_COLLECTION_ID =
	process.env.EXPO_PUBLIC_HABITS_COLLECTION_ID!

export interface RealtimeResponse {
	events: string[]
	payload: any
}
