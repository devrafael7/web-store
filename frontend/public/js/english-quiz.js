const englishQuizBtn = document.querySelector('.englishQuizBtn');
englishQuizBtn.addEventListener('click', ()=>{
    const quizOriginalForm = document.querySelector('.quizOriginalForm');
    quizOriginalForm.classList.remove('hidden');
    const chooseLanguageArticle = document.querySelector('.chooseLanguageArticle');
    chooseLanguageArticle.classList.add('hidden');
    const englishAnswerKey = ['c', 'c', 'b', 'b', 'a', 'b', 'c', 'c'];

    const currentQuestionCount = quizOriginalForm.querySelector('.currentQuestionCount');
    const quizQuestion = quizOriginalForm.querySelector('.quizQuestion');

    const A_Btn = quizOriginalForm.querySelector('A');
    const B_Btn = quizOriginalForm.querySelector('B');
    const C_Btn = quizOriginalForm.querySelector('C');
    const D_Btn = quizOriginalForm.querySelector('D');

    //const A_Content = A_Btn.querySelector('A_Content');
    //const B_Content = B_Btn.querySelector('B_Content');
    //const C_Content = C_Btn.querySelector('C_Content');
    //const D_Content = D_Btn.querySelector('D_Content');

    //change text content part

    let clickToCount = 1;
    const quizBtn = document.querySelectorAll('.quizBtn');
    quizBtn.forEach(quizBtns => {
        quizBtns.addEventListener('click', ()=>{
            if (clickToCount === 8){
                clickToCount = 8;
            } else {
                clickToCount ++;
                currentQuestionCount.textContent = clickToCount;
            }
        });
    });
});