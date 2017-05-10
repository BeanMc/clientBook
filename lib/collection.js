/**
 * Created by CongNguyen on 5/9/2017.
 */

Books=new Mongo.Collection('books');
Author=new Mongo.Collection('author');
Category=new Mongo.Collection('category');
Image = new FS.Collection('image', {
    stores: [new FS.Store.GridFS('image', {})]
});
Image.allow({
    download: function(userId, fileObj) {
        return true
    }
})


