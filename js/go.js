document.addEventListener('DOMContentLoaded', () => {
let zz = document.getElementById("qq");


zz.onclick = function (){
let yy = document.getElementById("theme");

if(theme.getAttribute("href") == "style.css")
{
	theme.href = "night.css"
}
else
{
	theme.href = "style.css"
}
}})