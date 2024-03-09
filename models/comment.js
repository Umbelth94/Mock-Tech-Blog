const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes. INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    },
);

module.exports = Comment;