# Advanced Build Guide - Smart Planner

This guide is for users who want to build their own version of the app to enable **Native Google Sign-In** or to ensure maximum privacy by building from source.

There are two ways to do this. Choose the one that fits your skills.

---

## ☁️ Option A: The "Cloud Build" (No Android Studio Required)

**Best for:** Users who don't want to install heavy software.  
**Limitation:** Native Google Sign-In requires a signing key. If you use this method without injecting a keystore, Google Sign-In might fail. **Email/Password login is recommended for this method.**

### **1. Fork the Repository**
1.  Go to the **Public Build Kit** repository (the one with `dist/` and `android/` folders).
2.  Click **Fork** to create a copy in your own GitHub account.
3.  **Important:** Go to **Settings** -> **General** and change visibility to **Private** if you plan to commit any configuration files directly (though we recommend using Secrets).

### **2. Prepare Your Secret**
1.  Download your `google-services.json` from Firebase Console.
2.  Convert it to a Base64 string (so it can be stored securely).
    *   **Mac/Linux:** `base64 -i google-services.json`
    *   **Windows (PowerShell):** 
        ```powershell
        [Convert]::ToBase64String([IO.File]::ReadAllBytes("google-services.json"))
        ```
3.  Copy the long string output.

### **3. Add Secret to GitHub**
1.  Go to your Forked Repo -> **Settings** -> **Secrets and variables** -> **Actions**.
2.  Click **New repository secret**.
3.  **Name:** `GOOGLE_SERVICES_JSON_B64`
4.  **Value:** Paste the Base64 string you copied.
5.  Click **Add secret**.

### **4. Trigger Build**
1.  Go to the **Actions** tab.
2.  Select **Build Android APK**.
3.  Click **Run workflow**.
4.  When finished, download the `smart-planner-debug` artifact.

---

## 📱 Option B: The "Local Build" (Full Control)

**Best for:** Power users who want **Native Google Sign-In**.  
**Requirement:** You must install **Android Studio** and **Node.js**.

### **Why this method?**
To use "Sign in with Google" on Android, Google requires your app's unique **SHA-1 Fingerprint**. This fingerprint comes from the specific computer/key used to build the app. By building locally, you can easily get this fingerprint and register it in Firebase.

### **1. Setup Environment**
1.  Install **Node.js** (v18+).
2.  Install **Android Studio**.
3.  Clone the repository to your computer:
    ```bash
    git clone https://github.com/your-repo/smart-planner-dist.git
    cd smart-planner-dist
    ```
4.  Run `npm install`.

### **2. Configure Firebase**
1.  Download `google-services.json` from Firebase Console.
2.  **Move it** to: `android/app/google-services.json`.

### **3. Get Your SHA-1 Fingerprint**
1.  Open a terminal in the project folder.
2.  Run the signing report:
    *   **Windows:** `cd android && .\gradlew signingReport`
    *   **Mac/Linux:** `cd android && ./gradlew signingReport`
3.  Scroll up to find `Task :app:signingReport`.
4.  Copy the **SHA1** value from the `debug` section.
5.  **Go to Firebase Console** -> Project Settings -> Your Android App -> **Add fingerprint**.
6.  Paste the SHA-1 and save.

### **4. Configure Client ID (Crucial Step)**
1.  Go to Google Cloud Console -> Credentials.
2.  Copy your **Web Client ID**.
3.  **Update `strings.xml`:**
    *   Open `android/app/src/main/res/values/strings.xml`.
    *   Replace the value of `server_client_id` with your Web Client ID.
4.  **Update `capacitor.config.ts`:**
    *   Open `capacitor.config.ts` in the root folder.
    *   Find the line `serverClientId: 'YOUR_WEB_CLIENT_ID...'`.
    *   Replace the placeholder with your actual Web Client ID.

### **5. Build & Install**
1.  Sync the project:
    ```bash
    npx cap sync
    ```
2.  Open in Android Studio:
    ```bash
    npx cap open android
    ```
3.  Connect your phone via USB (ensure USB Debugging is on).
4.  Click the green **Play (Run)** button in Android Studio.

**Success!** You now have a custom-built app with working Native Google Sign-In connected to your own Firebase.
