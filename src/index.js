const dropBtn = document.getElementsByClassName('dropbtn')[0];
const dropDown = document.getElementsByClassName('drop-down')[0];
let isExpanded = false;

function toggleDropDown() {
    dropBtn.addEventListener('click',()=>{
        if(isExpanded === false){
        dropDown.classList.remove('hidden');
        isExpanded = true;
        }else if(isExpanded === true){
        dropDown.classList.add('hidden');
        isExpanded = false;
        };
    })
}

toggleDropDown();