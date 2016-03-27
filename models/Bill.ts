import * as mongoose from 'mongoose';

export interface IPostModel extends app.i.IBill, mongoose.Document{};

let blogSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true},
    title: {type: String, default: 'Another great Bill Murray Moment!'},
    dateCreated: {type: Number},
    tags: {type: String}
});

export let Post = mongoose.model<IPostModel>('Post', blogSchema);
