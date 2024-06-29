const express = require('express');
const router = express.Router();
const controller = require('./controller');
// const authMiddleware = require('./authMiddleware.js');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

// router.route('/user').get(controller.user);
// router.route('/').get(authMiddleware, controller.getAll);


module.exports = router;