var ping = require('ping');
var Table = require('easy-table');
const showBanner = require('node-banner');


console.clear();
const P = ['\\', '|', '/', '-'];
let x = 0;
const loader = setInterval(() => {
  process.stdout.write(`\r${P[x++]}`);
  x %= P.length;
}, 250);

setTimeout(() => {
  clearInterval(loader);
}, 5000);
(async () => {
    await showBanner('Ping monitor', 'A tool by @alecapra96');
    console.log("")
    console.log("Wait 10 second when the loading end to see the pings")


})();

var host2 = [
    { ip: "192.168.12.157", Description: 'DESCRIPCION!', status: ('\x1b[32m ONLINE \x1b[0m')},
    { ip: "XXX.XXX.XXX.XXX", Description: 'DESCRIPCION!', status: ('\x1b[32m ONLINE \x1b[0m')},
    { ip: "XXX.XXX.XXX.XXX", Description: 'DESCRIPCION!', status: ('\x1b[32m ONLINE \x1b[0m')},
    { ip: "XXX.XXX.XXX.XXX", Description: 'DESCRIPCION!', status: ('\x1b[32m ONLINE \x1b[0m')},
    { ip: "XXX.XXX.XXX.XXX", Description: 'DESCRIPCION!', status: ('\x1b[32m ONLINE \x1b[0m')},
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
                let date_ob = new Date();
                let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                let date = ("0" + date_ob.getDate()).slice(-2);

                let hours = date_ob.getHours();
                let minutes = date_ob.getMinutes();
                let dateOFFLINE = ( hours + ":" + minutes + " - " + date+ "/" + month  );


                host.status = ('\x1b[91m \x1b[37m \x1b[41m OFFLINE \x1b[0m') + " at "+ dateOFFLINE;
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
