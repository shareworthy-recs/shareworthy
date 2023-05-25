import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from '../db';

const Users = sequelize.define("users", {
    user_id: {
        primaryKey: true
    },

});