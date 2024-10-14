

cd src && python -m http.server 3000

kill -9 $(lsof -i:3000 -t)