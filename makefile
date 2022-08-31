-include .env

SERVICE := SERVICE_ONE_URL=${SERVICE_ONE_URL} SERVICE_TWO_URL=${SERVICE_TWO_URL} 

all: 
	FC_ENABLE=1 FC_SETTINGS="./configs" FC_TEMPLATES="./configs/templates" ${SERVICE} krakend run -c "./krakend.json"

check: 
	FC_ENABLE=1 FC_SETTINGS="./configs" FC_TEMPLATES="./configs/templates" ${SERVICE} krakend check -t -d -c "./krakend.json"