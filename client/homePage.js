/**
 * Created by CongNguyen on 5/10/2017.
 */

Template.homePage.helpers({
   bestRead:function () {
       return Books.find().fetch().map(function (item) {
           return item;
       });
   },
    active:function (index) {
      if(index==0){
          return "active";
      }
    },
    author:function (id) {
        return Author.findOne(id).name;
    },
    images: function (id) {
       console.log(Image.find(id).fetch());
        return Image.find(); // Where Images is an FS.Collection instance
    }


});

