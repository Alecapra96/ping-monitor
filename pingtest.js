var ping = require('ping');
console.clear();
var host2 = ['192.168.12.105','192.168.12.153','192.168.12.24', '192.168.12.29','192.168.13.118','192.168.13.120','192.168.13.185','192.168.13.155','192.168.13.126','192.168.13.110','192.168.13.178','192.168.13.113','192.168.13.176','192.168.13.100','192.168.12.26','192.168.12.29','192.168.13.121','192.168.12.129'];
var frequency = 1000;
//hacer de host un array y poner la ip en {0} y el nombre de la pc en {1} ubicacion en {2}

host2.forEach(function(host){ // aca seria host2.forEach(function(host{0}}
    let count = 0 ;
    let countConsoleOutput = 0;
    setInterval(function() {

ping.sys.probe( host , function(isAlive) {

    // announce contact status
    var info = (isAlive?host + " contact":host +" contact:lost")
    
    if (!isAlive) {
        count++
        if (count === 3){
            if (countConsoleOutput < 1){
                let consoleOutput = console.log("\x1b[5m", "\x1b[37m", "\x1b[41m", info, "\x1b[0m");
                consoleOutput;
                countConsoleOutput = 2;

            
            }
        }else if(count > 3 ){
            count = 0 ;
        }
    }
    if(isAlive){

        if (countConsoleOutput > 1){
        console.log(info + " esta de vueltas online")
        countConsoleOutput = 0;
        }
    }
    });
}, frequency);
});