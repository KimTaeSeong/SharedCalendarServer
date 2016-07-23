var gcm = require('node-gcm');
var fs = require('fs');

var message = new gcm.Message();

var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        title: 'saltfactory GCM demo',
        message: 'Googl Cloud Messaging 테스',
        custom_key1: 'custom data1',
        custom_key2: 'custom data2'
    }
});

var server_api_key = 'AIzaSyDim0Xy5j9Lagqr_rZf7BvCX24LUPmcbDY';
var sender = new gcm.Sender(server_api_key);
var registrationIds = [];

var token ='e8KC9vWkigI:APA91bERhbp7FS-6dK2Z2dUhIrnfWcxEFH4RGyzQqn8O-X9ZMyD75spo9U_yJwVLcnV9a8MvIYahXLxhd69XvgamlNB_eBsy6QcWzyJlQIjWo_uWCdr-ZLwo1WkrLkbueGdcwfS8c-O3';
registrationIds.push(token);

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});
