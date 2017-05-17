/**
 * Created by CongNguyen on 5/17/2017.
 */


//add-to-basket

Template.feature.events({
    'click .add-to-basket':function (e, t) {
        console.log(($(e.target)).attr('data-isbn'));
        var b=Session.get('shopp');
        b.push(($(e.target)).attr('data-isbn'));
        Session.set('shopp',b);
        console.log(Session.get('shopp'));
    }
});

Template.feature.helpers({
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
    images: function (id) {
        return Image.find(); // Where Images is an FS.Collection instance
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
    compa: function (index) {
        if (index < 6) {
            return true;
        }
    },
    fomat: function (item) {
        // return item.format('{Dow}  {dd}/{MM}/{yy}');
        return item;
    }
});