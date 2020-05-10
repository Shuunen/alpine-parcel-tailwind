export class User {
  constructor (email) {
    this.id = ''
    this.email = email || ''
    this.detectId()
  }

  detectId () {
    if (!this.email.length) return
    this.id = this.email.split('@')[0]
  }
}
