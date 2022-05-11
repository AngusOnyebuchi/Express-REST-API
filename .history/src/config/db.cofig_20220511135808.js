const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Angus'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('Database Connected!')
})

module.exports = connection