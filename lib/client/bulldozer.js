gtmBulldozer = {
  scriptIds: [],
  scriptSrcs: [],
  windowVars: [],

  addScriptIdToDrop: function(val) {
    gtmBulldozer.scriptIds.push(val);
  },

  addScriptSrcToDrop: function(val) {
    gtmBulldozer.scriptSrcs.push(val);
  },

  addWindowVarToDrop: function(val) {
    gtmBulldozer.windowVars.push(val);
  },

  bulldoze: function() {
    for (var i = 0; i < gtmBulldozer.scriptIds.length; i++) {
      var id = gtmBulldozer.scriptIds[i];
      $('script#' + id).remove();
    }

    for (var i = 0; i < gtmBulldozer.scriptSrcs.length; i++) {
      var src = gtmBulldozer.scriptSrcs[i];
      $('script[src*="' + src + '"]').remove();
    }

    for (var i = 0; i < gtmBulldozer.windowVars.length; i++) {
      var varName = gtmBulldozer.windowVars[i];
      delete window[varName];
    }

    gtmBulldozer.scriptIds = [];
    gtmBulldozer.scriptSrcs = [];
    gtmBulldozer.windowVars = [];
  }
};
