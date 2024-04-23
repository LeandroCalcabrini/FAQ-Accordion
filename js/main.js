
const accordionItems = document.querySelectorAll(".accordion-item");





function openClose (){
    accordionItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            item.classList.toggle("active")
        })
    
    })
};

openClose();