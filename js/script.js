let typed = new Typed('.text',{
  strings:["Full Stack Developer", "UI/UX Designer", "Mobile Developer Cohort at Bangkit Academy 2024"],
  typeSpeed:50,
  backSpeed:50,
  loop:true
})

VanillaTilt.init(document.querySelectorAll(".foto"), {
  max: 15,
  reset:false
});
VanillaTilt.init(document.querySelectorAll(".foto1"), {
  max: 15,
});


$.getJSON("assets/skills.json",(result)=>{
  const data = result
  for(let i = 0; i <data.length; i++) {
    const html = `
    <div class="card">
      <img src="${data[i].img}">
      <h3 style="color:white">${data[i].judul}</h3>
    </div>`

    $(".bg1").append(html)
  }
})


VanillaTilt.init(document.querySelectorAll(".prj"), {
  max: 15,
});

$(".card2").click((e)=>{
  const target = e.target
  if($(target).hasClass("card-img")){
    $(target).next("p.title").fadeOut()
    $(target).siblings(".show").slideToggle("slow")
  }
  else if($(target).hasClass("fa-xmark")){
    $(target).parent().parent().slideToggle("slow").delay(800)
    $(target).parent().parent().prev().delay(500).fadeIn()
  }
  e.preventDefault()
})


$("img.icon").click((e)=>{
  const target = e.target;
  $(target).toggleClass("show1");
  if($(target).hasClass("show1")){
    $("header nav").css("display","flex")
    $(target).attr("src","assets/images/x.svg")
  }else{
    $("header nav").css("display","none")
    $(target).attr("src","assets/images/bars.svg")
  }
})



$("nav a").click((e)=>{
  const target = e.target
  const href = $(target).attr("href")
  $("a.active").removeClass("active")
  
  switch(href){
    case "#container":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#aboutme":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#skills":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#education":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#projects":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#contact":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
  }
})


let offset =10; 
let duration = 300;

$(window).scroll(()=>{
  if ($(this).scrollTop() > offset) {
    $('.totop').stop().animate({top: "650px"},duration);
  } else {
    $('.totop').stop().animate({top: "0px"},duration);
  }
})


$(".totop").click((e)=>{
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: 0},duration);
  $('.totop').stop().animate({top: "0px"},duration);
  $("a.active").removeClass("active")
  $("a:nth-child(1)").addClass("active")
  return false;
})


$(".btn_aboutme").click(()=>{
  window.location="#aboutme"
})


$(".cv").click(()=>{
  window.open("assets/cv.pdf")
})

$(".view_pos_guide1").click(()=>{
  window.open("assets/LoginSebagaiAdmin.pdf")
})

$(".view_pos_guide2").click(()=>{
  window.open("assets/LoginSebagaiKasir.pdf")
})

$(".view_ecowheels").click(()=>{
  window.open("https://www.figma.com/proto/y7DHmRUzRV8wtzmqW417Vm/ECO-WHEELS?type=design&t=4ox8f5YaCilWcYfa-1&scaling=scale-down&page-id=0%3A1&node-id=8-463&starting-point-node-id=8%3A463&mode=design")
})

$(".view_mitrabersama").click(()=>{
  window.open("https://www.figma.com/proto/Yy6NlDLujc1WcU8e870IYQ/E-commerce-Mitra-Bersama?node-id=201-3&starting-point-node-id=201%3A40&scaling=scale-down&mode=design&t=NY75Aj3S2Gn8vYN7-1")
})

$(".view_crud").click(()=>{
  window.open("assets/CRUDBookStoreGuide.pdf")
})

$(".view_code_crud").click(()=>{
  window.open("https://github.com/AyuVirgiana/crud-admin-toko-buku")
})

$(".view_omahkita").click(()=>{
  window.open("https://www.figma.com/proto/e3yoHmjkQfCLKh6IDAjnLZ/OmahKita?type=design&node-id=1-1151&t=UekHPVJS6GigTlOy-1&scaling=min-zoom&page-id=0%3A1&mode=design")
})

$(".view_doc_omahkita").click(()=>{
  window.open("assets/UiUx.pdf")
})

$(".view_certif").click(()=>{
  window.open("assets/sertiflengkap.pdf")
})

$(".view_secondbite").click(()=>{
  window.open("https://drive.google.com/drive/folders/1chaCOFFjtmNyVpi0icqyds1lEfM1syQ8?usp=sharing")
})

$(".view_cisco").click(()=>{
  window.open("assets/SistemManajemenHotelMenggunakanCiscoPacketTracer.pdf")
})

$(".view_LOTKAL").click(()=>{
  window.open("https://www.figma.com/proto/iDE4H08pSyiaauuTsNmEKm/LOTKAL-NEW?type=design&node-id=1-2&t=O929cCKH6a0smhXc-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design")
})
