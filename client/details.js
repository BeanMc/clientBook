/**
 * Created by CongNguyen on 5/17/2017.
 */


Template.details.helpers({
    pro:function () {
        return Books.findOne(FlowRouter.getParam("id"));
    },
    author:function (id) {
        if(Author.findOne(id)){
            return Author.findOne(id).name;
        }
    },
    aboutAuthor:function (id) {

        if(Author.findOne(id)){
            return Author.findOne(id).about;
        }
    },

});
