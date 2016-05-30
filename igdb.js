
module.exports = {

    // setup options to search for games released on a particular date
    assembleOptions : function (key, release_date) {

        var options = {
            host: 'www.igdb.com',
            path: this.pathReleasedDate(release_date),
            port: '443',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token token="' + key + '"'
            }
        };
        return options;
    },

    pathReleasedDate : function(release_date) {
        return '/api/v1/games/search/?filters[release_date_eq]='+release_date;
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




