import { DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

const product = sequelize.define("Product",{
    name: {type: DataTypes.STRING(100), allowNull: false },
    description:{type: DataTypes.STRING(250)},
    price: {type: DataTypes.FLOAT, allowNull: false },
    stock: {type: DataTypes.INTERGER, defaulValue: 0}
});

export default product;