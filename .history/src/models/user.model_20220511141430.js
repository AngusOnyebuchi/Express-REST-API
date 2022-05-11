const db = require('../config/db.config')

//constructor
class User {
    constructor(id, email, phone_number) {
        this.id = id
        this.email = email
        this.phone_number = phone_number
    }
    static create(newUser, result) {
        db.query(`INSERT INTO usersVAL`)
    }
}