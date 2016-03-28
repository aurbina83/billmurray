namespace app.Controllers {
  export class BillController {

    public posts: Array<app.i.IBill>;

    public rand = Math.floor(Math.random()* 9 + 1);

    constructor(private PostService: app.Services.PostService) {
        this.posts = PostService.getAll();
    }
  }

  angular.module('app').controller('BillController', BillController);
}
