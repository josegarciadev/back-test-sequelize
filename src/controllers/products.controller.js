import Category from "../models/Categories";
import Product from "../models/Products";

//get all
export async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll({include: Category, order:[ ['id','ASC']]});
    res.json({
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      error
    });
  }
}

//get by one
export async function getProductById(req, res) {
  const { id } = req.params;

  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}
export async function getProductByIdCategory(req, res) {
    const { id } = req.params;
  
    try {
      const product = await Product.findAll({
        where: {
            categoryId: id,
        },
      });
      res.json({
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: {},
      });
    }
  }

//create new categories
export async function createProduct(req, res) {
  const { name, stock, categoryId } = req.body;

  try {

    const newProduct = await Product.create(
      {
        name,
        stock,
        categoryId
      },
      {
        fields: ["name", "stock", "categoryId"],
      }
    );
    if (newProduct) {
      res.json({
        message: "Product created successfully",
        data: newProduct,
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      data: {},
      error
    });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const deleteRowCount = await Product.destroy({
      where: {
        id
      },
    });
    res.json({
      message: "Product Eliminated successfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}
export async function editProduct(req, res) {
    const { id } = req.params;
    const { name, stock, categoryId } = req.body;
    console.log(name, stock, categoryId )
    try {
      const product = await Product.findOne({
        where: {
          id
        }
      });

      product.update({
        name,
        stock,
        categoryId
      });
      res.json({
        message: "Product updated successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: {},
        error
      });
    }
  }

