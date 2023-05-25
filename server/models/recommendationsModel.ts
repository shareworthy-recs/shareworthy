import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';
import Users from "./usersModel";
import Questions from "./questionsModel";
import Categories from "./categoryModels";

const Recommendations = sequelize.define('recommendations', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    created_by: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    question: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        type: DataTypes.INTEGER
    },
    location: {
        type: DataTypes.STRING
    }
});

Recommendations.sync().then(() => {
    console.log('Recommendations synced successfully');
})

export default Recommendations;