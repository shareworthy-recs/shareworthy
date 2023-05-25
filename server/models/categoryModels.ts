import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';

const Categories = sequelize.define("categories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
});

Categories.sync().then(() => {
    console.log('Categories synced successfully');
})

export default Categories;