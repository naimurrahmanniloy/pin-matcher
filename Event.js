   /* PIN GENERATION AREA*/
   const generate_btn = document.getElementById("generate-btn");
   const generation_form = document.getElementById("generation-form").innerText;
   generate_btn.addEventListener('click', function() {

       const RandomInt = getRandomInt(1000, 9999);
       document.getElementById("generation-form").value = RandomInt;
       document.getElementById("matching").style.display = "none";
       document.getElementById("not-matching").style.display = "none";
       document.getElementById("blank").style.display = "none";
       document.getElementById("submit").disabled = false;
       document.getElementById("Checking-form").value = "";
       document.getElementById("try").innerText = 3;


   })


   function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }


   /* PIN GENERATION AREA*/


   /* NUMBER EVENT HANDLER AREA*/


   const num0 = document.getElementById("num0");
   num0.addEventListener('click', function() {
       numberInForm("num0");
   })


   const num1 = document.getElementById("num1");
   num1.addEventListener('click', function() {
       numberInForm("num1");
   })

   const num2 = document.getElementById("num2");
   num2.addEventListener('click', function() {
       numberInForm("num2");
   })

   const num3 = document.getElementById("num3");
   num3.addEventListener('click', function() {
       numberInForm("num3");
   })

   const num4 = document.getElementById("num4");
   num4.addEventListener('click', function() {
       numberInForm("num4");
   })

   const num5 = document.getElementById("num5");
   num5.addEventListener('click', function() {
       numberInForm("num5");
   })

   const num6 = document.getElementById("num6");
   num6.addEventListener('click', function() {
       numberInForm("num6");
   })

   const num7 = document.getElementById("num7");
   num7.addEventListener('click', function() {
       numberInForm("num7");
   })

   const num8 = document.getElementById("num8");
   num8.addEventListener('click', function() {
       numberInForm("num8");
   })

   const num9 = document.getElementById("num9");
   num9.addEventListener('click', function() {
       numberInForm("num9");
   })
   const clearBtn = document.getElementById("clear");
   clearBtn.addEventListener('click', function() {
       document.getElementById("Checking-form").value = "";

   })

   const delBtn = document.getElementById("del");
   delBtn.addEventListener('click', function() {
       const formValue = document.getElementById("Checking-form").value;
       const updatedFormValue = formValue.slice(0, -1);
       document.getElementById("Checking-form").value = updatedFormValue;
   })

   const submitBtn = document.getElementById("submit");
   submitBtn.addEventListener('click', function() {
       const checkingFormValue = parseInt(document.getElementById("Checking-form").value);
       const generationFormValue = parseInt(document.getElementById("generation-form").value);
       if (document.getElementById("generation-form").value == "") {
           document.getElementById("blank").style.display = "block";
           document.getElementById("matching").style.display = "none";
           document.getElementById("not-matching").style.display = "none";
       } else if (checkingFormValue == generationFormValue) {
           document.getElementById("matching").style.display = "block";
           document.getElementById("not-matching").style.display = "none";
           document.getElementById("blank").style.display = "none";
       } else {
           const trySpan = document.getElementById("try").innerText;
           let tryInt = parseInt(trySpan);
           if (tryInt <= 1) {
               document.getElementById("submit").disabled = true;
               tryInt -= 1;
               document.getElementById("try").innerText = tryInt;
           } else {
               tryInt -= 1;
               document.getElementById("try").innerText = tryInt;
           }

           document.getElementById("not-matching").style.display = "block";
           document.getElementById("matching").style.display = "none";
           document.getElementById("blank").style.display = "none";
       }
   })

   function numberInForm(id) {
       const numText = document.getElementById(id).innerText;
       document.getElementById("Checking-form").value += numText;
   }