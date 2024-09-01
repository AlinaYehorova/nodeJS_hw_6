import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'mysql.itcareerhub.de',
  user: 'ich1',
  password: 'ich1_password_ilovedbs',
  database: 'product_db',
  port: 3306
})

db.connect((error) => {
if(error) {
  console.log(`Error connection database`, error.stack);
  return
}
console.log('Connected to the database' + db.threadId);

})

export default db

