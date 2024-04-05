function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            header.classList.add("active");
            lol.src = "pic/bulb2.png";
        }else{
            header.classList.remove("active");
            lol.src = "pic/bulb.png";
        }
        
    })
}
myHeader();

function myBars(){
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function(){
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bars.src = "pic/menu.png"
        }else{
            nav.style.right = "0%";
            bars.src = "pic/x.png"
        }
        nav.classList.toggle("new")
    }
    
    
}
myBars()

function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box ");
    plus.onclick = ()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "pic/pause.png"
        }else{
            videos.pause();
            player.src = "pic/play.png"
        }
    }
}
myVideo();

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"
        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }

}
toTop();













/*     new  Contact us   */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();




    var message = document.getElementById('message').value.trim();
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    var isValid = true;

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    if (name === '') {
        nameError.innerHTML = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = 'Invalid email format';
        isValid = false;
    }

    if (message === '') {
        messageError.innerHTML = 'Message is required';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
/*  end contact us */




/*   add to cart  */
function addToCart(product) {
  const cartItems = document.getElementById('cartItems');
  const item = document.createElement('li');
  item.textContent = product;
  cartItems.appendChild(item);

  // Validation animation
  item.classList.add('animate-validation');
  setTimeout(() => {
    item.classList.remove('animate-validation');
  }, 1000);
}




// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});



// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });







/*  order  */





function checkmob(){
    var str=document.getElementById("mblenmb").value;
var ptr=/^07[072568][0-9]{7}$/;

var chck=ptr.test(str);

if(!chck)
alert("Moblie Number is Incorrect");
}
function createBill(){
    var index=0;
    var items = ["null", "null", "null","null"];
    var quantities = ["null", "null", "null","null"];
    var prices = ["null", "null", "null","null"];
                            
                            
                            
    var e1 = document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    if(itemselected1!="1"){
    items[index]=itemselected1;
    quantities[index] = document.getElementById("q1").value;
    prices[index] = document.getElementById("p1").value;
    index++;
    }
                
    
    var e2 = document.getElementById("item2");
    var itemselected2 = e2.options[e2.selectedIndex].value;
    if(itemselected2!="1"){
    items[index]=itemselected2;
    quantities[index] = document.getElementById("q2").value;
    prices[index] = document.getElementById("p2").value;
    index++;
    }
    
    var e3 = document.getElementById("item3");
    var itemselected3 = e3.options[e3.selectedIndex].value;
    if(itemselected3!="1"){
    items[index]=itemselected3;
    quantities[index] = document.getElementById("q3").value;
    prices[index] = document.getElementById("p3").value;
    index++;
    }
    
    var e4 = document.getElementById("item4");
    itemselected4 = e4.options[e4.selectedIndex].value;
    if(itemselected4!="1"){
    items[index]=itemselected4;
    quantities[index] = document.getElementById("q4").value;
    prices[index] = document.getElementById("p4").value;
    index++;
    }
    
    var fTot=0;
    strt(1);
    for(var i=0;i<index;i++){
    document.write("<tr>");
    createtbl(items[i]);
    createtbl(quantities[i]);
    createtbl(prices[i]);
    var tot=parseInt(quantities[i])*parseInt(prices[i]);
    document.write("<td>"+tot+"</td>");
    fTot+=tot;
    document.write("</tr>");
    }
    document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>"+fTot+"</td><tr>");
    strt(2);	
    }
    function createtbl(x){		
    document.write("<td>"+x+"</td>");
    }
    
    function strt(n){
    if(n==1){
    document.writeln("<h1 style=\"text-align:center;\">The Bill</h1>");
    document.writeln("<table width=\"90%\" border=\"1\">");
    document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");
    }
        else
        document.write("</table>");
    }
    
    function createTot(x,y){
    var tot=parseInt(x)*parseInt(y);
    document.write("<td>"+tot+"</td>");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






















