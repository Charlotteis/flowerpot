import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitTheThing() {
      let p = this.get('store').createRecord('post', {content: $('textarea.content').val(), title:$('input.title').val()});
      p.save().then( () => {
        this.transitionTo('post', p);
      });
    }
  }
});
