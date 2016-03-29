namespace app.Services {
    interface IPostResourceClass extends ng.resource.IResource<IPostResourceClass>, app.i.IBill {}
    interface IPostResource extends ng.resource.IResourceClass<IPostResourceClass> {
        update(params: Object, body: Object)
    }

    export class PostService {
        private PostResource: IPostResource;

        public getAll() {
            return this.PostResource.query();
        }

        public getPost(id: string) {
            return this.PostResource.get({id: id});
        }

        public create(post: app.i.IBill) {
            return this.PostResource.save(post).$promise;
        }

        public update(post: app.i.IBill) {
            return this.PostResource.update({id: post._id}, {title: post.title, imgUrl: post.imgUrl, tags: post.tags}).$promise ;
        }

        public delete(id: any) {
            return this.PostResource.delete({id: id}).$promise;
        }
        constructor(private $resource: ng.resource.IResourceService) {
            this.PostResource = <IPostResource>$resource('/api/v1/posts/:id', null,
            {
                'update': {method: 'PUT'}
            });
        }
    }
    angular.module('app').service('PostService', PostService);
}
