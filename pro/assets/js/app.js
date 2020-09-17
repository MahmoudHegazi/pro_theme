$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

const sections = document.querySelectorAll(".section");
const hide_noob_boostrap = document.querySelectorAll(".demo1");

const myul = document.querySelector("#the_ul");

const navbar = document.querySelector(".navbar");
let mybutton = document.getElementById("topbtn");
let mynav = document.querySelector('.navbar');
const app = { 
     name: "landing_page_project",
     author: "Mahmoud_hegazy",
     mail: "mahmod.hagzy@gmail.com",
     links: [],
     sections: [],
     active_section: null,
     active_link: null,
     // count function start
     count_sections: (get_sections) => {
       // get sections count
       sections.forEach( (section)=> {
       

         // advanced step to secure and get ultimate runing with troubelshoot

         app.sections.push(section);
         let sections_list =  app.sections;
         let sections_count = sections_list.length;
         let sections_meta  = [sections_list, sections_count];
         return sections_list;


     });
     // end foreach loop
         
       },
     // count_end
     // create_link
     create_links: (x) => {
     
           get_sections = app.count_sections(sections);
           const fragment = document.createDocumentFragment();
           x.forEach( (section) => {
           //create Links
           
           //alert(section);
           let   link_text = section.getAttribute("data-link-type");
           const newli = document.createElement( 'li' );
           const newlink = document.createElement( 'a' );
           const text = document.createTextNode(link_text);           
           const create_text = document.createTextNode(link_text);
           newlink.href="#values";
           // get section data-type attrbuite value
           
           newli.appendChild(newlink);
           newlink.appendChild(create_text);
           newlink.classList.add("mynav_link");
           newlink.id = link_text;
           //append the links to the app_object links array
           app.links.push(newlink);     
           
           // each time throgh the loop append new li elemnt to fragemnt
           fragment.appendChild(newli);
            
        });
         
         //for better performance we append document fragment to links 1 time only          
         myul.appendChild(fragment);

         
         console.log(this.links);
         return app.links;  

},
   // start nav build
  nav_builder: ()=> {
    window.addEventListener('DOMContentLoaded', (event) => {
   
    app.create_links(sections);
    console.log('DOM fully loaded and parsed');
    });
  },  
  // end nav build
  // start of scrol and detect elem

  applay_active: ()=> {
    window.addEventListener('scroll', (event) => {
   
    app.get_active();
    console.log('Element Detected');
});
  },
    get_active: function myFunction() {
        
  
  // remove  active class section
    function cleaner() {
    sections.forEach((section) => { 
       section.classList.remove("active");
    });
    console.log("active_class_removed")
  }
  
  
  // check active link function
   function  which_link_active( section ) {
        
        let section_data =  section.getAttribute("data-link-type");
        let alllinks = document.querySelectorAll( ".mynav_link" );
        // remove any prvious active link
        alllinks.forEach( (link, index, array) => {
            array[index].classList.remove("active_link");            
          });
          
        // add active status to the link  
        alllinks.forEach( (link, index, array) => {
        if (link.textContent == section_data) {
            array[index].classList.add("active_link");
            
          } 
        
        });
  }

  sections.forEach( (elm) => { 
  const rect = elm.getBoundingClientRect();
  const x = rect.left;
  const y = rect.top;
  const w = rect.width;
  const h = rect.height;
  const b = rect.bottom;
  
  let backgrounds = ["crimson", "gold", "black", "lightgra", "lightblue", "tomato"];
  

  let get_space = h * 10 / 100; 
  if (b <= (window.innerHeight + get_space) && y >= 0) {
    //elm.style.background = "blue";
    cleaner();
    elm.classList.add("active");
    which_link_active(elm);
    //alert(rect.bottom);
    //return elm;
  };

  });
  },

did_scrol: function scrolled_or_what() {
 // When the user scrolls down 20px from the top of the document, show the button
  
  window.onscroll = function() {
  scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 ||        document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mynav.style.background = "#f4511e";
    
  } else {
    mybutton.style.display = "none";
    mynav.style.background = "transparent";
    app.links_remover();
    
  }
}

}, 
 back_top: function back_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
},

 backer: ()=> {
      app.did_scrol();
 },

  start: ()=> {
    app.nav_builder();
    app.applay_active();
    app.backer();
    
  },
  links_remover: () => {
                let alllinks = document.querySelectorAll( ".mynav_link" );
        // remove any prvious active link
        alllinks.forEach( (link, index, array) => {
            array[index].classList.remove("active_link");            
          });
  }
}

app.start();


