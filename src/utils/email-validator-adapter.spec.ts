import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail: (): boolean => true
}))

describe('EmailValidatorAdapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBe(false)
  })

  test('should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@email.com')
    expect(isValid).toBe(true)
  })

  test('should call validator with the correct email', () => {
    const sut = new EmailValidatorAdapter()
    const validatorSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('valid_email@email.com')
    expect(validatorSpy).toHaveBeenCalledWith('valid_email@email.com')
  })
})
