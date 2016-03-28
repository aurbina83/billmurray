namespace app.Controllers {
    export class DetailController {
        public post: app.i.IBill;

        public deletePost(){
            this.PostService.delete(this.post._id).then((res) => {
                this.$state.go('Bill');
            })
        }

        constructor(
            private PostService: app.Services.PostService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ){
            this.post = PostService.getPost($stateParams['id']);
        }
    }
    angular.module('app').controller('DetailController', DetailController);
}
