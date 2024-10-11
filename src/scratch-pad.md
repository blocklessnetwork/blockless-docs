cd src && python -m SimpleHTTPServer 3000

kill -9 $(lsof -i:3000 -t)