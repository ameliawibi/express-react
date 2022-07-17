import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init(
    {
      quantity: DataTypes.INTEGER,
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Items",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
