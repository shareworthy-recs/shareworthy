import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';

const Users = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    friends: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    credibility_score: {
        type: DataTypes.INTEGER
    }
});

Users.sync().then(() => {
    console.log('Users synced successfully');
})

export default Users;
