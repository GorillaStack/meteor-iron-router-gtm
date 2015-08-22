getSettingsNamespace = function() {
  return Meteor.settings && Meteor.settings.public &&
                 Meteor.settings.public.gtm || {};
};

getGoogleTagManagerId = function() {
  var settings = getSettingsNamespace();
  return settings.id;
};

Template.googleTagManager.helpers({
  hasGTMId: function() {
    return typeof getGoogleTagManagerId() !== 'undefined';
  },

  getGTMId: function() {
    return getGoogleTagManagerId();
  }
});
