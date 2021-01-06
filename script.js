
  document.querySelector(".dropdown").addEventListener("click", function () {
    document.querySelector(".side-menu").classList.add("active");
  
    //Pievieno klasi
    this.classList.add("active");
  
    //Noņem klasi
    this.classList.remove("active");
  
    //pārbaudam vai satur klasi
    if (this.classList.contains("active")) {
      //izspildās ja patiess
    } else {
      //izpildās citā gadījumā
    }
  });
    