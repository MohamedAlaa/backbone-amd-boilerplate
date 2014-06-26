/*!
 * Bootstrap Grunt task for Glyphicons data generation
 * http://getbootstrap.com
 * Copyright 2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

var fs=require("fs");module.exports=function(t){var n=fs.readFileSync("less/glyphicons.less","utf8"),r=n.split("\n"),i=/^\.(glyphicon-[^\s]+)/,s="# This file is generated via Grunt task. **Do not edit directly.**\n# See the 'build-glyphicons-data' task in Gruntfile.js.\n\n",o="docs/_data/glyphicons.yml";for(var u=0,a=r.length;u<a;u++){var f=r[u].match(i);f!==null&&(s+="- "+f[1]+"\n")}fs.existsSync("docs/_data")||fs.mkdirSync("docs/_data");try{fs.writeFileSync(o,s)}catch(l){t.fail.warn(l)}t.log.writeln("File "+o.cyan+" created.")};