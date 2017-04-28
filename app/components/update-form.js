import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    show(){
      this.set('updateForm',true);
    },
    confirmUpdate(question){
      console.log(question);
      var params = {
        title: this.get('title'),
        description: this.get('description')
      };
      this.set('updateForm',false);
      this.sendAction('confirmUpdate', question, params);
      this.set('title','');
      this.set('description','');
    }
  }
});
