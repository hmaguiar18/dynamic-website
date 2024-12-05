import {Client,Databases} from 'appwrite'

const client = new Client();
client.setProject('6746c42a001076edbe54');

export const databases = new Databases(client);