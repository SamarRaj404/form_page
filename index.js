document.addEventListener("click", function() {
    // Attach event listener to the "Next" button
    let button2=document.querySelector('.button2')
    button2.addEventListener("click", showpage2);
  
    // Attach event listener to the "Prev" button
    let button1=document.querySelector('.button1')
   button1.addEventListener("click", showpage1);
  });
  
  function showpage2() {
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
  
    if (fname && phone) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
    } else {
      alert("Please fill in all fields on Page 1.");
    }
  }
  
  function showpage1() {
    document.getElementById("fathername").value;
    document.getElementById("mothername").value;
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
  }
  



