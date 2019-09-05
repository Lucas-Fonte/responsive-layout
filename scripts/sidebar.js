let width = "250px";

  function navHandler(){

    if(document.getElementById("mySidebar").style.width == width){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }else{
      document.getElementById("mySidebar").style.width = width;
      document.getElementById("main").style.marginLeft = width;
    }

  }