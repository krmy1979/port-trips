// ===============================================
//  הגדרות האפליקציה "נגלות נמל"
//  ערוך את הקובץ הזה בלבד. ההסבר המלא נמצא ב-README.md
// ===============================================
window.PORT_APP_CONFIG = {
  // שלב 1: הדבק כאן את הגדרות Firebase שלך (מ-Project settings → Your apps → Config).
  // כל עוד זה null, האפליקציה רצה ב"מצב הדגמה" ושומרת רק על המכשיר הזה.
  firebase: {
    apiKey: "AIzaSyDwMUxm5qCxub1bkNpSowiYqGWU41L-la8",
    authDomain: "port-trips.firebaseapp.com",
    projectId: "port-trips",
    storageBucket: "port-trips.firebasestorage.app",
    messagingSenderId: "294941636896",
    appId: "1:294941636896:web:f9fae7bfcf490731f93f45"
  },
  /* דוגמה:
  firebase: {
    apiKey: "AIza...",
    authDomain: "port-trips.firebaseapp.com",
    projectId: "port-trips",
    storageBucket: "port-trips.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123"
  },
  */

  // המנהלים מוגדרים רק בחוקי האבטחה של Firebase (Firestore → Rules), כדי שהכתובת לא תופיע בקוד הציבורי.

  // שם הצוות שיופיע בכותרת
  teamName: "צוות פריקת רכבים"
};
