const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Img = sequelize.define('img', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    src: {type: DataTypes.STRING, unique: true,},
})

User.hasMany(Img)
Img.belongsTo(User)

module.exports = {
    User,
    Img
}
