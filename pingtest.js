var ping = require('ping');
var Table = require('easy-table')
console.clear();
var host2 = [
    { ip: "192.168.12.24", desc: 'Remota FSU', status: "ONLINE"},
    { ip: "192.168.12.29", desc: 'Remota FSU', status: "ONLINE"},
    { ip: "192.168.13.118", desc: 'Certificados', status: "ONLINE"},
    { ip: "192.168.13.120", desc: 'Certificados', status: "ONLINE"},
    { ip: "192.168.13.185", desc: 'Certificados', status: "ONLINE"},
    { ip: "192.168.13.155", desc: 'Faro scene', status: "ONLINE"},
    { ip: "192.168.13.126", desc: 'Remota (Falla bios)', status: "ONLINE"},
    { ip: "192.168.13.110", desc: 'Remota Procesos', status: "ONLINE"},
    { ip: "192.168.13.113", desc: 'Remota', status: "ONLINE"},
    { ip: "192.168.13.176", desc: 'Remota', status: "ONLINE"},
    { ip: "192.168.13.100", desc: 'Remota', status: "ONLINE"},
    { ip: "192.168.12.26", desc: 'Bejerman', status: "ONLINE"},
    { ip: "192.168.13.121", desc: 'Remota', status: "ONLINE"},
    { ip: "192.168.13.145", desc: 'Remota externos', status: "ONLINE"},
  ]
var frequency = 10000;
//hacer de host un array y poner la ip en {0} y el nombre de la pc en {1} ubicacion en {2}
// console.log(host2[0].ip)


host2.forEach(function(host){ 
    let count = 0 ;
    // console.log(host.ip)
    let countConsoleOutput = 0;
    setInterval(function() {
ping.sys.probe( host.ip , function(isAlive) {

    // announce contact status
    var info = (isAlive?host.ip + " contact":host.ip +" contact:lost")
    
    if (!isAlive) {
        // host.status = "OFFLINE"

        count++
        if (count === 3){
            if (countConsoleOutput < 1){
                // host.status ="\x1b[5m", "\x1b[37m", "\x1b[41m", info, "\x1b[0m";
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
setInterval(reloadTable, 10000);
function reloadTable(){
    console.clear();
console.log(Table.print(host2))
}

  
//   data.forEach(function(remota) {
//     t.cell('Product Id', remota.ip)
//     t.cell('Description', remota.desc)
//     t.cell('Price, USD', remota.status, Table.number(2))
//     t.newRow()
//   })
  
//   console.log(Table.print(data))

//   console.log(t.toString())