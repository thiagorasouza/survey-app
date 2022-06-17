import { ObjectId } from 'mongodb'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(account)
    const { insertedId } = result
    const insertedAccount = await accountCollection.findOne({ _id: insertedId })
    return {
      id: new ObjectId(insertedAccount._id).toString(),
      name: insertedAccount.name,
      email: insertedAccount.email,
      password: insertedAccount.password
    }
  }
}
