/**
 * Created by CongNguyen on 5/10/2017.
 */

Meteor.startup(function () {
    if (Meteor.isClient) {
        Session.set('shopp', []);
    }
});
Template.homePage.helpers({
    bestRead: function () {
        return Books.find().fetch().map(function (item) {
            return item;
        });
    },
    active: function (index) {
        if (index == 0) {
            return "active";
        }
    },
    author: function (id) {
        if (Author.findOne(id)) {
            return Author.findOne(id).name;
        }
    },

    category: function (id) {

        return Category.find().fetch();
    },

    getbook: function (id, index) {
        if (Books.find().fetch()) {
            var b = [];
            var a = ((Books.find().fetch().map(function (item) {
                if (item.category.indexOf(id) !== -1) {
                    return item;
                }
            })).remove(undefined));
            var count = Math.floor((a.count()) / 6) + 1;
            for (var i = 0; i < count; i++) {
                b[i] = [];
                // b[i].push();
                for (var j = 0; j < (i + 6); j++) {
                    if (a[j]) {
                        b[i].push(a[j]);
                    }
                }
            }
            ;
            return b;
        }
    },


});

