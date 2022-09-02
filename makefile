-include .env

SERVICE := SERVICE_ONE_URL=${SERVICE_ONE_URL} SERVICE_TWO_URL=${SERVICE_TWO_URL} 

all: 
	make check
	krakend run -d -c "./api.yaml"

build: 
	helm template . | cat - > api.yaml

check: 
	make build
	krakend check -t -d -c "./api.yaml"