import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    questionForm: false,
    showForm(){
      this.set('questionForm',true);
    },
    ask(){
      var date = new Date();
      var time = date.toLocaleString();
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        location: this.get('location'),
        description: this.get('description'),
        time: time
      };
      this.set('questionForm', false);
      this.sendAction('ask',params);
      this.set('name','');
      this.set('title','');
      this.set('location','');
      this.set('description','');
    },
  }
});
