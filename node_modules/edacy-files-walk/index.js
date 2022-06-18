const fs = require('fs');

const walk = function(dir)
{
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory())
          results = results.concat(walk(file)) ;
        else
        results.push(file);
    });
    return results ;
};

exports.walk = walk;
