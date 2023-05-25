import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_URI as string);

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    }catch(error){
        console.error('Unable to connect to the datbase:', error)
    }
}

export { sequelize, connectDB };