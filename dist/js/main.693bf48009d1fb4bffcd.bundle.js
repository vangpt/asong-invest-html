window.addEventListener("DOMContentLoaded",(function(){for(var e=this.document,t=e.querySelector("#nav-btn"),i=e.querySelector("#nav-sp"),s=e.querySelector("#nav-close-btn"),a=e.querySelector("#backdrop"),d=e.querySelectorAll(".nav-item-header"),n=0;n<d.length;n++)d[n].getAttribute("href")===window.location.pathname&&d[n].classList.add("border-primary");t.addEventListener("click",(function(){i.classList.contains("active")?(i.classList.remove("active"),a.classList.remove("fixed"),a.classList.add("hidden"),e.body.style.overflow="initial"):(i.classList.add("active"),a.classList.add("fixed"),a.classList.remove("hidden"),e.body.style.overflow="hidden")})),s.addEventListener("click",(function(){i.classList.remove("active"),a.classList.remove("fixed"),a.classList.add("hidden"),e.body.style.overflow="initial"}))}));