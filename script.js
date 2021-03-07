
      function openNav() {
        document.getElementById("sideNav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("sideNav").style.borderRight =
          "3px solid #ff5205";
      }

      function closeNav() {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        document.getElementById("sideNav").style.borderRight = "none";
      }