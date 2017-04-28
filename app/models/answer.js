import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  time: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
