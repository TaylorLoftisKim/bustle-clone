import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

  saveArticle() {
    var params = {
      title: this.get('title'),
      author: this.get('author'),
      text: this.get('text'),
      image: this.get('image'),
    };
    this.sendAction('saveArticle', params);
    }
  }
});
