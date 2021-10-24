import Category from "../models/Categories";

//get all
export async function getAllCategories(req, res) {
  try {
    const Categories = await Category.findAll();
    res.json({
      data: Categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}

//get by one
export async function getCategoryById(req, res) {
  const { id } = req.params;

  try {
    const category = await Category.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}

//create new categories
export async function createCategory(req, res) {
  const { name, description } = req.body;

  try {

    const category = await Category.findOne({
        where:{
            name
        }
    })

    if(!category){
        
   
    const newCategory = await Category.create(
      {
        name,
        description,
      },
      {
        fields: ["name", "description"],
      }
    );
    if (newCategory) {
      res.json({
        message: "Category created successfully",
        data: newCategory,
      });
    }
}else{
    res.json({
        message: "Duplicate name",
        data: {},
    })
}
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}

export async function deleteCategory(req, res) {
  const { id } = req.params;

  try {
    const deleteRowCount = await Category.destroy({
      where: {
        id
      },
    });
    res.json({
      message: "Category Eliminated successfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
    });
  }
}
export async function editCategory(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const category = await Category.findOne({
        where: {
          id
        },
      });

      category.update({
        name,
        description
      });
      res.json({
        message: "Category updated successfully",
        data: category,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: {},
      });
    }
  }

