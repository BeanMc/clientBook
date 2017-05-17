/**
 * Created by CongNguyen on 5/17/2017.
 */
Template.nav.helpers({
    shopping:function () {
        if(Session.get('shopp')){
            var price=0;
            var count=Session.get('shopp').count();
            Session.get('shopp').forEach(function (item) {
                price+=(Books.findOne(item).price);
            });
            return {price:price,count:count};
        }
    }
});

