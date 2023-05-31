import { DataTypes } from "sequelize";
import { sequelize } from '../config/db';

const AuthUsers = sequelize.define("authUsers", {
  username: {
      type: DataTypes.STRING(50),
      allowNull: false
  },
  googleID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  image:{
    type: DataTypes.STRING,
  },
  githubID: {
    type: DataTypes.STRING,
  }
});

export default AuthUsers;