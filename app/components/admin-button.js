import Ember from 'ember';

export default Ember.Component.extend({
  isLinkShowing: false,
  actions: {
  linkShow: function() {
    this.set('isLinkShowing', true);
    }
  }
});
