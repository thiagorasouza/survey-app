import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  connect: async function (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },
  disconnect: async function (): Promise<void> {
    this.client.close()
  }
}
