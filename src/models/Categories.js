import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Product from './Products'

const Category = sequelize.define('categories',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    },
},{
    timestamps:false
});

Category.hasMany(Product,{foreingKey:'categoryId'});
Product.belongsTo(Category,{foreingKey:'categoryId'});
export default Category;