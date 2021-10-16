'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.Tips, { foreignKey: 'tipsId' })
      Comments.hasOne(models.User, { foreignKey: 'userId' })
    }
  }
  Comments.init(
    {
      comment: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Comments',
      tableName: 'comments'
    }
  )
  return Comments
}
