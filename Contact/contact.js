const form = document.getElementById("contactForm");
  const successBox = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();          
    
   
    successBox.style.display = "block";
    successBox.classList.add("show");  
    
    form.reset();

    
    setTimeout(() => {
      successBox.classList.remove("show");
     
      setTimeout(() => successBox.style.display = "none", 150);
    }, 5000);
  });