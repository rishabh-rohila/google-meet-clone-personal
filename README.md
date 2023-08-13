# Setup the Project (Google Meet Clone)
1. install redis form project files
 1.1. also add to path while installing
2. open redis download folder in program file
3. run redis-cli.exe and follow this -
 
   127.0.0.1:6379> set name rishi
   OK
   127.0.0.1:6379> get name
   "rishi"
   127.0.0.1:6379> exit
 
4. Clone this repo in vs code
5. estable the environment for this project with required dependecies ( i have added node_module or env file for your reference)
6. go into client floder in terminal -
 5.1 npm init -y
  5.2 npm start
8. go into app folder in another terminal -
 6.1 npm init -y
  6.2 npm start
9. go into main folder in new terminal -
 7.1 type => redis-server
 7.2 it will lok like this -
   PS C:\Users\Rishabh Rohila\Downloads\google-meet-clone> redis-server
[18396] 13 Aug 13:14:11.081 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
[18396] 13 Aug 13:14:11.081 # Redis version=5.0.14.1, bits=64, commit=ec77f72d, modified=0, pid=18396, just started
[18396] 13 Aug 13:14:11.081 # Warning: no config file specified, using the default config. In order to specify a config file use c:\program files\redis\redis-server.exe /path/to/redis.conf
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 5.0.14.1 (ec77f72d/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 18396
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           http://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

[18396] 13 Aug 13:14:11.093 # Server initialized
[18396] 13 Aug 13:14:11.095 * DB loaded from disk: 0.002 seconds
[18396] 13 Aug 13:14:11.095 * Ready to accept connections

Note : - This Project is work but- chat functiionality or video streaming is not working properly .. unable to understad the errrors in consol page ...
no error is present in vs code terminal page.
