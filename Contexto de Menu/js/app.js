window.addEventListener("contextmenu",function(event){
  event.preventDefault();
  let contextElement = document.getElementById("contexto-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("ativado");
});

window.addEventListener("click",function(){
  document.getElementById("contexto-menu").classList.remove("ativado");
});