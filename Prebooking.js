// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCV0htRpkBUM_nMR-NVlYwkBN4gMJWiD64",
    authDomain: "food-flow-4f590.firebaseapp.com",
    databaseURL: "https://food-flow-4f590-default-rtdb.firebaseio.com",
    projectId: "food-flow-4f590",
    storageBucket: "food-flow-4f590.appspot.com",
    messagingSenderId: "407610987375",
    appId: "1:407610987375:web:fdea58ef02fe95af6cce9a",
    measurementId: "G-TQN5FTSMPL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function donateFood() {
  var donorName = document.getElementById('donor_name').value;
  var foodType = document.getElementById('food_type').value;
  var quantity = document.getElementById('quantity').value;

  database.ref('foodDonations').push({
    donorName: donorName,
    foodType: foodType,
    quantity: quantity
  }).then(() => {
    alert('Food donation recorded successfully!');
  }).catch(error => {
    console.error('Error recording donation:', error);
    alert('Failed to record donation. Please check console for details.');
  });
}
