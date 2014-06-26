/*!
 * Bootstrap Grunt task for generating raw-files.min.js for the Customizer
 * http://getbootstrap.com
 * Copyright 2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

function getFiles(e){var t={},n=e==="less",r=n?"/**/*":"/*";return glob.sync(e+r).filter(function(t){return e==="fonts"?!0:(new RegExp("\\."+e+"$")).test(t)}).forEach(function(n){var r=n.replace(/^[^/]+\//,"");t[r]=e==="fonts"?btoa(fs.readFileSync(n)):fs.readFileSync(n,"utf8")}),"var __"+e+" = "+JSON.stringify(t)+"\n"}var fs=require("fs"),btoa=require("btoa"),glob=require("glob");module.exports=function(t,n){n||(n="");var r=["js","less","fonts"],i=n+r.map(getFiles).reduce(function(e,t){return e+t},""),s="docs/assets/js/raw-files.min.js";try{fs.writeFileSync(s,i)}catch(o){t.fail.warn(o)}t.log.writeln("File "+s.cyan+" created.")};