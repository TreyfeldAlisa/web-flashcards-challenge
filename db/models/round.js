'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck, User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' }); 
      this.belongsTo(Deck, { foreignKey: 'deck_id' }); 
     }
  }
  Round.init({
    user_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    solved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};
