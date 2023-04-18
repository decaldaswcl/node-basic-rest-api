# BASIC REST API

Basic API to query, change, delete product data of marketplace using node.js with MySQL database.

## Requeriments

Node.js version 18 or above
MySQL workbench 8.0 or above


## How to install

1. Clone the repository:
```sh
git clone https://github.com/decaldaswcl/node-basic-rest-api.git
```

2. Install dependencies :
```sh
cd node-basic-rest-api

npm install
```
3. Rename environment file:
```sh
ren environment_exemple .env
```
4. Set environment variables:

Open the .env file and change the fields with the necessary.
```js
    PORT=//put the port that the server will run the application
    DB_HOST=//database host
    DB_PORT=//database port 
    DB_USER=//database user 
    DB_PASS=//password database
    DB_NAME=//database name
```

## How to run

Run command 
```sh
    node index.js
```


##  Crate Request 


Exemple Request
```ssh
HTTP POST http://localhost/api/products
```
Body
```json
    {		
		"name": "Monitor 24 G520 ",
		"description": "Monitor 120Hz 2xHDMI",
		"partnumber": "582-FDRT",
		"brand": "Sharp",
		"type": "Monitor",
		"price": 522.00
	}   
```

Exemple Response
```json
    {
	"fieldCount": 0,
	"affectedRows": 1,
	"insertId": 2,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "",
	"protocol41": true,
	"changedRows": 0
    }	
```


##  Consult All Request 


Exemple Request
```ssh
HTTP GET http://localhost/api/products
```

Exemple Response
```json    
	{
		"id": 1,
		"name": "Mouse Xtreme B200",
		"description": "Mouse wireless black ",
		"partnumber": "554-SDF",
		"brand": "Logitech",
		"type": "Mouse",
		"price": 56.2
	}
```


##  Find by Id Request 


Exemple Request
```ssh
HTTP GET http://localhost/api/products/6
```

Exemple Response
```json
	{
		"id": 6,
		"name": "Mouse Xtreme B200",
		"description": "Mouse wireless black ",
		"partnumber": "554-SDF",
		"brand": "Logitech",
		"type": "Mouse",
		"price": 56.2
	}
```


##  Update Request 


Exemple Request
```ssh
HTTP GET http://localhost/api/products/1
```
Body
```json
    {		
		"name": "Hub USB-C",
        "brand": "Lenovo",		
	}   
```

Exemple Response
```json
    {
	"fieldCount": 0,
	"affectedRows": 1,
	"insertId": 0,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "(Rows matched: 1  Changed: 1  Warnings: 0",
	"protocol41": true,
	"changedRows": 1
}	
```

##  Delete Request 


Exemple Request
```ssh
HTTP DELETE http://localhost/api/products/6
```

Exemple Response
```json
    {
	"fieldCount": 0,
	"affectedRows": 1,
	"insertId": 2,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "",
	"protocol41": true,
	"changedRows": 0
    }	
```