document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);


// <-------------Tabs-------------->
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();



  // <----------------Mobile-nav--------------->

  document.getElementById('navbutton2').style.display="none";
  document.getElementById('mobile-nav').style.display="none";
  function mbl() {
    document.getElementById('mobile-nav').style.display="block";
    document.getElementById('navbutton').style.display="none";
    document.getElementById('navbutton2').style.display="inline";
}
function mbv(){
  document.getElementById('mobile-nav').style.display="none";
  document.getElementById('navbutton2').style.display="none";
  document.getElementById('navbutton').style.display="inline";
}
