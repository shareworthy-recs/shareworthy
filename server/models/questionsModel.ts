import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';
import Users from "./usersModel";
import Categories from "./categoriesModel";

const Questions = sequelize.define("questions", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Categories,
            key: 'name'
        }
    }
});

Questions.sync().then(() => {
    console.log('Questions synced successfully');
})

export default Questions;