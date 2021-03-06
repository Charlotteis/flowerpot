import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  rottenCoder: Ember.inject.service(),
  visibleContent: Ember.computed.oneWay('model.encodedContent'),
  actions: {
    decodeMe() {
      var decodedContent = this.get('rottenCoder').decode(this.get('model.encodedContent')).autoLink({
        target: "_blank", rel: "nofollow"}
      );
      this.set('visibleContent', decodedContent);
      this.$('.post-content').show();
      this.$('.button-decode').hide();
      this.set('isDecoded', true);
    },
    createReport(props) {
      this.get('store').createRecord('abuse-report', {
        extraContext: props.extraContext,
        post: this.get('model'),
        timestamp: new Date().getTime()
      }).save();
      this.set('reportSubmitted', true);
    }
  }
});
