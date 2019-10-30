docker-build:
	docker build -t huyak -f ./build/Dockerfile .

docker-run: docker-build
	docker run -it -p 3000:3000 huyak