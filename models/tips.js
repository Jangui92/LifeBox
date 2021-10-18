'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tips.hasMany(models.Comments, { foreignKey: 'tipsId' })
      Tips.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Tips.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Tips',
      tableName: 'tips'
    }
  )
  return Tips
}
