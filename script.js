function scrollToSection(sectionID, btn) {
    let section = document.getElementById(sectionID);
    section.style.display="block";
    section.scrollIntoView({behavior: "smooth"});
    document.getElementById(btn).style.display="none";
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }