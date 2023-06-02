import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';
import Users from "./usersModel";
import Questions from "./questionsModel";
import Categories from "./categoriesModel";

const Recommendations = sequelize.define('recommendations', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.INTEGER,
        references: {
            model: Questions,
            key: 'id'
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Categories,
            key: 'name'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    location: {
        type: DataTypes.STRING
    }
});

Recommendations.sync().then(() => {
    console.log('Recommendations synced successfully');
})

export default Recommendations;

