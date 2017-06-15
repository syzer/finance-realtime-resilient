# WAT

[![Greenkeeper badge](https://badges.greenkeeper.io/syzer/finance-realtime-resilient.svg)](https://greenkeeper.io/)

example of load resilience in network traffic

# How

```sh
npm i
```

start 3 servers
```sh
nodemon -w ./ -x 'server2/bin/www'
nodemon -w ./ -x 'server1/bin/www'
nodemon -w ./ -x 'node index'
```
