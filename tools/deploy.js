
var ghpages = require('gh-pages');

export default async function() {
    ghpages.publish('build', {
        branch: 'master',
        repo: 'git@github.com:carlhong/home_site.git'
    }, function(res) {
        console.log(res)
    });
};
