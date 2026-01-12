# Smart Planner - User Setup Guide

Welcome to **Smart Planner**! This app is designed with **privacy first**. We do not own your data—**YOU do**.

Because of this, you need to connect the app to your own personal cloud services (Google Firebase & AI). This is a one-time setup that gives you complete control and security.

---

## 🛠 Prerequisites (Free Accounts)

Before you start, ensure you have:
1.  A **Google Account** (Gmail).
2.  Access to a computer (for the initial setup steps).

---

## 🚀 Step 1: Create Your Cloud Backend (Firebase)

This is where your tasks, projects, and profile will be stored securely.

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Create a project"**.
    *   Name it `Smart Planner` (or anything you like).
    *   Disable Google Analytics (optional, makes setup faster).
    *   Click **Create Project**.
3.  **Enable Authentication:**
    *   In the left menu, go to **Build > Authentication**.
    *   Click **Get started**.
    *   Select **Email/Password** -> Enable -> Save.
    *   Select **Google** -> Enable -> Save.
4.  **Enable Database:**
    *   Go to **Build > Firestore Database**.
    *   Click **Create database**.
    *   Choose a location (e.g., `nam5 (us-central)`).
    *   Select **Start in test mode** (The app will apply security rules automatically later).
    *   Click **Create**.

---

## 🔑 Step 2: Get Your Keys

### **A. Get Firebase Config (For All Platforms)**
1.  In Firebase Console, click the **Gear Icon** (Project Settings).
2.  Scroll down to **"Your apps"**.
3.  Click the **Web (</>)** icon.
4.  Register app (Name: "Smart Planner Web").
5.  **Copy the Config:** You will see a code block with `const firebaseConfig = { ... }`.
    *   **Copy everything inside the `{ }` brackets.**
    *   *Tip:* Save this in a text file named `firebase.json` for easy upload.

### **B. Get Gemini API Key (For AI Features)**
1.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Click **Create API key**.
3.  Select your Firebase project (or create a new one).
4.  **Copy the key** (starts with `AIza...`).

### **C. Get OAuth Client ID (For Windows Desktop Only)**
*Skip this if you are only using Android.*

1.  Go to [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
2.  Click **+ Create Credentials > OAuth client ID**.
3.  Application Type: **Desktop app**.
4.  Name: "Smart Planner Desktop".
5.  Click **Create**.
6.  **Copy the Client ID** (ends in `.apps.googleusercontent.com`).
7.  **IMPORTANT:** Click the Edit (Pencil) icon on the ID you just created.
    *   Under **Authorized redirect URIs**, click **Add URI**.
    *   Paste: `http://127.0.0.1:42001`
    *   Click **Save**.

---

## 📱 Android Setup Instructions

1.  **Install the App:** Open the `.apk` file on your phone.
2.  **Launch:** You will see the "App Configuration" screen.
3.  **Enter Config:**
    *   **Option A (Easy):** If you have your `google-services.json` file (from Firebase Settings), click **"Auto-fill from JSON"** and select it.
    *   **Option B (Manual):** Manually paste the API Key, Project ID, and App ID from Step 2A.
4.  **Enter AI Key:** Paste your Gemini API Key.
5.  **Save & Launch:** The app will restart.
6.  **Login:** Use Email/Password or Google Sign-In.

> **Note:** If Google Sign-In fails on Android with "Something went wrong", you need to add your app's SHA-1 fingerprint to Firebase. (See Advanced Guide).

---

## 💻 Windows Desktop Setup Instructions

1.  **Install:** Run the `.exe` installer.
2.  **Launch:** You will see the "App Configuration" screen.
3.  **Enter Config:**
    *   Paste the Firebase Config values (Step 2A).
    *   Paste the **OAuth Client ID** (Step 2C).
    *   Paste the **Gemini API Key** (Step 2B).
4.  **Save & Launch.**
5.  **Login:** Click "Sign in with Google".
    *   A browser window will open. Sign in there.
    *   Click "Open Smart Planner" when prompted.
    *   You are now logged in!

---

## ❓ Need Help?

*   **Reset Keys:** If you made a mistake, click the **Gear Icon** in the app (top right or profile page) to reset the configuration.
*   **Forgot PIN:** Click "Forgot PIN?" on the Settings screen. You will need to sign in again to verify your identity.
*   **Data Privacy:** Your keys are stored **encrypted** on your device. We never see them.
