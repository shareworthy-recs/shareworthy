import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';

const Categories = sequelize.define("categories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
 createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        field: 'createdat', // Specify the column name as 'createdat' in the database
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
});

Categories.sync().then(() => {
    console.log('Categories synced successfully');
})

export default Categories;