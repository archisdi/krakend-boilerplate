all: 
	krakend run -c "./apis.json"

build:
	node ./index.js

check: 
	krakend check -t -d -c "./apis.json"