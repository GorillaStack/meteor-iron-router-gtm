# gorillastack:iron-router-gtm

Having trouble installing google tag manager?  Even worse, tracking pageviews not working because you are awesome enough to have a single page application?  Hopefully this package helps you with this problem.

Similar to `reywood:iron-router-ga`, this package allows you to provide your GTM ID via `Meteor.settings` and fires virtual pageviews by sending messages to google tag manager's `dataLayer` from iron router's `onRun` hook for each route you have configured for tracking!

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

![Configure trigger on variable](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/configure_trigger.png)

##### 3.c) Add trigger to any tag

![configure tag to fire on event](https://s3-ap-southeast-2.amazonaws.com/gorillastack-random-public/configure_tag_to_fire_on_event.png)

Now kick your GTM into debug mode and test whether it's firing VirtualPageview on all the pages you expect!
