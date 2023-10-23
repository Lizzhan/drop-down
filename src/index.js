const dropBtn = document.getElementsByClassName('dropbtn')[0];
const dropDown = document.getElementsByClassName('drop-down')[0];

function showDropDown() {
    dropBtn.addEventListener('click',()=> { 
        dropDown.classList.remove('hidden');
    })
}

showDropDown();