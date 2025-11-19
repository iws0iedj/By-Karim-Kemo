
var buttons = document.querySelectorAll("header button");
var sections = document.querySelectorAll("section");


for(var i = 0 ; i<buttons.length ;i++){


    buttons[i].addEventListener("click" , function(){

        if(window.innerWidth <= 500)
                 closePage();

        let index = Array.from(buttons).indexOf(this) ;

     
        switch(index){
            case 0: 
                scrollToSection(sections[0]);
            break;


             case 1: 
                scrollToSection(sections[1]);
            break;


             case 2: 
                scrollToSection(sections[2]);
            break;

             case 3: 
                scrollToSection(sections[3]);
            break;

             case 4: 
                scrollToSection(sections[4]);
            break;
        }

    });
}







function scrollToSection(target){
target.scrollIntoView({
        behavior: 'smooth', 
        
        block: 'start'
    });
}





var header = document.querySelector("header");
var pages = document.querySelectorAll("header button");
var open = document.getElementById("options");
var close = document.getElementById("close");

close.addEventListener("click" , function(){

closePage();
});



open.addEventListener("click" , function(){

      header.style.height = "180px";

    for(i = 0 ; i<pages.length ;i++){
        pages[i].style.display = "block";
    }

      close.style.display = "block";
    open.style.display = "none";
});




function closePage(){
    
    header.style.height = "50px";

    for(i = 0 ; i<pages.length ;i++){
        pages[i].style.display = "none";
    }

    close.style.display = "none";
    open.style.display = "block";


}


window.addEventListener("resize", function() {

    if(this.window.innerWidth > 500){
        open.style.display = "none";
        close.style.display = "none";
        header.style.height = "50px"

        for(i = 0 ; i<pages.length ;i++){
        pages[i].style.display = "block";
    }

    }

    else{
           for(i = 0 ; i<pages.length ;i++){
        pages[i].style.display = "none";
    }
     open.style.display = "block";
    }

});

