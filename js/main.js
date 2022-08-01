let listElements=document.querySelectorAll('.question');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');
        let height=0;
        let list= listElement.nextElementSibling;
        if (list.clientHeight == "0"){
            height=list.scrollHeight;
        }

        list.style.height= `${height}px`;
    })
});