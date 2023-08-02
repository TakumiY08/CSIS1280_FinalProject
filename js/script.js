function calculateResults() {

   var amtHouse, amtEdu, amtVac;
   var moHouse, moEdu, moVac;

   amtHouse = document.getElementById('txtHouse').value;
   amtEdu = document.getElementById('txtEducation').value;
   amtVac = document.getElementById('txtVacation').value;

   moHouse = document.getElementById('txtHouseMonthly').value;
   moEdu = document.getElementById('txtEducationMonthly').value;
   moVac = document.getElementById('txtVacationMonthly').value;

   if (isNaN(amtHouse) || isNaN(amtEdu) || isNaN(amtVac) || isNaN(moHouse) || isNaN(moEdu) || isNaN(moVac)) {
       window.location.href = "https://takumiy08.github.io/CSIS1280_FinalProject/index.html";
      alert("Please input numbers only.");
   }

   if ((amtHouse === "") || (amtEdu === "") || (amtVac === "") || (moHouse === "") || (moEdu === "") || (moVac === "")) {
      window.location.href = "https://takumiy08.github.io/CSIS1280_FinalProject/index.html"; 
      alert("Input cannot be empty.");
       
   }

   localStorage.setItem('set_txtHouseAmt', amtHouse);
   localStorage.setItem('set_txtEducationAmt', amtEdu);
   localStorage.setItem('set_txtVacationAmt', amtVac);

   localStorage.setItem('set_txtHouseMonthly', moHouse);
   localStorage.setItem('set_txtEducationMonthly', moEdu);
   localStorage.setItem('set_txtVacationMonthly', moVac);
}

function checkNumber() {
   var input = document.getElementById("numberInput").value.trim();

   if (isNaN(input)) {
       alert("Please enter a valid number.");
   }
}

window.onload = function () {

   document.getElementById('txtHouseAmt').value = localStorage.getItem('set_txtHouseAmt');
   document.getElementById('txtEducationAmt').value = localStorage.getItem('set_txtEducationAmt');
   document.getElementById('txtVacationAmt').value = localStorage.getItem('set_txtVacationAmt');

   document.getElementById('txtHouseMonthly').value = localStorage.getItem('set_txtHouseMonthly');
   document.getElementById('txtEducationMonthly').value = localStorage.getItem('set_txtEducationMonthly');
   document.getElementById('txtVacationMonthly').value = localStorage.getItem('set_txtVacationMonthly');
}


//Modal popup in apply page
function OpenForm(argument) {
   console.log(argument);
   const mediaSize = window.matchMedia('(min-width: 769px)');
   let popup;
   let title;
   if (mediaSize.matches){
      popup = document.getElementById("modal-popup");
      title = document.getElementById("lblTitle");
   }
   else {
      popup = document.getElementById("modal-popup-mobile");
      title = document.getElementById("lblTitleMobile");
   }
   popup.style.display = "block"; 
   //Change title
   title.innerHTML = argument + " " + title.innerHTML;
}

function CloseForm(argument) {
   let popup;
   let title;
   if(argument == 'btnClose')
   {
      popup = document.getElementById("modal-popup");
      title = document.getElementById("lblTitle");

      //Clear contents
      document.getElementById("txtFirstName").value = "";
      document.getElementById("txtLastName").value = "";
      document.getElementById("txtEmail").value = "";
   }
   else if(argument == 'btnCloseMobile')
   {
      popup = document.getElementById("modal-popup-mobile");
      title = document.getElementById("lblTitleMobile");

      //Clear contents
      document.getElementById("txtFirstNameMobile").value = "";
      document.getElementById("txtLastNameMobile").value = "";
      document.getElementById("txtEmailMobile").value = "";
   }

   popup.style.display = "none";
   title.innerHTML = "Application Form";
}

function CompleteApply() {
   alert("Thank you for your apply.\nWe will contact you in a few days!");
}
