import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  connect: async function (uri): Promise<void> {
    this.client = new MongoClient(uri)
    await this.client.connect()
  },

  disconnect: async function (): Promise<void> {
    await this.client.close()
  },

  getCollection: function (name: string): Collection {
    return this.client.db().collection(name)
  }
}
