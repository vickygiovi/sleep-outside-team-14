
import { loadHeaderFooter } from "./utils.mjs"



loadHeaderFooter()

document.addEventListener("DOMContentLoaded", function () {
    const alertBox = document.querySelector(".alert");
  
    if (alertBox) {
      alertBox.style.display = "block"; // Show the alert
      setTimeout(() => {
        alertBox.style.display = "none"; // Hide after 5 seconds
      }, 5000);
    }
  });
