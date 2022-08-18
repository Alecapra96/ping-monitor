var ping = require('ping');

var host2 = ['192.168.12.24', '192.168.12.29'];

var frequency = 1000; //1 second

host2.forEach(function(host){
    setInterval(function() {
        ping.sys.probe(host, function(active){
            var info = active ? 'IP ' + host + ' = Active' : 'IP ' + host + ' = Non-Active';
            if (info.indexOf(' = Non-Active') > -1){
            console.log(info);
            }
        });
    }, frequency);
});







