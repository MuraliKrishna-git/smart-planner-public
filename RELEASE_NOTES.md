# Release Notes - Smart Planner v2.0.1

**Release Date:** January 04, 2025  
**Version:** 2.0.1 (Stable)

---

## 🚀 Highlights

This major release introduces the **"Total Privacy" Architecture**. Smart Planner is now a fully self-hosted, client-side application. You own your data, your API keys, and your cloud infrastructure.

### **New Features**
*   **BYOK (Bring Your Own Key):** Complete control over your backend. Connect your own Firebase project and Google Gemini API key directly within the app.
*   **Cross-Platform Sync:** Seamless real-time synchronization between Desktop, Web, and Mobile using your personal Firestore database.
*   **Enhanced AI Planning:**
    *   **Learning Paths:** Generate structured curriculums for new skills.
    *   **Build Projects:** Generate technical implementation plans for software projects.
*   **Native Google Sign-In:**
    *   **Android:** Uses native system account picker.
    *   **Desktop:** Uses secure system browser loopback flow.
*   **Secure Storage:** API keys are now encrypted on Desktop (using OS Keychain) and obfuscated on Web/Mobile.
*   **PIN Protection:** Settings are locked with a PIN. New users are forced to set a PIN for security.

---

## 📱 Android (APK) Release Notes

**Filename:** `SmartPlanner-v2.0.1.apk`

### **What's New**
*   **Native Performance:** Optimized Capacitor 5 runtime for smoother animations.
*   **Bottom Navigation:** New mobile-first navigation bar with a quick-action FAB button.
*   **Safe Area Support:** UI now respects notches and home bars on modern devices.
*   **Logout:** Added "Sign Out" button to the Profile page.

### **Installation & Setup**
1.  **Install:** Download and install the APK. (Allow "Unknown Sources" if prompted).
2.  **Setup:** On first launch, you will see the **Configuration Screen**.
3.  **Connect:**
    *   Upload your `google-services.json` (recommended) OR manually enter your Firebase Config.
    *   Enter your Gemini API Key.
4.  **Login:** Use **"Sign in with Google"** (requires SHA-1 setup) or **Email/Password**.

### **⚠️ Known Issues (Android)**
*   **Google Sign-In Freeze:** If you try to sign in with Google using the generic APK (without building it yourself with your own SHA-1), the loading spinner may spin forever.
    *   **Workaround:** Close the app completely (swipe away) and reopen it. Then use **Email/Password** login instead, or build the app from source to enable native Google Sign-In.

---

## 💻 Windows Desktop (EXE) Release Notes

**Filename:** `Smart Planner Setup 2.0.1.exe`

### **What's New**
*   **Secure Enclave:** Uses Windows DPAPI to encrypt your API keys at rest.
*   **Loopback Auth:** New secure OAuth flow that opens your default browser for Google Sign-In, avoiding insecure embedded webviews.
*   **System Tray:** App now integrates with the Windows taskbar.

### **Installation & Setup**
1.  **Install:** Run the installer. The app will launch automatically.
2.  **Setup:**
    *   Enter your Firebase Web Config (JSON).
    *   Enter your **OAuth Client ID** (Desktop type).
    *   Enter your Gemini API Key.
3.  **Login:** Click "Sign in with Google". This will open Chrome/Edge. Sign in there, and the app will automatically detect the login.

### **Known Issues (Desktop)**
*   **Firewall:** If the app cannot sign in, ensure your firewall allows connections to `localhost:42001` (used for the auth callback).

---

## 🛠 Fixes & Improvements (All Platforms)
*   **Fixed:** "White Screen" on startup in Desktop app (Protocol handler fix).
*   **Fixed:** `localStorage` access denied errors in Electron.
*   **Fixed:** Chat history not persisting across sessions.
*   **Fixed:** "Unauthorized Domain" errors during auth (Origin header enforcement).
*   **Improved:** Task list now groups by project or shows a flat list based on context.
*   **Improved:** Added "Forgot Password" flow for Email/Password users.
*   **Improved:** Added "Forgot PIN" flow using Re-authentication.

---

**Upgrade Instructions:**
This version introduces a new data schema. If you are upgrading from v1.x, you may need to re-enter your API keys. Your existing project data in Firestore remains safe.
