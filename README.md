
# Holler: a Hurricane Relief Tool for First Responders

## About
This hurricane preparation and relief tool serves as a centralized platform for citizens and local/state governments to document and visualize hurricane impacts in real time. Users can upload images of hurricane-related issues—such as downed power lines, water outages, blocked roads, structural damage, sinkholes, gas leaks, hazardous debris, or stranded individuals—which are then categorized and mapped. A map interface displays these reports as markers, allowing users to click for images and additional details at specific locations. For governments, this provides a high-resolution view of critical areas, facilitating swift, targeted relief efforts and resource allocation based on reported damage and hazard density.




## Features
- Map interface
- Map markers representing reports
- Report statistics
- Report submissions
- Clustering reports based on zoom level
- Descriptive popups of reports 
- Report filtering



## Deployment

### Backend
To deploy this projects backend, follow these steps from the root directory.

```bash
# ~/holler
  cd backend 
  npm i
```

After installing the necessary dependencies, you MUST add your WATSONX AI API KEY and WATSONX AI auth type. The following dictates this setup, starting from the root project directory.

```bash
# ~/holler
  cd backend
  touch .env
```

Inside of .env paste the following lines: 
```
MONGO_URI = SECRET_KEY
WATSONX_AI_AUTH_TYPE = iam
WATSONX_AI_APIKEY = SECRET_KEY
```

After the following steps are completed, start the backend
```bash
# ~/holler/backend
  npm start
```
### Frontend
To deploy this projects frontend

```bash
# ~/holler
  cd holler
  npm i
  npm run start
```

Open `http://localhost:3000/` and access the application.




## Demo

https://youtu.be/6a6rsfjrWQE


## Authors

- [@jackplo](https://github.com/jackplo)
- [@dsantosgonzalez](https://github.com/dsantosgonzalez)
- [@Gnot727](https://github.com/Gnot727)
- [@Mateo486](https://github.com/Mateo486)


