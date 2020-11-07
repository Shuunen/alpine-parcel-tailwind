export class User {
  constructor (email) {
    this.id = ''
    this.email = email || ''
    this.detectId()
  }

  detectId () {
    if (this.email.length === 0) return
    this.id = this.email.split('@')[0]
  }
}
