import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      total: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
