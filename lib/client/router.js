Router.onRun(function () {
  if (shouldSendVirtualPageview(Router.options, this.route.options)) {
    gtmBulldozer.bulldoze();
    dataLayer.push({
      event: 'VirtualPageview',
      virtualPageURL: this.url
    });
  }
  this.next();
});

function shouldSendVirtualPageview(routerOptions, routeOptions) {
  if (typeof (window.dataLayer) === 'undefined') {
    return false;
  }

  if (routeOptions && typeof routeOptions.trackPageView !== 'undefined') {
    return !!routeOptions.trackPageView;
  }

  return !!routerOptions && !!routerOptions.trackPageView;
};
