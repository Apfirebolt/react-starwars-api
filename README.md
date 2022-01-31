![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

# React Starwars - A Star Wars database application created in React using Star wars API ⚡️

## Project Briefing

This is an web application created using React which integrates with open API for Star Wars to display information from Star Wars franchise in various categories. 

For more information please visit the API website and the docs [here](https://swapi.dev/)

Made with ❤️ by **[@apfirebolt](https://github.com/Apfirebolt/)**
## Features/Requirements

- The app aims at displaying data from the Star Wars API in an attractive looking UI.
- The API has data from various categories like Planets, People, Ships and Vehicles.
- Each category would have a separate page.
- Pagination and API caching is enabled through the use of 'react-query' library.

## Built With

* [React](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [Spectre CSS Framework](https://picturepan2.github.io/spectre/)

## Project setup

Simply install node modules for frontend and run conventional commands to see it in development mode on your local system. For production 
environment use 'Docker'.

```
npm install
npm start
```

## Production Deployment

- Docker containers are used for deploying this.
- You can own a virtual server or configure your ECS AWS instances with Docker to deploy this.
- React production build would be served through Nginx, everything would be through Docker containers.

```
sudo docker build -t react-starwars .
sudo docker run -d --name evil_react -p 80:80 react-starwars
```

1. First step is to create a Docker image from the Docker file within this repo, optionally you can tag it with a name otherwise some random fancy name would be assigned to it.

2. Once you have the image, you can spawn a container using the second command and then check on localhost port 80 to see the running container.


## Heroku Deployment

- This app can be seamlessly deployed on Heroku using this buildpack https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

## Future Requirements

- Might as well have detail sections for each character, vehicle and more from the API.
- Search filtering might be added.

## Updates

- More pages to fetch more types of data from the Star Wars API might be available in future, would be notified here.

## Project Screenshots

Some of the screenshots for this application are listed below. For instance this one displays information about planets from the Star Wars franchise.

![alt text](./screenshots/planets.png)

Star ships information

![alt text](./screenshots/star_ships.png)

Data from the vehicles API end-point.

![alt text](./screenshots/vehicles.png)
