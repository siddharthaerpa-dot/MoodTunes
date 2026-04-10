# MoodTunes
# 🎧 MoodTunes

MoodTunes is an intelligent music web application that detects a user's mood using facial recognition and automatically plays songs based on their emotions.

---

## 🌟 Features

### 😊 Mood Detection

* Uses camera to detect user's facial expression
* Detects emotions like Happy, Sad, Angry, Calm

### 🎵 Smart Music Player

* Automatically plays songs based on mood
* Play / Pause / Next / Previous controls
* Progress bar with seek functionality

### 🔍 Search System

* Search songs instantly
* Real-time filtering results

### ❤️ Favorites

* Add songs to favorites
* Stored using local storage

### 📁 Playlists

* Create and manage playlists
* Open playlist → view songs
* Add / remove songs

### 📸 Mood Scanner

* Opens camera
* Detects mood
* Starts music automatically

---

## 🧭 Application Flow

### 🏠 Home Page

* Displays current mood
* Shows recommended songs

### 🔍 Search Page

* User can search songs
* Click to play

### ❤️ Favorites Page

* Shows saved songs

### 📁 Playlist Flow

1. Open Playlists
2. Click a playlist (e.g. Chill Vibes)
3. View songs inside playlist
4. Play / Add / Remove songs

### 📸 Mood Scan Flow

1. Click "Scan Mood"
2. Camera opens
3. Emotion detected
4. Songs play automatically

---

## 🖼 UI Layout Overview

### Sidebar Navigation

* Home 🏠
* Search 🔍
* Favorites ❤️
* Playlists 📁
* Scan Mood 📸

### Main Section

* Header with search bar & profile
* Dynamic content based on page

### Bottom Player

* Song info
* Controls (⏮ ▶ ⏭)
* Progress bar

---

## 🛠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python (Flask)

### Libraries

* OpenCV
* DeepFace
* NumPy

---

## 📂 Project Structure

```
MoodTunes/
│
├── index.html
├── style.css
├── script.js
│
├── backend/
│   └── app.py
│
├── songs/
│   ├── happy/
│   ├── sad/
│   ├── energetic/
│   ├── calm/
│
└── README.md
```

---

## ▶️ How to Run

### 1. Clone Repository

```
git clone https://github.com/your-username/MoodTunes.git
cd MoodTunes
```

### 2. Install Dependencies

```
pip install flask opencv-python deepface numpy
```

### 3. Run Backend

```
python backend/app.py
```

### 4. Open App

* Open `index.html` in browser

---

## 🎯 Future Enhancements

* 🎧 Spotify API integration
* 🌈 Dynamic background based on mood
* 📱 Mobile responsive design
* 👤 User authentication system
* ☁️ Cloud song storage

---

## 💡 Project Idea

MoodTunes combines Artificial Intelligence and Music to create a personalized listening experience by understanding user emotions in real-time.

---

## 👨‍💻 Author

Erpa Siddhartha

---
