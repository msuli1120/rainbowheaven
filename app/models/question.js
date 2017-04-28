import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  time: DS.attr(),
  answers: DS.hasMany('answer',{ async: true })
});
