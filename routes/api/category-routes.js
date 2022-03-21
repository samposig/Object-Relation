const router = require('express').Router();

const { Category, Product } = require('../../models');
const { restore } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
     {model: Product,
    attributes: ['product_name'],
    }

    ]
  }) .then(cat_data => {
    if(!cat_data) {
      return
     } res.json(cat_data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [
     {model: Product,
    attributes: 'product_name',
    }

    ]
  }) .then(cat_data => {
    if(!cat_data) {
      return
     } res.json(cat_data)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(
    req.body,
    {
      category_name: req.body.category_name,

  }) .then(cat_data => {
    res.json(cat_data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {
        id: req.params.id,
      } 
    }
  ) .then(cat_data => {
    res.json(cat_data)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    req.body,
    {
      where: {
        id: req.params.id,
      } 
    }
  ) .then(cat_data => {
    res.json(cat_data)
  })
});

module.exports = router;
