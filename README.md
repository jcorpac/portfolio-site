# Front End Developer Nanodegree Portfolio

## Table of Contents

* [Project Description](#project-description)
* [Dependencies](#dependencies)
* [Running from your local machine](#running-from-your-local-machine)
* [Running a container from Dockerhub](#running-a-container-from-dockerhub)

Source code for this project is available at https://github.com/jcorpac/portfolio/

## Project description

This project is to create an example of a software portfolio to demonstrate my progress in the Udacity Front End NanoDegree. The original project presented a simple HTML page, styled with CSS. Since completing the project, I have added JavaScript functionality to generate the page from a JSON (JavaScript Object Notation) object.

## Dependencies

The page generates buttons for my contact links, and for GitHub and DockerHub links using a CSS library from http://zocial.smcllns.com/. To reduce dependency on outside sources, a copy of the library is included in the repository.

To save space and bandwidth, the images used to display screenshots of my projects uses the [WebP](https://en.wikipedia.org/wiki/WebP) image format. Using an up-to-date browser is recommended to support these images.

The links to my Resume in the page's footer lead to a Google Docs document. To access the document, a user will need a browser with a web connection capable of connecting to Google's servers.

## Running from your local machine
This page is designed to run in any web browser with JavaScript enabled. As such, it can be run from a folder on your local machine, or from any web server. A recommended web browser for your local machine is [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en).

If your computer has the Python interpreter installed on it, you can run the page by running the command line from the project folder and entering `python -m SimpleHTTPServer 8080`. The page with the portfolio will be available at `http://localhost:8080/`.

## Running a container from Dockerhub
A Docker container image is provided in my Dockerhub account. To access the container image, log into a docker machine and enter `docker run -dit --name portfolio -p 8080:80 jcorpac/portfolio` at the command line.

The page with the portfolio will be available at `http://<docker machine's IP>:8080/`.

A Dockerfile is included with the portfolio's source code. To create your own Docker image, go to the project folder in the command line and enter `docker build -t portfolio .`. A new container will be created in your Docker instance.
