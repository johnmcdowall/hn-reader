import DS from 'ember-data';

export default DS.Model.extend({
  tag:       DS.attr('string'),
  title:     DS.attr('string'),
  url:       DS.attr('string'),
  source:    DS.attr('string'),
  body:      DS.attr('string'),
  points:    DS.attr('number'),
  submitted: DS.attr('string'),
  submitter: DS.attr('string'),
  comments:  DS.hasMany('comment'),
  commentsCount: DS.attr('number'),

  isInternal: function() {
    var url = this.get('url');
    return url && url.indexOf('https://news.ycombinator.com/item') === 0;
  }.property('url'),

  votable: function() {
    return this.get('points') !== null;
  }.property('points'),

  commentable: function() {
    return this.get('commentsCount') !== null;
  }.property('commentsCount')
});
