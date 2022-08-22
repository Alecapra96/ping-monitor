var ping = require('ping');
var Table = require('easy-table');
const showBanner = require('node-banner');


console.clear();
(async () => {
    await showBanner('Ping monitor', 'A tool by @alecapra96');
})();
var host2 = [
    { ip: "XXX.XXX.XXX.XXX", desc: 'DESCRIPCION!', status: "ONLINE"},
    { ip: "XXX.XXX.XXX.XXX", desc: 'DESCRIPCION!', status: "ONLINE"},
    { ip: "XXX.XXX.XXX.XXX", desc: 'DESCRIPCION!', status: "ONLINE"},
    { ip: "XXX.XXX.XXX.XXX", desc: 'DESCRIPCION!', status: "ONLINE"},
    { ip: "XXX.XXX.XXX.XXX", desc: 'DESCRIPCION!', status: "ONLINE"},
  ]
var frequency = 5000;

host2.forEach(function(host){ 
    let count = 0 ;
    let countConsoleOutput = 0;
    setInterval(function() {
ping.sys.probe( host.ip , function(isAlive) {

    var info = (isAlive?host.ip + " contact":host.ip +" contact:lost")
    
    if (!isAlive) {
      

        count++
        if (count === 3){
            if (countConsoleOutput < 1){
                host.status = ('\x1b[91m \x1b[37m \x1b[41m OFFLINE \x1b[0m');
                countConsoleOutput = 2;
            
            }
        }else if(count > 3 ){
            count = 0 ;
        }
    }
    if(isAlive){

        if (countConsoleOutput > 1){
            host.status = ('\x1b[32m ONLINE \x1b[0m');
            countConsoleOutput = 0;
        }
    }
    });
}, frequency);

});
setInterval(reloadTable, 5000);
function reloadTable(){

    console.clear();
 
    console.log(Table.print(host2))
}
