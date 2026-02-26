# week-three-assignment
# 🌍 Countries Explorer

A React application that allows users to explore countries around the world using the REST Countries API. Users can search for countries, filter by region, and sort results by population.

### How to Run the Project

1️⃣ Install Node.js
Make sure Node.js (v16 or higher) is installed on your system.

2️⃣ Install Dependencies
In the project folder, run:
npm install dependencies

3️⃣ Start Development Server

If using Vite:
npm run dev

4️⃣ Open in Browser

Open the local development URL shown in the terminal (usually):
http://localhost:5173

The app will load and display all countries.


## 🌐 API Endpoints Used

This project uses the **REST Countries API**.

### Base URL
https://restcountries.com/v3.1/

1️⃣ Get All Countries
Used on initial page load:
https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,cca3

 2️⃣ Search by Country Name
Used when searching (minimum 2 characters):
https://restcountries.com/v3.1/name/{countryName}?fields=name,flags,region,population,capital,cca3

Example:
https://restcountries.com/v3.1/name/canada?fields=name,flags,region,population,capital,cca3


3️⃣ Filter by Region
Used when selecting a region:
https://restcountries.com/v3.1/region/{region}?fields=name,flags,region,population,capital,cca3

Example:
https://restcountries.com/v3.1/region/europe?fields=name,flags,region,population,capital,cca3


## ✨ Features

- 🔍 Search countries (debounced search – 500ms)
- 🌎 Filter by region
- 📊 Sort by population
- ⚡ Loading skeleton UI
- ❌ Error handling with retry option
- 🧹 Clear filters option
- 📱 Responsive layout


## 📸 Screenshots
## Home Page
![Home Page](src/assets/screencapture-localhost-5175-2026-02-25-22_01_27.png)

### 🔎 Search Results Page
<img width="1920" height="839" alt="screencapture-localhost-5175-2026-02-25-22_16_46" src="https://github.com/user-attachments/assets/878bb554-b8dc-4044-86e7-d1f3e6a0f048" />




