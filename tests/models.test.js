import test from 'ava'
import { User } from '../src/models/user'

test('user id working detection', t => {
  const user = new User('romain.racamier@gmail.com')
  t.is(user.id, 'romain.racamier')
})

test('user id default detection', t => {
  const user = new User()
  t.is(user.id, '')
})
