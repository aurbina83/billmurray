namespace app.Controllers {
    export class CreateController {
        public post: app.i.IBill;

        public createBill() {
            this.PostService.create(this.post).then((res) => {
                this.$state.go('Bill');
            })
        }

        constructor(private PostService: app.Services.PostService, private $state: ng.ui.IStateService) {}
    }
    angular.module('app').controller('CreateController', CreateController);
}
