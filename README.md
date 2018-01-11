Source code for this project is available at https://github.com/jcorpac/portfolio/

## Running the file on a local machine
    `python -m SimpleHTTPServer 8080`
    The page with the portfolio will be available at `http://localhost:8080/`.

## Run a container from Dockerhub
    `docker run -dit --name portfolio -p 8080:80 jcorpac/portfolio`
    The page with the portfolio will be available at `http://<docker machine's IP>:8080/`.
