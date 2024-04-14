
setInterval(
  function(){
    ad = document.getElementsByClassName("style-scope ytd-ad-slot-renderer")[0];
      if(ad != null){
        ad.remove();
        console.log("removed ad");
      }
    },1000);