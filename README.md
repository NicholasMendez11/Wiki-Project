# Wikipedia Featured Content Proxy API + CLIENT

## Doral Health Technical Skill Assessment

## Author: **Nicholas Gabriel Mendez Bertrand**

- Email: [nicholasmeeendez@gmail.com](mailto:nicholasmeeendez@gmail.com)
- Portafolio: [nicholamendez.com](https://nicholamendez.com/)
- WhatsApp: [+18098736034](https://api.whatsapp.com/send/?phone=18098736034&text=Hey+Nicholas%2C+I+was+checking+your+website+and+want+to+get+in+contact+with+you%2C+are+you+available+now%3F&type=phone_number&app_absent=0)

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Project with Docker](#running-the-project-with-docker)
- [Backend](#backend)

  - [Technologies Used](#technologies-used)
    - [Node.js](#nodejs)
    - [NestJS](#nestjs)
    - [TypeScript](#typescript)
    - [TypeORM](#typeorm)
    - [Axios](#axios)
    - [PostgreSQL](#postgresql)
  - [Testing](#testing)
    - [Unit Testing](#unit-testing)
    - [E2E Testing](#e2e-testing)
  - [API Endpoints](#api-endpoints)
    - [/feed](#feed)
      - [Method: GET](#method-get)
      - [Description](#description)
      - [Parameters](#parameters)
      - [Example Request](#example-request)
      - [Example Response](#example-response)
    - [/feed/translate/:language](#feedtranslatelanguage)
      - [Method: GET](#method-get-1)
      - [Description](#description-1)
      - [Parameters](#parameters-1)
      - [Example Request](#example-request-1)
      - [Example Response](#example-response-1)

- [Frontend](#frontend)

  - [Tech Stack](#tech-stack)
    - [ReactJS and ViteJS](#reactjs-and-vitejs)
    - [Typescript](#typescript)
    - [TailwindCSS](#tailwindcss)
    - [State Management](#state-management)
    - [Tanstack Query](#tanstack-query)
    - [Capacitor](#capacitor)
  - [UI/UX Design and explanation](#uiux-design-and-explanation)
    - [Requirements to be met and addressed by the UI](#requirements-to-be-met-and-addressed-by-the-ui)
    - [Grid system](#grid-system)
    - [Card Content](#card-content)
    - [Detail view](#detail-view)
    - [Footer](#footer)
  - [File Structure](#file-structure)

- [Docker](#docker)

  - [Docker Compose](#docker-compose)

- [Contact](#contact)
- [Assumptions and Limitations](#assumptions-and-limitations)
  - [Lack of time](#lack-of-time)
  - [Running PostgreSQL locally](#migration-to-postgresql-from-sqlite3)
  - [Uses of ENV variables](#uses-of-env-variables)
  - [Wikipedia API or Synchronization issues](#wikipedia-api-or-synchronization-issues)
  - [Languages and UI limitations](#languages-and-ui-limitations)
  - [Capacitor](#capacitor)
- [I'm ready for whatever challenges!](#im-ready-for-whatever-challenges)

## Project Overview

This is Full-Stack Project meant to be a Node.js API built using the NestJS framework. The API acts as a proxy to the Wikipedia Featured Content API and incorporates translation features using the LibreTranslate API. It includes robust validation, error handling, and logging of requests for analysis and debugging.

We also have a ReactJS frontend that interacts with the API and displays the content. The frontend is built using ReactJS and TailwindCSS, and it includes a responsive design and a grid system for displaying the content.

I had a lot of fun working on this project and I'm excited to share it with you!

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Project with Docker

1. Clone the repository:

```bash
  git clone https://github.com/NicholasMendez11/Wiki-Project.git
  cd Wiki-Project
```

2. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker image and start the containers. The NestJS application will be available at `http://localhost:3000` and the client at `http://localhost:5173`.

3. To stop the Docker containers, run:

   ```bash
   docker-compose down
   ```

## Project Structure

```
/Wiki-Project
│
├── /backend
│   ├── src
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── ... (other NestJS files and directories)
│   ├── test
│   │   ├── app.e2e-spec.ts
│   │   ├── ... (other test files)
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── ... (other backend configuration files)
│
├── /client
│   ├── public
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── ... (other React files and directories)
│   ├── package.json
│   ├── Dockerfile
│   ├── ... (other frontend configuration files)
│
├── docker-compose.yml
├── .gitignore
└── README.md

```

The repository is organized as follows:

- `client`: Contains the ReactJS frontend application.
- `backend`: Contains the Node.js API built with NestJS.

# Backend

The backend is the responsible for the API and the translation features. It uses the NestJS framework to build the API and the LibreTranslate API to provide translation services. The API is built using TypeScript and Node.js, and it includes validation, error handling, and logging of requests for analysis and debugging into aa PostgreSQL database.

## Technologies Used

<p align="start" >
  <a href="https://nodejs.org/en" target="blank"><img src="https://nodejs.org/static/images/logo.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.typescriptlang.org/" target="blank"><img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="120" alt="Nest Logo" /></a>
  <a href="https://axios-http.com/" target="blank"><img src="https://axios-http.com/assets/logo.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://docs.nestjs.com/recipes/sql-typeorm" target="blank"><img src="https://pbs.twimg.com/profile_images/910823614521454592/oeIWV7Mf_200x200.jpg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.sqlite.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png" width="120" alt="Nest Logo" /></a>
</p>

### **Node.js**

JavaScript runtime environment.

### **NestJS**:

A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

### **TypeScript**:

A typed superset of JavaScript that compiles to plain JavaScript.

### **TypeORM**:

An ORM for TypeScript and JavaScript (ES7, ES6, ES5).

### **Axios**:

Promise-based HTTP client for the browser and Node.js.

### **PostgreSQL**:

A powerful, open-source object-relational database system. (Initially I used SQLite3 but I had to change it to PostgreSQL because of the performance issues and current version for SQLite is not quite stable for docker containers)

## Testing

For testing I used Jest, as it is a popular and easy-to-use testing framework for JavaScript and TypeScript. and it comes pre-installed with NestJS.

I implement both Unit and e2e tests, and I use the Jest framework to run them.

### Unit Testing

To run the unit tests, go to the backend folder and run:

```
npm run test
```

### E2E Testing

To run the e2e tests, go to the backend folder and run:

```
npm run test:e2e
```

## API Endpoints

### /feed

#### Method: GET

#### Description

Acts as a proxy to the Wikipedia Featured Content API. Returns events for a given date and language.

#### Parameters

- `date` (required, query): The date for which to fetch featured content. Format: YYYY-MM-DD.
- `language` (required, query): The language code (e.g., en, es). Must be a valid language code.
- `page` (required, query): The page number for pagination. Defaults to 1.
- `limit` (required, query): The number of events per page. Defaults to 5.

#### Example Request

```bash
curl "http://localhost:3000/feed?date=2024-06-01&language=en&page=1&limit=5"
```

#### Example Response

```json
{
  "date": "2024-06-01",
  "events": [
    {
      // Array of events see typescript definition for more information
    }
  ],
  "news": [],
  "totalEvents": 4,
  "totalNews": 0
}
```

### /feed/translate/:language

#### Method: GET

#### Description

Inherits all functionalities of the `/feed` endpoint. Additionally, translates the titles and extracts to the specified language using the LibreTranslate API.

LibreTranslate is now a paid service, so I had to subscribe to a plan to use it. So I will appreciate if after the project is reviewed, you could let me know so I can turn of the subscription.

#### Parameters

- `language` (required, path): The target language code for translation (e.g., es, fr). Must be a valid language code supported by the translation service.
- `text` (required, query): The text to be translated.

#### Example Request

```bash
curl "http://localhost:3000/feed/translate/fr?text=Hello%20World"
```

#### Example Response

```json
{
  "detectedLanguage": {
    "confidence": 100,
    "language": "en"
  },
  "translatedText": "Bonjour le monde"
}
```

## Frontend

### Tech Stack

### ReactJS and ViteJS

For the frontend, I used ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of reusable UI components and the efficient management of state in a single-page application.
For the specifications of this project, I decided to go simple and terms of library and frameworks used. I decided to use the Reactjs plugin for Vite, as it allow me a quick start and a good documentation.

### Typescript

Typescript is a superset of JavaScript that adds optional static typing to the language. I love the type safety it provides and it is a great tool for catching errors at compile time. I can not see myself not using it in the future.

### TailwindCSS

TailwindCSS is a utility-first CSS framework that allows for easy styling of React components. It provides a set of pre-defined classes that can be used to style elements and components. Since I started to use TailwindCSS last year, I have become very familiar with it and I am very happy with it.

### State Management

For the state management, I decided to use Zustand, which is a state management library for React. It is a simple and lightweight library that allows for easy state management in a React application. It also provides a way to manage state in a centralized way, making it easier to maintain and update the state.

### Tanstack Query

Tanstack Query is a library for building data fetching and caching in React applications. It provides a way to fetch data from an API and cache the results, making it easier to manage and update the data. It also provides a way to handle pagination and infinite scrolling, making it easier to display large amounts of data.

### Capacitor

Capacitor is a framework for building native mobile apps using web technologies. It allows for the creation of mobile apps that can be built using ReactJS and other web technologies. It provides a way to build native mobile apps using web technologies, making it easier to create mobile apps that can be deployed on both iOS and Android.

You can run the app on your simulator by using the capacitor CLI Command:

```
npm run build   //This will build the app for production
npx cap add android
npx cap add ios
```

This will open the respective project in the android studio and xcode.

### File Structure

The file structure of the src folder look similar to the following:

```
src/
|-- assets/
|-- components/
|   |-- Card.tsx
|   |-- DatePicker.tsx
|   |-- LanguageSelector.tsx
|   |-- Pagination.tsx
|-- hooks/
|   |-- useFetchContent.ts
|-- pages/
|   |-- Home.tsx
|-- services/
|   |-- api.ts
|-- styles/
|   |-- tailwind.css
|-- App.tsx
|-- index.tsx
|-- main.tsx
|-- vite-env.d.ts
```

I tried to keep the file structure as simple as possible, but it is important to note that the structure may vary depending on the specific requirements of the project.

Also tried to keep the code self-explanatory, and followed the best practices for code organization and structure.
like the uses of custom hooks, the use of the react-query library, and abstracting the logic of the application into reusable components.

## UI/UX Design and explanation

For the UI/UX design, I tried to keep the design simple and intuitive, with a focus on usability and accessibility. I used a combination of design principles and best practices to create a user-friendly interface that is easy to navigate and understand, and i putted attention to the minimalist design of the application and their responsiveness

### Requirements to be met and addressed by the UI

- Allows users to explore featured content based on selected dates and languages.
- Use the date, language, and page size dropdowns to filter the content.
- You can move through the content using the pagination controls.
- This app must be responsive and work on all devices, including desktops, tablets, and mobile phones.

### Grid system

- The grid system is used to display the content in a grid of cards.

### Card Content

- Each card has a title, thumbnail image, a brief description and a footer with a link to the article and the event year.
- The thumbnail image is displayed on the top of the card.
- The description is displayed on the bottom of the title.

### Detail view

- When a card is clicked, it will open a detail view .
- The detail view will display the article content and the publish date
- On the top right corner of the detail crd you will find a dropdown with the languages available to translate the article.
- On the bottom right corner of the detail card you will find a link to the article in wikipedia
- Once the article is opened in wikipedia, you will see a red label on the top right corner of the card, indicating that the article was already read.

### Footer

The last section of the page is the footer, which includes links to my Email and social media profile and a copyright notice.

# Docker

For this project I used Docker to create a containerized environment for the backend and the frontend. This allowed me to easily deploy the application to a server or a cloud platform without having to install and configure the necessary software on the server.

## Docker Compose

I also used Docker Compose to define the services and their dependencies in a YAML file. This file allows me to easily manage and scale the services in the containerized environment.

To run the project with Docker, follow these steps:

1. Install Docker and Docker Compose on your machine.
2. Clone the repository to your local machine.
3. Navigate to the root directory of the repository.
4. Run the following command to build the Docker image for the backend and the frontend:

```
docker-compose up --build
```

This will build the Docker images for the backend and the frontend, and start the containers.

5. Open a web browser and navigate to http://localhost:5173 to access the application.

Note: Make sure that the Docker daemon is running on your machine and that you have the necessary permissions to access the Docker socket.

## Contact

If you have any questions or need further assistance, feel free to reach out to me:

- WhatsApp: +18098736034
- Email: [nicholasmeeendez@gmail.com](mailto:nicholasmeeendez@gmail.com)

I enjoyed working on this project and hope you find it useful. Your feedback and questions are always welcome!

# Assumptions and Limitations

## Lack of time

Due to other responsibilities, I did not have much time to work fully on the project. However, I wanted to deliver something that showcases my skills. I dedicated a total of three nights and one day to this project.

## Migration to PostgreSQL from SQLite3

Initially, for the backend, I used an SQLite3 database along with the NestJS project. However, I encountered many issues when installing it in the Docker container. At the last minute, I had to migrate to a PostgreSQL database. This database worked well, but I did not have enough time to test it thoroughly.

After migrating to the new database, As we are using a PostgreSQL database, if you plan to run the project locally, you will need to install and configure the PostgreSQL database on your machine. This will allow you to test the backend locally and ensure that it is working correctly.

Otherwise I will recommend run the project in the Docker container using `docker-compose up`. as this container will have the PostgreSQL database already installed and configured.

## Wikipedia API or Synchronization issues

The day before submitting the project, I noticed that in some random scenarios, the backend did not receive any data from the Wikipedia API, resulting in no events being returned to the client. I assume this error could be due to the Wikipedia API for certain dates or might be an issue with the asynchronous pattern used to fetch data from Wikipedia and map it.

In cases where no data is returned, changing the event date or language resolves the issue.

## Languages and UI limitations

I limited the number of languages that can be used in the app, primarily for UI reasons, as I do not prefer excessively long dropdowns. Therefore, I kept only the most common languages.

## Capacitor

Capacitor is a new tool I learned to use while preparing this project. My experience in developing mobile applications is more related to technologies like React Native with Expo, and I have some experience with a few projects in Flutter (my expertise is much more with RN). Therefore, there might be some configuration issues when running the Capacitor project. I tested it on both Android and iOS, and it looked fine, but on two occasions, I encountered errors when running the project on Android, a situation I did not have much time to analyze and correct.

## LibreTranslate API is not free anymore

I used the LibreTranslate API to translate the titles and extracts to the specified language using the LibreTranslate API. This API is not a free service, so I had to subscribe to a plan to use it. So I will appreciate if after the project is reviewed, you could let me know so I can turn of the subscription.

## Uses of ENV variables

I did not use ENV variables in the project, I understand that it is a good practice to use them, but I did not have the time to implement them and as per the last minute configuration I did on the database I did not have enough time to do it.

But I want to highlight that I'm aware of the importance of using ENV variables in the project, and I'm happy to discuss the best practices for using them in a project like this.

# I'm ready for whatever challenges!

I believe my skills would significantly contribute to the project, given the technology stack being implemented. I consider my adaptation time to new environments and technologies to be very quick. I appreciate any feedback you may have.
