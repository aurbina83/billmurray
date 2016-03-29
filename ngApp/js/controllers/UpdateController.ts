namespace app.Controllers {
    export class UpdateController {
        public post: app.i.IBill;

        public updateBill(){
            this.PostService.update(this.post).then((res) => {
                this.$state.go('Details', { id: this.post._id });
            });
        }

        constructor(
            private PostService: app.Services.PostService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ){
                this.post = PostService.getPost($stateParams['id']);
        }
    }
    angular.module('app').controller('UpdateController', UpdateController);
}
