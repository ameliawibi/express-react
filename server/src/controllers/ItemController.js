import model from "../models";

const { Item } = model;

export default {
  async getItem(req, res) {
    try {
      const items = await Item.findAll();

      if (items) {
        console.log(items);
        return res.status(200).send({ items });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          "Could not perform operation at this time, kindly try again later.",
      });
    }
  },
};
