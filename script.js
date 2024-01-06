let btm

function Event(url,Id){
      btm = document.getElementById(Id)
      btm.addEventListener('click',function() {
        // Use window.location.href to navigate to the specified URL
        window.location.href = url;
      })
      
    }

Event('home.html','btm1');
Event('Contact.html','btm2');
Event('AboutMe.html','btm3');
Event('Interested.html','btm4');
    
 function change(){
 let element =  document.querySelector(".boxes");

 element.addEventListener('click',()=>{
  
  element.classList.toggle("zoomedimage");
 })
}
change()

