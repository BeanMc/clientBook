/**
 * Created by CongNguyen on 5/9/2017.
 */

FlowRouter.route('/',{
   action:function (params, query) {
       BlazeLayout.render('layout', {nav:'nav',main: 'homePage', footer: 'footer'});
   },
    subscriptions: function(params, queryParams) {
        this.register('book', Meteor.subscribe('book',""));
        this.register('author', Meteor.subscribe('author'));
        this.register('category', Meteor.subscribe('category'));
        this.register('image', Meteor.subscribe('image'));
    }
});

FlowRouter.route('/details/:id',{
    action:function (params, query) {
        BlazeLayout.render('layout', {nav:'nav',main: 'details', footer: 'footer'});
    },
    subscriptions: function(params, queryParams) {
        this.register('book', Meteor.subscribe('book',""));
        this.register('author', Meteor.subscribe('author'));
        this.register('category', Meteor.subscribe('category'));
        this.register('image', Meteor.subscribe('image'));
    }
});