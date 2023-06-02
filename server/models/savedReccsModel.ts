import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import Users from "./usersModel";
import Recommendations from "./recommendationsModel";

const SavedReccs = sequelize.define("saved_reccomendations", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  saved_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  reccomendation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Recommendations,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.INTEGER,
    references: {
      model: Recommendations,
      key: "created_by",
    },
  },
});

SavedReccs.sync().then(() => {
  console.log("SavedReccs synced successfully");
});

export default SavedReccs;
