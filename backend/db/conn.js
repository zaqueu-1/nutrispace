require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('Conectado ao banco de dados!')

    } catch {
        console.log(`Erro!`)
    }
}

module.exports = main;