all: 
	FC_ENABLE=1 FC_SETTINGS="./configs" krakend run -c "./api.json"

check: 
	FC_ENABLE=1 FC_SETTINGS="./configs" krakend check -t -d -c "./api.json"