-include .env

SERVICE := SERVICE_ONE_URL=${SERVICE_ONE_URL} SERVICE_TWO_URL=${SERVICE_TWO_URL} 

all: 
	helm template . --output-dir .
	krakend run -d -c "./krakend/templates/krakend.yaml"

check: 
	helm template . --debug --output-dir .
	krakend check -t -d -c "./krakend/templates/krakend.yaml"