const seauelize = require('../db')
const {DataTypes} = require('sequelize')

const User = seauelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type: DataTypes.STRING, unique:true},
    password:{type: DataTypes.STRING},
    isActivate:{type:DataTypes.BOOLEAN, defaultValue:false},
    activationLink:{type:DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue:'USER'},
})

const Order = seauelize.define('order', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    products:{type:DataTypes.ARRAY(DataTypes.STRING)},
    // products:{type:DataTypes.STRING},
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
    sizes:{type:DataTypes.ARRAY(DataTypes.STRING)},
    categories:{type:DataTypes.ARRAY(DataTypes.STRING)}
})

const Size = seauelize.define('size', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING},
    sizeIndex:{type: DataTypes.INTEGER},
})

const Category = seauelize.define('category', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Rating = seauelize.define('rating', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type: DataTypes.INTEGER, allowNull:false},
})


const SizeCategory = seauelize.define('size_category', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Token = seauelize.define('token', {
    refreshToken:{type: DataTypes.STRING, required:true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

User.hasOne(Token)
Token.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)


Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)


Size.belongsToMany(Category, {through: SizeCategory})
Category.belongsToMany(Size, {through: SizeCategory})

module.exports = {User, Basket, BasketProduct, Product, Size, Category, Rating, SizeCategory, Token, Order}


