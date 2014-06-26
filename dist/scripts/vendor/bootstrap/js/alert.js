/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function(e){function r(t){return this.each(function(){var r=e(this),i=r.data("bs.alert");i||r.data("bs.alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})}var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.VERSION="3.2.0",n.prototype.close=function(t){function s(){i.detach().trigger("closed.bs.alert").remove()}var n=e(this),r=n.attr("data-target");r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var i=e(r);t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close.bs.alert"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()};var i=e.fn.alert;e.fn.alert=r,e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=i,this},e(document).on("click.bs.alert.data-api",t,n.prototype.close)}(jQuery);