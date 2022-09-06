const iconMenu = document.getElementById('mobile');
const MobileMenu = document.getElementById('MobileMenu')



iconMenu.addEventListener('click', () => {
    console.log('teste')
    if(MobileMenu.classList.contains('MobileAtc')){
        MobileMenu.classList.remove('MobileAtc');
    }else{
        MobileMenu.classList.add('MobileAtc');
    }
})

