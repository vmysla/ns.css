'use strict';

var gulp       = require('gulp');
var less       = require('less');
var fs         = require("fs");


gulp.task('build', function(done) {
		
	function nsify(lib){
		/// @todo rewrite this with gulp steaming
		var css = fs.readFileSync('./lib/'+lib+'.css').toString();
		var nsless = '.ns.'+lib+' {\r\n\r\n'+css.replace(/(^|\n)/g,'\n    ')+'\r\n\r\n}';
		less.render(nsless, function (e, output) {
	  		fs.writeFile('./dist/ns-'+lib+'.less', nsless);
	  		fs.writeFile('./dist/ns-'+lib+'.css', output.css);
		});
	}
		
	/// @todo copy libraries from node modules and remove lib folder
	nsify('reset');
	nsify('sanitize');
	nsify('normalize');

});
