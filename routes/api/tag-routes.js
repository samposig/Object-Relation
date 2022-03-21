const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findOne({
    include: [
     {model: ProductTag,
    attributes: 'produc_id',
    }

    ]
  }) .then(cat_data => {
    if(!cat_data) {
      return
     } res.json(cat_data)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  
  Tag.findOne({
    include: [
     {model: ProductTag,
    attributes: 'product_id',
    }

    ]
  }) .then(cat_data => {
    if(!cat_data) {
      return
     } res.json(cat_data)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  
  Tag.create(
    req.body,
    {
      product_id: req.body.product_id,

  }) .then(cat_data => {
    res.json(cat_data)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
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
  // delete on tag by its `id` value
  Tag.destroy(
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
