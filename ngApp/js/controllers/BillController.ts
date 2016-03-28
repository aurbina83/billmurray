namespace app.Controllers {
  export class BillController {

    public posts: Array<app.i.IBill>;


    constructor(private PostService: app.Services.PostService) {
        this.posts = PostService.getAll();
    }
  }

  angular.module('app').controller('BillController', BillController);
}
