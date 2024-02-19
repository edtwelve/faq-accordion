const btns = document.querySelectorAll('.exp-shr');
let imageState = 1;

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if(imageState === 1){
            btn.src = 'assets/icon-minus.svg';
            imageState = 2;
        } else {
            btn.src = 'assets/icon-plus.svg';
            imageState = 1;
        }
    })
})
