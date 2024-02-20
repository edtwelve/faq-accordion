const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function(){
        const top = question.querySelector('.question-top');
        const img = top.querySelector('.exp-shr');

        const answer = question.querySelector('p');
        if (answer.classList.contains('closed')) {
            img.src = 'assets/icon-minus.svg';
            answer.classList.toggle('closed')
        } else if (!answer.classList.contains('closed')){
            img.src = 'assets/icon-plus.svg';
            answer.classList.toggle('closed')
        }
    })
})