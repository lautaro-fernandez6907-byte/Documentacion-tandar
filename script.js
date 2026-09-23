const theme=document.querySelector("#theme");
theme.addEventListener("click",()=>{
 document.body.classList.toggle("light");
 localStorage.setItem("tandar-theme",document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("tandar-theme")==="light") document.body.classList.add("light");

const links=[...document.querySelectorAll("nav a")];
const sections=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
const obs=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   links.forEach(a=>a.classList.toggle("current",a.getAttribute("href")==="#"+entry.target.id));
  }
 });
},{rootMargin:"-15% 0px -70% 0px"});
sections.forEach(s=>obs.observe(s));
