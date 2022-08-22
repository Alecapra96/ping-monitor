A tool to monitor local IPs thanks to the node JS ping module

To use this tool you will need NODE JS

Also the ping and easy-table modules
you can install with this commands : 
npm i ping
npm i easy-table


In the host2 object, you can put IP, description and status.
The IP and STATUS fields are essential, you can add other fields as you like.

With the frequency variable you can change the time for which the machines are pinged
A machine that has never been turned off since the script was run will appear as ONLINE without color, if it is turned off it will be red and if it is turned on again it will be green
