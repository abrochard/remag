
module.exports = {

    // setup options to search for games released on a particular date
    assembleOptions : function (key, release_date) {

        var options = {
            host: 'igdbcom-internet-game-database-v1.p.mashape.com',
            path: this.pathReleasedDate(release_date),
            port: '443',
            headers: {
                'Accept': 'application/json',
                'X-Mashape-Key': key
            }
        };
        return options;
    },

    pathReleasedDate : function(release_date) {
        return '/games/?fields=*&order=name:asc&filter[release_dates.date][eq]=' + release_date;
    },

    callback : function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
        });

        return str;
    }

};
