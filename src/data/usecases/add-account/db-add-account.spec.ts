import { Encrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'

describe('DbAddAccount Usecase', () => {
  test('should call Encrypter with the correct password', async () => {
    class EncrypterStub implements Encrypter {
      async encrypt (value: string): Promise<string> {
        return await Promise.resolve('hashed_password')
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const account = {
      name: 'valid_name',
      email: 'valid_email@email.com',
      password: 'valid_password'
    }
    await sut.add(account)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
