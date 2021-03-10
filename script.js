function openNav() {
  let sideNavigation = document.getElementById("sideNav");
  if (sideNavigation) {
    sideNavigation.style.width = "100%";
    sideNavigation.style.borderRight = "3px solid #ff5205";
  }

  let mainClass = document.getElementById("main");
  if (mainClass) {
    mainClass.style.marginLeft = "250px";
  }
}

function closeNav() {
  let sideNavigation = document.getElementById("sideNav");
  if (sideNavigation) {
    sideNavigation.style.width = "0";
    sideNavigation.style.borderRight = "none";
  }

  let mainClass = document.getElementById("main");
  if (mainClass) {
    mainClass.style.marginLeft = "0";
  }
}


