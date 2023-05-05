function scrollToSection(sectionID, btn) {
    let section = document.getElementById(sectionID);
    section.style.display="block";
    section.scrollIntoView({behavior: "smooth"});
    document.getElementById(btn).style.display="none";

}