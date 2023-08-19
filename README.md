# CountryAPI-Android-App

![image](https://github.com/wtse1225/CountryAPI-Android-App/assets/105259859/acbc373a-c34b-485e-be46-19dc74b3033e)
![image](https://github.com/wtse1225/CountryAPI-Android-App/assets/105259859/259ac960-d0d0-46e5-891e-5c7b3754a8cc)
![image](https://github.com/wtse1225/CountryAPI-Android-App/assets/105259859/b5161606-fea6-4e8c-9815-4e5629986fe2)
![image](https://github.com/wtse1225/CountryAPI-Android-App/assets/105259859/d0595c72-b3f6-41a2-afed-f5de0def15e6)
![image](https://github.com/wtse1225/CountryAPI-Android-App/assets/105259859/c4af5ec6-6ff2-4c36-8156-f8782b327300)

#### Technologies Used:
Ionic Framework, Angular, Typescript, Capacitor Preferences API

#### Objective:
Developed an application that provides users with information about world countries, allowing them to view a list of countries, access country details, and manage their favorite countries.

#### Key Features:
Screen 1: List of Countries:
Utilized Ionic Web Components to construct the user interface.
Retrieved a list of countries' data from the REST Countries API endpoint using Ionic HTTP client.
Displayed country flags, names, and alpha3codes in rows.

Screen 2: Country Details Screen:
Queried the REST Countries API for country details using the alpha3code.
Displayed country flag, name, capital, and population.
Included an "Add To Favorites" button to add the country to the Favorites List.
Implemented a Toast notification to indicate the success or failure of adding to favorites.
Allowed users to return to Screen 1 using a "Back" button in the toolbar.
Utilized Capacitor Preferences API for persistent storage of favorites.

Screen 3: Favorites Screen:
Displayed a list of favorited countries' alpha3codes.
Implemented swipe functionality to remove countries from the favorites list.
Included a "Delete All" button in the toolbar to remove all countries from favorites.
Utilized Capacitor Preferences API to ensure persistent storage of favorites.

Data Modeling and Persistence:
Defined a custom TypeScript interface to model country data.
Managed data persistence using the Capacitor Preferences API.

#### Project Description:
The Country Information App provides users with a comprehensive view of world countries. It leverages Ionic Web Components, TypeScript, and Capacitor Preferences API to offer a user-friendly experience. With features like country details, favorites management, and persistent storage, the app showcases the ability to interact with APIs, handle user interactions, and ensure seamless data management. The project demonstrates proficiency in front-end development, API integration, and data persistence in the Ionic framework.
