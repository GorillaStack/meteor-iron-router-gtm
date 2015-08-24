# gorillastack:iron-router-gtm

Having trouble installing google tag manager?  Even worse, tracking pageviews not working because you are awesome enough to have a single page application?  Hopefully this package helps you with this problem.

Similar to `reywood:iron-router-ga`, this package allows you to provide your GTM ID via `Meteor.settings` and fires virtual pageviews by sending messages to google tag manager's `dataLayer` from iron router's `onRun` hook for each route you have configured for tracking!

When dealing with a single page application, often you do not want a script available on all pages.  This can be challenging, as navigating to new pages does not trigger a refresh of the dom and such, we cannot trigger google tag manager, to add/remove the tag for the current route.  We have added a `gtmBulldozer` to the window, such that when adding a custom script via google tag manager, you can declare to this package to wipe any scripts or variables from the dom/window.

### Installation

#### 1. Provide your google tag manager id

Add the following to your [Meteor.settings](http://docs.meteor.com/#/full/meteor_settings)

```json
{
    "public": {
        "gtm": {
            "id": "GTM-XXXXXX"
        }
    }
}
```
---

#### 2. Configure which routes to track

##### All routes

```javascript
Router.configure({
  trackPageView: true
});
```
##### All routes with individual routes disabled

```javascript
Router.configure({
  trackPageView: true
});

Router.route("notMe", {
  trackPageView: false
});
```
##### Individual routes

```javascript

Router.route("justMe", {
  trackPageView: true
});

Router.map(function() {
  this.route("andMe", {
    trackPageView: true
  });
});
```
---

#### 3. Congfigure GTM to track virtual pageviews

This is the part that connects the URL that this package sends to GTM to whichever tags you want!

##### 3.a) Configure variable

This is where we name the variable coming from this package and give it a name that makes sense within your Google Tag Manager context.  We have named the variable `virtualPageURL` on our side.

![Configure variable](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/configure_variable.png)

##### 3.b) Configure trigger on variable

![Configure trigger on variable](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/configure_trigger1.png)

##### 3.c) Add trigger to any tag

![configure tag to fire on event](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/configure_tag_to_fire_on_event.png)

Now kick your GTM into debug mode and test whether it's firing VirtualPageview on all the pages you expect!

---

#### 4. Configure Google Analytics/Supported Plugins to pass the virtualPageURL

Within your tag configuration, select 'more settings' and configure your 'fields to set', such that the `location` variable is set with your `virtualPageUrl`.

![configure fields to set](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/fields_to_set.png)

---

#### 5. Declare settings for custom tags

To guarantee that we clear out page state when switching between routes, declare any javascript script ids or window scoped variables that you want `gorillastack:iron-router-gtm` to clear for you before sending google tag manager a virtual pageview.

This example is for segment.io.

![configure fields to set](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/bulldozer.png)
