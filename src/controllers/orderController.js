import Order from "../models/Order.js";

// CREATE
export const createOrder = async (req, res) => {
  try {
    const body = req.body;
    const order = new Order({
      orderId: body.numeroPedido,
      value: body.valorTotal,
      creationDate: new Date(body.dataCriacao),
      items: body.items.map((item) => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem,
      })),
    });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ BY ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateOrder = async (req, res) => {
  try {
    const body = req.body

    const updated = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      {
        orderId: body.numeroPedido,
        value: body.valorTotal,
        creationDate: new Date(body.dataCriacao),
        items: body.items.map((item) => ({
          productId: Number(item.idItem),
          quantity: item.quantidadeItem,
          price: item.valorItem,
        })),
      },
      { new: true },
    );

    if (!updated) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findOneAndDelete({ orderId: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json({ message: "Pedido deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
