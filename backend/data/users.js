import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  
  {
    name: 'Purbasha Roy',
    email: 'purbasharoy@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
  
  {
    name: 'Titli Roy',
    email: 'titli_99@example.com',
    password: bcrypt.hashSync('123456', 10),
   
  }
]

export default users
