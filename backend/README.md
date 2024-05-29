# Wikipedia Featured Content Proxy API

## Author

**Nicholas Mendez**

- WhatsApp: 1809-873-60-34
- Email: [nicholasmeeendez@gmail.com](mailto:nicholasmeeendez@gmail.com)

## Project Overview

This project is a Node.js API built using the NestJS framework. The API acts as a proxy to the Wikipedia Featured Content API and incorporates translation features using the LibreTranslate API. It includes robust validation, error handling, and logging of requests for analysis and debugging.

I had a lot of fun working on this project and I'm excited to share it with you!

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Project with Docker](#running-the-project-with-docker)
- [API Endpoints](#api-endpoints)
  - [/feed](#feed)
  - [/feed/translate/:language](#feedtranslatelanguage)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Project with Docker

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker image and start the containers. The NestJS application will be available at `http://localhost:3000`.

3. To stop the Docker containers, run:

   ```bash
   docker-compose down
   ```

## API Endpoints

### /feed

#### Method: GET

#### Description

Acts as a proxy to the Wikipedia Featured Content API. Returns featured content for a given date and language.

#### Parameters

- `date` (required, query): The date for which to fetch featured content. Format: YYYY-MM-DD.
- `language` (required, query): The language code (e.g., en, es). Must be a valid language code.

#### Example Request

```bash
curl "http://localhost:3000/feed?date=2024-05-29&language=en"
```

#### Example Response

```json
{
  "tfa": {
    "type": "standard",
    "title": "Example Article",
    "displaytitle": "Example Article",
    "pageid": 12345,
    "thumbnail": {
      "source": "https://example.com/image.jpg",
      "width": 300,
      "height": 200
    },
    "extract": "This is an example extract from the featured article."
  }
}
```

### /feed/translate/:language

#### Method: GET

#### Description

Inherits all functionalities of the `/feed` endpoint. Additionally, translates the titles and extracts to the specified language using the LibreTranslate API.

#### Parameters

- `language` (required, path): The target language code for translation (e.g., es, fr). Must be a valid language code supported by the translation service.
- `date` (required, query): The date for which to fetch and translate featured content. Format: YYYY-MM-DD.
- `sourceLanguage` (optional, query): The source language code (e.g., en). Defaults to 'en'.

#### Example Request

```bash
curl "http://localhost:3000/translate/es?date=2024-05-29"
```

#### Example Response

```json
{
  "tfa": {
    "type": "standard",
    "title": "Artículo de Ejemplo",
    "displaytitle": "Artículo de Ejemplo",
    "pageid": 12345,
    "thumbnail": {
      "source": "https://example.com/image.jpg",
      "width": 300,
      "height": 200
    },
    "extract": "Este es un extracto de ejemplo del artículo destacado."
  }
}
```

## Technologies Used

<p align="start" >
  <a href="https://nodejs.org/en" target="blank"><img src="https://nodejs.org/static/images/logo.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.typescriptlang.org/" target="blank"><img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="120" alt="Nest Logo" /></a>
  <a href="https://axios-http.com/" target="blank"><img src="https://axios-http.com/assets/logo.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://www.sqlite.org/" target="blank"><img src="https://www.sqlite.org/images/sqlite370_banner.gif" width="120" alt="Nest Logo" /></a>
  <a href="https://docs.nestjs.com/recipes/sql-typeorm" target="blank"><img src="https://pbs.twimg.com/profile_images/910823614521454592/oeIWV7Mf_200x200.jpg" width="120" alt="Nest Logo" /></a>
</p>

- **Node.js**: JavaScript runtime environment.
- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **Axios**: Promise-based HTTP client for the browser and Node.js.

- **SQLite**: A C library that provides a lightweight, disk-based database.

## Contact

If you have any questions or need further assistance, feel free to reach out to me:

- WhatsApp: +1-809-873-60-34
- Email: [nicholasmeeendez@gmail.com](mailto:nicholasmeeendez@gmail.com)

I enjoyed working on this project and hope you find it useful. Your feedback and questions are always welcome!

---

Feel free to copy and paste this Markdown content into your README file. If you have any further changes or additions, let me know!
