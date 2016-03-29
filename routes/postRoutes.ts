import * as express from 'express';
import {controller} from '../api/postController';
import {Post} from '../models/Bill';

const ctrl = controller(Post);
const router = express.Router();

//Base Route = api/v1/posts


//GET: api/v1/posts
router.get('/', ctrl.getAll);

//GET: api/v1/posts/:id
router.get('/:id', ctrl.findOne);

//DELETE: api/v1/posts/:id
router.delete('/:id', ctrl.remove);

//POST: api/v1/posts
router.post('/', ctrl.create);

//PUT: api/v1/posts/:id
router.put('/:id', ctrl.update);

export = router;
