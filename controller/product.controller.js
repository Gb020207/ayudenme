import Product from "../models/product.js";
export const creatProduct = async (req, res) =>{
    const {name, price, description, stock } = req.body;

    try{
        const product = await Product.create({name, price, description, stock});
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({error: err.message});

    }

};

export const getALLProduct = async (req, res) => {
    try{
        const products = await Product.findALL();
        res.json({
            count: product.legth,
            data: product
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }

  const product = await Product.create(req.body);

  res.status(201).json(product);
};
export const updateProducts = async (req, res) => {
    try{
        const products = await Product.updateALL();
        res.json({
            count: product.legth,
            data: product
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }
};
export const deleteProduct = async (req, res) => {
    try{
        const deleted = await Product.delete();
        res.json({
            count: product.legth,
            data: product
        });

    } catch (err) {
        res.status(500).json({error: err.message });
    }
};