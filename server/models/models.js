const seauelize = require('../db')
const {DataTypes} = require('sequelize')

const User = seauelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type: DataTypes.STRING, unique:true},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue:'USER'},
})

const Basket = seauelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const BasketProduct = seauelize.define('basket_device', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Product = seauelize.define('product', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false},
    price:{type: DataTypes.INTEGER, allowNull: false},
    rating:{type: DataTypes.INTEGER, defaultValue: 0},
    img:{type: DataTypes.STRING, allowNull: false},
})

const Size = seauelize.define('size', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true},
})

const Category = seauelize.define('category', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Rating = seauelize.define('rating', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type: DataTypes.INTEGER, allowNull:false},
})

const ProductInfo = seauelize.define('product_info', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.STRING, allowNull:false},
})

const SizeCategory = seauelize.define('size_category', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Size.hasMany(Product)
Product.belongsTo(Size)

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, {as:'info'})
ProductInfo.belongsTo(Product)

Size.belongsToMany(Category, {through: SizeCategory})
Category.belongsToMany(Size, {through: SizeCategory})

module.exports = {User, Basket, BasketProduct, Product, Size, Category, Rating, ProductInfo, SizeCategory}


