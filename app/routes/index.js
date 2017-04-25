import Ember from 'ember';
var articles = [{
  id: 1,
  title: "Best Article Ever",
  author: "Authory McAuthorface",
  text: "This is the greatest article ever. The end."
}]

export default Ember.Route.extend({
  model() {
    return articles;
  }
});
