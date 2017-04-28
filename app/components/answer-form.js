import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
    iKnow(){
      this.set('answerForm',true);
    },
    answer(){
      var date = new Date();
      var time = date.toLocaleString();
      var params = {
        name: this.get('answerName'),
        location: this.get('answerLocation'),
        description: this.get('answerDescription'),
        time: time,
        question: this.get('question')
      };
      this.set('answerForm', false);
      this.sendAction('answer', params);
      this.set('name','');
      this.set('location','');
      this.set('description','');
    },
  }
});
