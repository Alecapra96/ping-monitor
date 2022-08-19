var ping = require('ping');

var host2 = ['192.168.12.24', '192.168.12.29','192.168.13.118','192.168.13.120','192.168.13.185','192.168.13.155','192.168.13.126','192.168.13.110','192.168.13.178','192.168.13.113','192.168.13.176','192.168.13.100','192.168.12.26','192.168.12.29','192.168.13.121','192.168.12.129'];
var frequency = 10000;

host2.forEach(function(host){
    setInterval(function() {
        ping.sys.probe(host, function(active){
            var info = active ? 'IP ' + host + ' = Active' : 'IP ' + host + ' SE CAYO!!';
            if (info.indexOf(' SE CAYO!!') > -1){
            console.log("\x1b[5m", "\x1b[37m", "\x1b[41m", info, "\x1b[0m");
            }
// ______

// ______
        });
    }, frequency);
});









