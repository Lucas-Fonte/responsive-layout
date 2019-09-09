let width = "250px";

  function navHandler(){

    if(document.getElementById("mySidebar").style.width == width){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("calendar").style.fontSize = "12px";
    }
    else{
      if(screen.width < 550){
        width =  (screen.width - 40)+"px";
        document.getElementById("calendar").style.fontSize = "2px";

      }
      document.getElementById("mySidebar").style.width = width;
      document.getElementById("main").style.marginLeft = width;
      document.getElementById("calendar").style.fontSize = "10px";

    }

  }