namespace app.Services {
    interface IPostResourceClass extends ng.resource.IResource<IPostResourceClass>, app.i.IBill {}
    interface IPostResource extends ng.resource.IResourceClass<IPostResourceClass> {}

    export class PostService {
        private PostResource: IPostResource;

        public getAll() {
            return this.PostResource.query();
        }

        public getPost(id: any) {
            return this.PostResource.get({id: id});
        }

        public create(post: app.i.IBill) {
            return this.PostResource.save(post).$promise;
        }

        // public update(post) {
        //     return this.PostResource.update({id: post._id});
        // }

        public delete(id: any) {
            return this.PostResource.delete({id: id}).$promise;
        }
        constructor(private $resource: ng.resource.IResourceService) {
            this.PostResource = <IPostResource>$resource('/api/v1/posts/:id');
        }
    }
    angular.module('app').service('PostService', PostService);
}
