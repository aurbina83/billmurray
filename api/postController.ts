import * as express from 'express';
import {IPostModel} from'../models/Bill';
import * as mongoose from 'mongoose';

export function controller (Post: mongoose.Model<IPostModel>) {
    return {
        getAll: getAll,
        findOne: findOne,
        create: create,
        update: update,
        remove: remove
    }

    function getAll (req: express.Request, res: express.Response, next: Function) {
        Post.find ({})
            .exec((err, posts) => {
                if(err) return next(err);
                res.json(posts);
            });
    }

    function findOne (req: express.Request, res: express.Response, next: Function) {
        Post.findOne({_id: req.params.id})
            .exec((err, data) => {
                if(err) return next(err);
                res.json(data);
            });
    }

    function create (req: express.Request, res: express.Response, next: Function) {
        req.body.dateCreated = Date.now();
        let p = new Post(req.body);
        p.save((err, post: IPostModel) => {
            if(err) return next(err);
            res.json(post);
        });
    }

    function update (req: express.Request, res: express.Response, next: Function) {
        Post.update({_id: req.params.id}, req.body,(err, numRows) => {
            if(err) return next(err);
            res.json({message: "Bill is pleased!"});
        });
    }

    function remove (req: express.Request, res: express.Response, next: Function) {
        Post.remove({_id: req.params.id}, (err) => {
            if(err) return next(err);
            res.json({message: 'Goodbye Bill! :('});
        });
    }
}
