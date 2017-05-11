console.log(Books.findOne());

Meteor.methods({
    getbook: function () {
        return Books.find().fetch();
    },

})

Meteor.publish('book', function (id) {
    return Books.find();
});
Meteor.publish('author', function (id) {
    return Author.find();
});
Meteor.publish('category', function (idd) {
    return Category.find();
});

Meteor.publish('image', function (id) {
    return Image.find();
});


