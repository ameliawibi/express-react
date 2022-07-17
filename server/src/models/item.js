import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
