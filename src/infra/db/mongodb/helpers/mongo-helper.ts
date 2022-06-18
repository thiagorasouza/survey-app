import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  uri: '',
  client: null as MongoClient,

  connect: async function (uri): Promise<void> {
    this.uri = uri
    this.client = new MongoClient(uri)
    await this.client.connect()
  },

  disconnect: async function (): Promise<void> {
    if (this.client) {
      await this.client.close()
      this.client = null
    }
  },

  getCollection: async function (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  }
}
