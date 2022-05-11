const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '08142323921AA',
    database: 'angus'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('Database Connected!')
})

module.exports = connection