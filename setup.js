import db from "./db.js";

const setup = () => {
  try {
    db.execute(`
    CREATE TABLE IF NOT EXISTS products(
        Id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL
    )
`);
    console.log('Table `products` created or already exists.');
    
  } catch (error) {
    console.error('Error creating table', error);
    
  }
}

setup()
