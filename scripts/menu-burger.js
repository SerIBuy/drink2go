var e=document.querySelector(".button--burger"),n=document.querySelector(".main-header__navigation");e.addEventListener("click",()=>{n.classList.contains("main-header__navigation--burger-opened")?(n.classList.remove("main-header__navigation--burger-opened"),e.classList.remove("button--burger-closed"),e.classList.add("button--burger-opened")):(n.classList.add("main-header__navigation--burger-opened"),e.classList.add("button--burger-closed"),e.classList.remove("button--burger-opened"))});