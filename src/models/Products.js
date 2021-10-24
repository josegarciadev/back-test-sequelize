import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Product = sequelize.define('products',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT
    },
    stock:{
        type: Sequelize.INTEGER
    },
    categoryId:{
        type: Sequelize.INTEGER,
        field: 'categoryid',
        references: {
            model: 'categories',
            key: 'id',
          },
    },
},{
    timestamps:false
});

export default Product;