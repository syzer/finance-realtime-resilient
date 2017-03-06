# WAT

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
