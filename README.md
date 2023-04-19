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
or empty
```json
	[]
```


##  Find by Id Request 


Exemple Request
```ssh
HTTP GET http://localhost/api/products/1
```

Exemple Sucess Response
```json
	{
		"id": 1,
		"name": "Mouse Fantoms",
		"description": "Mouse wired gamer",
		"partnumber": "554-SDF",
		"brand": "Logitech",
		"type": "Mouse",
		"price": 56.2
	}
```
or empty
```json
	[]
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

Exemple Sucess Response
200
```json
    {
	"message": "id 1deleted successfully"
    }  	
```
or
```json
    {
	"message": "rows matched, but no have been changed"
    }  

```
Exemple Error Response
404
```json
    {
	"errorMessage": "Unknown column 'nam' in 'field list'"
    }  	
```
or 400
```json
    {
	"errorMessage": "Error unknown"
    }  	
```

##  Delete Request 


Exemple Request
```ssh
HTTP DELETE http://localhost/api/products/6
```

 
Exemple Sucess Response
200
```json
    {
	"message": "id 1 deleted successfully"
    } 
```

Exemple Error Response
404
```json
    {
	    "errorMessage": "id 5 not found"
    }  	
```

