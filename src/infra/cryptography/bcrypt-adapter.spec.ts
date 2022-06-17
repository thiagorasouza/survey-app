import { BcryptAdapter } from './bcrypt-adapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  hash: async (): Promise<string> => {
    return await Promise.resolve('hashed_value')
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  test('should call bcrypt with the correct value', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('should throw when bcrypt throws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.encrypt('any_value')
    await expect(promise).rejects.toThrow()
  })

  test('should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    await expect(hash).toBe('hashed_value')
  })
})
