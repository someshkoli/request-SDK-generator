const sdk = require('postman-collection');
sdkGenerator = require('./'),
	jso = require('./lib/util').fetchJson
// lib = require('./lib')

const a = new sdkGenerator(__dirname + '/test/unit/fixtures/sample_collection.json', 'nodejs-request',
	'nodejs-request');
var result = a.generate();
// console.log(a.ping());
var coll = new sdk.Collection({
	"info": {
		"name": "Code-Gen Test Cases copy! copy",
		"_postman_id": "3af85f5f-17df-46de-ac8f-63185eeeff68",
		"description": "This collection contains requests that will be used to test validity of plugin created to convert postman request into code snippet of particular language.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [{
			"name": "Request Headers",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"try {",
						"    tests[\"Body contains headers\"] = responseBody.has(\"headers\");",
						"    responseJSON = JSON.parse(responseBody);",
						"    tests[\"Header contains host\"] = \"host\" in responseJSON.headers;",
						"    tests[\"Header contains test parameter sent as part of request header\"] = \"my-sample-header\" in responseJSON.headers;",
						"}",
						"catch (e) { }",
						"",
						"",
						"",
						""
					]
				}
			}],
			"request": {
				"method": "GET",
				"header": [{
						"key": "my-sample-header",
						"value": "Lorem ipsum dolor sit amet"
					},
					{
						"key": "testing",
						"value": "'singlequotes'"
					},
					{
						"key": "TEST",
						"value": "\"doublequotes\""
					}
				],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/headers",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"headers"
					]
				},
				"description": "A `GET` request to this endpoint returns the list of all request headers as part of the response JSON.\nIn Postman, sending your own set of headers through the [Headers tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding) will reveal the headers as part of the response."
			},
			"response": []
		},
		{
			"name": "Request Headers (With special Characters)",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"try {",
						"    tests[\"Body contains headers\"] = responseBody.has(\"headers\");",
						"    responseJSON = JSON.parse(responseBody);",
						"    tests[\"Header contains host\"] = \"host\" in responseJSON.headers;",
						"    tests[\"Header contains test parameter sent as part of request header\"] = \"my-sample-header\" in responseJSON.headers;",
						"}",
						"catch (e) { }",
						"",
						"",
						"",
						""
					]
				}
			}],
			"request": {
				"method": "GET",
				"header": [{
						"key": "my-sample-header",
						"value": "Lorem ipsum dolor sit amet"
					},
					{
						"key": "TEST",
						"value": "@#$%^&*()"
					},
					{
						"key": "more",
						"value": ",./';[]}{\":?><|"
					}
				],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/headers",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"headers"
					]
				},
				"description": "A `GET` request to this endpoint returns the list of all request headers as part of the response JSON.\nIn Postman, sending your own set of headers through the [Headers tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding) will reveal the headers as part of the response."
			},
			"response": []
		},
		{
			"name": "Request Headers with disabled headers",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"try {",
						"    tests[\"Body contains headers\"] = responseBody.has(\"headers\");",
						"    responseJSON = JSON.parse(responseBody);",
						"    tests[\"Header contains host\"] = \"host\" in responseJSON.headers;",
						"    tests[\"Header contains test parameter sent as part of request header\"] = \"my-sample-header\" in responseJSON.headers;",
						"}",
						"catch (e) { }",
						"",
						"",
						"",
						""
					]
				}
			}],
			"request": {
				"method": "GET",
				"header": [{
						"key": "my-sample-header",
						"value": "Lorem ipsum dolor sit amet"
					},
					{
						"key": "not-disabled-header",
						"value": "ENABLED"
					},
					{
						"key": "disabled header",
						"value": "DISABLED",
						"disabled": true
					}
				],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/headers",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"headers"
					]
				},
				"description": "A `GET` request to this endpoint returns the list of all request headers as part of the response JSON.\nIn Postman, sending your own set of headers through the [Headers tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding) will reveal the headers as part of the response."
			},
			"response": []
		},
		{
			"name": "GET Request with disabled query",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"tests['response json contains headers'] = _.has(responseJSON, 'headers');",
						"tests['response json contains args'] = _.has(responseJSON, 'args');",
						"tests['response json contains url'] = _.has(responseJSON, 'url');",
						"",
						"tests['args key contains argument passed as url parameter'] = ('test' in responseJSON.args);",
						"tests['args passed via request url params has value \"123\"'] = (_.get(responseJSON, 'args.test') === \"123\");"
					]
				}
			}],
			"request": {
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/get?test=123&anotherone=232",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"get"
					],
					"query": [{
							"key": "test",
							"value": "123",
							"equals": true
						},
						{
							"key": "anotherone",
							"value": "232",
							"equals": true
						},
						{
							"key": "anotheroneone",
							"value": "sdfsdf",
							"equals": true,
							"disabled": true
						}
					]
				},
				"description": "The HTTP `GET` request method is meant to retrieve data from a server. The data\nis identified by a unique URI (Uniform Resource Identifier). \n\nA `GET` request can pass parameters to the server using \"Query String \nParameters\". For example, in the following request,\n\n> http://example.com/hi/there?hand=wave\n\nThe parameter \"hand\" has the value \"wave\".\n\nThis endpoint echoes the HTTP headers, request parameters and the complete\nURI requested."
			},
			"response": []
		},
		{
			"name": "POST form data with special characters Copy",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [{
							"key": "pl",
							"value": "'a'",
							"type": "text"
						},
						{
							"key": "qu",
							"value": "\"b\"",
							"type": "text"
						},
						{
							"key": "hdjkljh",
							"value": "c",
							"type": "text"
						},
						{
							"key": "sa",
							"value": "d",
							"type": "text"
						},
						{
							"key": "Special",
							"value": "!@#$%&*()^_+=`~",
							"type": "text"
						},
						{
							"key": "Not Select",
							"value": "Disabled",
							"type": "text",
							"disabled": true
						},
						{
							"key": "more",
							"value": ",./';[]}{\":?><|\\\\",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST form data with empty form data body",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": ""
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "Resolve URL (Quotes + Special Characters) Copy",
			"request": {
				"method": "POST",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/:action?a=!@$^*()_-`%26&b=,./';[]}{\":/?><||",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						":action"
					],
					"query": [{
							"key": "a",
							"value": "!@$^*()_-`%26",
							"equals": true
						},
						{
							"key": "b",
							"value": ",./';[]}{\":/?><||",
							"equals": true
						}
					],
					"variable": [{
						"key": "action",
						"value": "post"
					}]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "POST Raw Text",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "application/x-www-form-urlencoded"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST urlencoded data with disabled entries",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "application/x-www-form-urlencoded"
				}],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [{
							"key": "1",
							"value": "'a'",
							"description": "",
							"type": "text"
						},
						{
							"key": "2",
							"value": "\"b\"",
							"description": "",
							"type": "text"
						},
						{
							"key": "'3'",
							"value": "c",
							"description": "",
							"type": "text"
						},
						{
							"key": "\"4\"",
							"value": "d",
							"description": "",
							"type": "text"
						},
						{
							"key": "Special",
							"value": "!@#$%&*()^_=`~",
							"description": "",
							"type": "text"
						},
						{
							"key": "more",
							"value": ",./';[]}{\":?><|\\\\",
							"description": "",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST urlencoded data with empty urlencoded body",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "application/x-www-form-urlencoded"
				}],
				"body": {
					"mode": "urlencoded",
					"urlencoded": ""
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST json with raw",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "application/json"
				}],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"json\": \"Test-Test\"\n}"
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": [{
				"id": "adf222ad-853d-4aa4-9fa4-c824379c05cb",
				"name": "POST json with raw",
				"originalRequest": {
					"method": "POST",
					"header": [{
						"key": "Content-Type",
						"value": "application/json"
					}],
					"body": {
						"mode": "raw",
						"raw": "{\n  \"json\": \"Test-Test\"\n}"
					},
					"url": {
						"raw": "https://postman-echo.com/post",
						"protocol": "https",
						"host": [
							"postman-echo",
							"com"
						],
						"path": [
							"post"
						]
					}
				},
				"status": "OK",
				"code": 200,
				"_postman_previewlanguage": "json",
				"header": [{
						"key": "Access-Control-Allow-Credentials",
						"value": "",
						"name": "Access-Control-Allow-Credentials",
						"description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
					},
					{
						"key": "Access-Control-Allow-Headers",
						"value": "",
						"name": "Access-Control-Allow-Headers",
						"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
					},
					{
						"key": "Access-Control-Allow-Methods",
						"value": "",
						"name": "Access-Control-Allow-Methods",
						"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
					},
					{
						"key": "Access-Control-Allow-Origin",
						"value": "",
						"name": "Access-Control-Allow-Origin",
						"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
					},
					{
						"key": "Access-Control-Expose-Headers",
						"value": "",
						"name": "Access-Control-Expose-Headers",
						"description": "Lets a server whitelist headers that browsers are allowed to access."
					},
					{
						"key": "Connection",
						"value": "keep-alive",
						"name": "Connection",
						"description": "Options that are desired for the connection"
					},
					{
						"key": "Content-Encoding",
						"value": "gzip",
						"name": "Content-Encoding",
						"description": "The type of encoding used on the data."
					},
					{
						"key": "Content-Length",
						"value": "385",
						"name": "Content-Length",
						"description": "The length of the response body in octets (8-bit bytes)"
					},
					{
						"key": "Content-Type",
						"value": "application/json; charset=utf-8",
						"name": "Content-Type",
						"description": "The mime type of this content"
					},
					{
						"key": "Date",
						"value": "Wed, 07 Feb 2018 10:06:15 GMT",
						"name": "Date",
						"description": "The date and time that the message was sent"
					},
					{
						"key": "ETag",
						"value": "W/\"215-u7EU1nFtauIn0/aVifjuXA\"",
						"name": "ETag",
						"description": "An identifier for a specific version of a resource, often a message digest"
					},
					{
						"key": "Server",
						"value": "nginx",
						"name": "Server",
						"description": "A name for the server"
					},
					{
						"key": "Vary",
						"value": "X-HTTP-Method-Override, Accept-Encoding",
						"name": "Vary",
						"description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
					},
					{
						"key": "set-cookie",
						"value": "sails.sid=s%3AxRBxgrc9M-jKK_l1mX3y3rM_ry8wYLz4.Of4qpOzd9hi6uO0sAQIj%2Bxs2VeppWxYjJa4OpIW3PKg; Path=/; HttpOnly",
						"name": "set-cookie",
						"description": "an HTTP cookie"
					}
				],
				"cookie": [{
					"expires": "Tue Jan 19 2038 08:44:07 GMT+0530 (IST)",
					"httpOnly": true,
					"domain": "postman-echo.com",
					"path": "/",
					"secure": false,
					"value": "s%3AxRBxgrc9M-jKK_l1mX3y3rM_ry8wYLz4.Of4qpOzd9hi6uO0sAQIj%2Bxs2VeppWxYjJa4OpIW3PKg",
					"key": "sails.sid"
				}],
				"responseTime": null,
				"body": "{\"args\":{},\"data\":\"{\\n  \\\"json\\\": \\\"Test-Test\\\"\\n}\",\"files\":{},\"form\":{},\"headers\":{\"host\":\"postman-echo.com\",\"content-length\":\"25\",\"accept\":\"*/*\",\"accept-encoding\":\"gzip, deflate\",\"cache-control\":\"no-cache\",\"content-type\":\"text/plain\",\"cookie\":\"sails.sid=s%3AkOgtF1XmXtVFx-Eg3S7-37BKKaMqMDPe.hnwldNwyvsaASUiRR0Y0vcowadkMXO4HMegTeVIPgqo\",\"postman-token\":\"2ced782f-a141-428e-8af6-04ce954a77d5\",\"user-agent\":\"PostmanRuntime/7.1.1\",\"x-forwarded-port\":\"443\",\"x-forwarded-proto\":\"https\"},\"json\":null,\"url\":\"https://postman-echo.com/post\"}"
			}]
		},
		{
			"name": "POST javascript with raw",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "application/javascript"
				}],
				"body": {
					"mode": "raw",
					"raw": "var val = 6;\nconsole.log(val);"
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST text/xml with raw",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "text/xml"
				}],
				"body": {
					"mode": "raw",
					"raw": "<xml>\n\tTest Test\n</xml>"
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST text/html with raw",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "text/html"
				}],
				"body": {
					"mode": "raw",
					"raw": "<html>\n  Test Test\n</html>"
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "POST raw with empty raw body",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"method": "POST",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "Resolve URL",
			"request": {
				"method": "POST",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://postman-echo.com/:action?a=''&b=\"\"",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						":action"
					],
					"query": [{
							"key": "a",
							"value": "''",
							"equals": true
						},
						{
							"key": "b",
							"value": "\"\"",
							"equals": true
						},
						{
							"key": "more",
							"value": "",
							"equals": true,
							"disabled": true
						}
					],
					"variable": [{
						"key": "action",
						"value": "post"
					}]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "PUT Request",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has PUT data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data sent in request'] = (responseJSON.data && responseJSON.data.length === 256);"
					]
				}
			}],
			"request": {
				"method": "PUT",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Etiam mi lacus, cursus vitae felis et, blandit pellentesque neque. Vestibulum eget nisi a tortor commodo dignissim.\nQuisque ipsum ligula, faucibus a felis a, commodo elementum nisl. Mauris vulputate sapien et tincidunt viverra. Donec vitae velit nec metus."
				},
				"url": {
					"raw": "https://postman-echo.com/put",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"put"
					]
				},
				"description": "The HTTP `PUT` request method is similar to HTTP `POST`. It too is meant to \ntransfer data to a server (and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `PUT` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following \nraw HTTP request,\n\n> PUT /hi/there?hand=wave\n>\n> <request-body>\n\n\n"
			},
			"response": []
		},
		{
			"name": "PATCH Request",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has PUT data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data sent in request'] = (responseJSON.data && responseJSON.data.length === 256);"
					]
				}
			}],
			"request": {
				"method": "PATCH",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Curabitur auctor, elit nec pulvinar porttitor, ex augue condimentum enim, eget suscipit urna felis quis neque.\nSuspendisse sit amet luctus massa, nec venenatis mi. Suspendisse tincidunt massa at nibh efficitur fringilla. Nam quis congue mi. Etiam volutpat."
				},
				"url": {
					"raw": "https://postman-echo.com/patch",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"patch"
					]
				},
				"description": "The HTTP `PATCH` method is used to update resources on a server. The exact\nuse of `PATCH` requests depends on the server in question. There are a number\nof server implementations which handle `PATCH` differently. Technically, \n`PATCH` supports both Query String parameters and a Request Body.\n\nThis endpoint accepts an HTTP `PATCH` request and provides debug information\nsuch as the HTTP headers, Query String arguments, and the Request Body."
			},
			"response": []
		},
		{
			"name": "DELETE Request",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has PUT data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data sent in request'] = (responseJSON.data && responseJSON.data.length === 256);"
					]
				}
			}],
			"request": {
				"method": "DELETE",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Donec fermentum, nisi sed cursus eleifend, nulla tortor ultricies tellus, ut vehicula orci arcu ut velit. In volutpat egestas dapibus.\nMorbi condimentum vestibulum sapien. Etiam dignissim diam quis eros lobortis gravida vel lobortis est. Etiam gravida sed."
				},
				"url": {
					"raw": "https://postman-echo.com/delete",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"delete"
					]
				},
				"description": "The HTTP `DELETE` method is used to delete resources on a server. The exact\nuse of `DELETE` requests depends on the server implementation. In general, \n`DELETE` requests support both, Query String parameters as well as a Request \nBody.\n\nThis endpoint accepts an HTTP `DELETE` request and provides debug information\nsuch as the HTTP headers, Query String arguments, and the Request Body."
			},
			"response": []
		},
		{
			"name": "OPTIONS to postman echo",
			"event": [{
				"listen": "test",
				"script": {
					"type": "text/javascript",
					"exec": [
						"var responseJSON;",
						"",
						"try { ",
						"    responseJSON = JSON.parse(responseBody); ",
						"    tests['response is valid JSON'] = true;",
						"}",
						"catch (e) { ",
						"    responseJSON = {}; ",
						"    tests['response is valid JSON'] = false;",
						"}",
						"",
						"",
						"tests['response has post data'] = _.has(responseJSON, 'data');",
						"tests['response matches the data posted'] = (responseJSON.data && responseJSON.data.length === 256);",
						"",
						"tests[\"content-type equals text/plain\"] = responseJSON && responseJSON.headers && (responseJSON.headers[\"content-type\"] === 'text/plain');"
					]
				}
			}],
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "OPTIONS",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://postman-echo.com/post",
					"protocol": "https",
					"host": [
						"postman-echo",
						"com"
					],
					"path": [
						"post"
					]
				},
				"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
			},
			"response": []
		},
		{
			"name": "LINK request",
			"request": {
				"method": "LINK",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://www.google.com",
					"protocol": "https",
					"host": [
						"www",
						"google",
						"com"
					]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "UNLINK request",
			"request": {
				"method": "UNLINK",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://www.google.com",
					"protocol": "https",
					"host": [
						"www",
						"google",
						"com"
					]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "LOCK request",
			"request": {
				"method": "LOCK",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://www.google.com",
					"protocol": "https",
					"host": [
						"www",
						"google",
						"com"
					]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "UNLOCK request",
			"request": {
				"method": "UNLOCK",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://www.google.com",
					"protocol": "https",
					"host": [
						"www",
						"google",
						"com"
					]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "PROPFIND request",
			"request": {
				"method": "PROPFIND",
				"header": [{
					"key": "Content-Type",
					"value": "text/plain"
				}],
				"body": {
					"mode": "raw",
					"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
				},
				"url": {
					"raw": "https://www.google.com",
					"protocol": "https",
					"host": [
						"www",
						"google",
						"com"
					]
				},
				"description": null
			},
			"response": []
		},
		{
			"name": "PURGE Request",
			"request": {
				"method": "PURGE",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://9c76407d-5b8d-4b22-99fb-8c47a85d9848.mock.pstmn.io",
					"protocol": "https",
					"host": [
						"9c76407d-5b8d-4b22-99fb-8c47a85d9848",
						"mock",
						"pstmn",
						"io"
					]
				},
				"description": ""
			},
			"response": []
		},
		{
			"name": "COPY Request",
			"request": {
				"method": "COPY",
				"header": [],
				"body": {},
				"url": {
					"raw": "https://9c76407d-5b8d-4b22-99fb-8c47a85d9848.mock.pstmn.io",
					"protocol": "https",
					"host": [
						"9c76407d-5b8d-4b22-99fb-8c47a85d9848",
						"mock",
						"pstmn",
						"io"
					]
				},
				"description": ""
			},
			"response": [{
				"id": "3129046c-67ec-4c31-9ab4-5a667ca128fc",
				"name": "COPY Request",
				"originalRequest": {
					"method": "COPY",
					"header": [],
					"body": {},
					"url": {
						"raw": "https://9c76407d-5b8d-4b22-99fb-8c47a85d9848.mock.pstmn.io",
						"protocol": "https",
						"host": [
							"9c76407d-5b8d-4b22-99fb-8c47a85d9848",
							"mock",
							"pstmn",
							"io"
						]
					}
				},
				"status": "OK",
				"code": 200,
				"_postman_previewlanguage": "json",
				"_postman_previewtype": "text",
				"header": [{
						"key": "Access-Control-Allow-Credentials",
						"value": "",
						"name": "Access-Control-Allow-Credentials",
						"description": "Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials."
					},
					{
						"key": "Access-Control-Allow-Headers",
						"value": "",
						"name": "Access-Control-Allow-Headers",
						"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
					},
					{
						"key": "Access-Control-Allow-Methods",
						"value": "",
						"name": "Access-Control-Allow-Methods",
						"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
					},
					{
						"key": "Access-Control-Allow-Origin",
						"value": "*",
						"name": "Access-Control-Allow-Origin",
						"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
					},
					{
						"key": "Access-Control-Expose-Headers",
						"value": "",
						"name": "Access-Control-Expose-Headers",
						"description": "Lets a server whitelist headers that browsers are allowed to access."
					},
					{
						"key": "Connection",
						"value": "keep-alive",
						"name": "Connection",
						"description": "Options that are desired for the connection"
					},
					{
						"key": "Content-Encoding",
						"value": "gzip",
						"name": "Content-Encoding",
						"description": "The type of encoding used on the data."
					},
					{
						"key": "Content-Length",
						"value": "59",
						"name": "Content-Length",
						"description": "The length of the response body in octets (8-bit bytes)"
					},
					{
						"key": "Content-Type",
						"value": "application/json; charset=utf-8",
						"name": "Content-Type",
						"description": "The mime type of this content"
					},
					{
						"key": "Date",
						"value": "Mon, 05 Feb 2018 07:48:41 GMT",
						"name": "Date",
						"description": "The date and time that the message was sent"
					},
					{
						"key": "ETag",
						"value": "W/\"af-MmpVeTvfnSW88c4riXD0uw\"",
						"name": "ETag",
						"description": "An identifier for a specific version of a resource, often a message digest"
					},
					{
						"key": "Server",
						"value": "nginx",
						"name": "Server",
						"description": "A name for the server"
					},
					{
						"key": "Vary",
						"value": "Accept-Encoding",
						"name": "Vary",
						"description": "Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server."
					}
				],
				"cookie": [],
				"responseTime": 378,
				"body": "{\n    \"status\": 200,\n    \"method\": \"COPY\"\n}"
			}]
		}
	]
});
