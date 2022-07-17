import model from "../models";

const { Order, OrderItem } = model;

export async function getOrders(req, res) {
  try {
    const orders = await Order.findAll();
    if (orders) {
      return res.status(200).send({ orders });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message:
        "Could not perform operation at this time, kindly try again later.",
    });
  }
}

export async function createOrder(req, res) {
  try {
    const order = await Order.create({
      total: req.body.total,
    });

    const { items } = req.body;

    const orderItemQueries = [];
    for (let i = 0; i < items.length; i += 1) {
      const item = {
        order_id: order.id,
        item_id: items[i].id,
        quantity: items[i].quantity,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      orderItemQueries.push(OrderItem.create(item));
    }

    const orderItemResults = await Promise.all(orderItemQueries);

    res.send({ orderItems: orderItemResults, order });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message:
        "Could not perform operation at this time, kindly try again later.",
    });
  }
}
