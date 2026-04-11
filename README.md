# Car Showcase Web Application

A responsive React web application developed as an educational project.  
This application displays different car brands using reusable components, dynamic JSON data rendering, Firebase authentication, and a real-time community chat system.

---

## Main Page Description

The Home page dynamically renders featured cars from a local JSON data array.

Each car is displayed using a reusable `CarCard` component that receives props.

The layout includes:

- A responsive horizontal scroll section  
- Interactive scroll buttons  
- A navigation Header with dropdown menu  
- A Footer with legal information and internal navigation  
- State management for interactive behavior  

The Home page is accessible via:

- http://localhost:5173  
- http://localhost:5173/home  

---

##  Authentication System

The application includes a full authentication system powered by **Firebase Authentication**.

Users can:

- Register with email and password  
- Log in with existing credentials  
- Log out securely  
- Access protected routes (Chat page)  

Protected routes are handled using a custom `RequireAuth` component.

###  Test Account

If you want to test the chat without registering:

Email: prueba@gmail.com

Password: 123456


---

##  Community Chat (Firebase Firestore)

The project includes a real-time community chat system using **Firebase Firestore**.

Features:

- Messages stored in Firestore database  
- Real-time updates using `onSnapshot`  
- Channel-based filtering (General, Ford, Toyota, Subaru, Porsche, Mitsubishi, Ferrari)  
- Search messages by text or user email  
- Auto-scroll to latest message  
- Only authenticated users can send messages  

This fulfills the requirement of reading and filtering JSON object arrays from Firebase.

---

##  Third-Party Libraries

This project uses:

- React Router DOM  
- Firebase (Authentication + Firestore)  
- React Leaflet  
- Leaflet  
- React Icons  

---

## Live Demo

The project is deployed with Firebase Hosting:

https://cars-11cf6.web.app

## RSS Feed

The application includes an RSS feed with the latest updates made to the project.

You can access the RSS feed directly in XML format here:

https://cars-11cf6.web.app/rss.xml

Each RSS item links to the **Updates page** of the deployed application, where the latest improvements and changes are described.

### RSS Reader

To visualize the RSS feed in a reader interface:

1. Go to the following website:

https://rssatom.com

2. Paste the RSS feed URL:

https://cars-11cf6.web.app/rss.xml

3. The reader will display the latest updates from the project and allow navigation to the related sections of the application.

## RSS Reader Screenshot

![RSS Reader Screenshot](./src/assets/images/rss-reader-screenshot.png)

---

## Installation & Setup

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/nefta142/cars

# Enter the project directory
cd cars/cars

# Install dependencies
npm install

# Start development server
npm run dev

---

## Car Data in Firebase

Car data is stored in a dedicated Firestore collection called:

- `cars`

Each car document contains fields like:

```json
{
  "id": "ford-focus-rs500",
  "brand": "Ford",
  "model": "Focus RS500",
  "year": 2007,
  "imageKey": "focus-rs-500"
}
```

The application reads car data dynamically from Firebase Firestore in pages such as:

- Home
- Brand pages
- Import / Export page

---

## Import / Export System

The project includes a dedicated page to manage car data import and export.

### Supported formats

- JSON
- CSV
- XML

### Import features

The application allows importing car data files and storing them in Firebase Firestore.

Supported input files:

- `datos.json`
- `datos.csv`
- `datos.xml`

When a file is imported, the current cars collection in Firestore is replaced by the imported data.

### Export features

The application allows exporting the current car data stored in Firestore into these formats:

- `datos.json`
- `datos.csv`
- `datos.xml`

The exported files are generated dynamically from the current data stored in Firebase.

---

## Example Import Files

The following example files are included in the project and can be used for testing imports:

- [datos.json](./public/examples/datos.json)
- [datos.csv](./public/examples/datos.csv)
- [datos.xml](./public/examples/datos.xml)

---

## Firebase Access Centralization

Access to Firebase is centralized inside the `services` folder.

Example structure:

```text
src/
  services/
    firebase/
      firebase.js
      cars-service.js
```

Pages and components do not access Firebase directly.  
Instead, they use functions from the service layer, such as:

- `getCarsFromFirestore()`
- `importCarsToFirestore()`
- `replaceCarsInFirestore()`

This keeps the Firebase logic centralized and organized.

---

## Third-Party Libraries Used for Import / Export

Additional libraries used in this delivery:

- **Papa Parse** for CSV import/export
- **xml2js** for XML export

For XML import in the browser, the project uses the native `DOMParser` API for compatibility with the frontend environment.

---

## Important Notes

- Car images are resolved in the frontend using `imageKey`
- Firestore stores only clean car data
- Importing a file replaces the current `cars` collection
- Exporting generates files dynamically from Firebase data