const englishQuizBtn = document.querySelector('.englishQuizBtn');
englishQuizBtn.addEventListener('click', ()=>{
    const quizOriginalForm = document.querySelector('.quizOriginalForm');
    quizOriginalForm.classList.remove('hidden');
    const chooseLanguageArticle = document.querySelector('.chooseLanguageArticle');
    chooseLanguageArticle.classList.add('hidden');
    const englishAnswerKey = ['C', 'C', 'B', 'B', 'A', 'B', 'C', 'C'];

    const currentQuestionCount = quizOriginalForm.querySelector('.currentQuestionCount');
    const quizQuestion = quizOriginalForm.querySelector('.quizQuestion');

    const A_Btn = quizOriginalForm.querySelector('.A');
    const B_Btn = quizOriginalForm.querySelector('.B');
    const C_Btn = quizOriginalForm.querySelector('.C');
    const D_Btn = quizOriginalForm.querySelector('.D');

    const A_Content = A_Btn.querySelector('.A_Content');
    const B_Content = B_Btn.querySelector('.B_Content');
    const C_Content = C_Btn.querySelector('.C_Content');
    const D_Content = D_Btn.querySelector('.D_Content');

    //change text content part

    quizQuestion.textContent = 'What is the plural form of "child"?'

    A_Content.textContent = 'Childs'
    B_Content.textContent = 'Childrens'
    C_Content.textContent = 'Children'
    D_Content.textContent = 'Childer'

    let clickToCount = 1;
    const quizBtn = document.querySelectorAll('.quizBtn');
    quizBtn.forEach(btnElement => {
        btnElement.addEventListener('click', (targetElement)=>{
                const clickedBtn = targetElement.target;

            function firstQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[0])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function secondQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[1])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function thirdQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[2])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function fourthQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[3])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function fifthQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[4])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function sixthQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[5])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }
            
            function seventhQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[6])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function eighthQuestion(){
                if (clickedBtn.classList.contains(englishAnswerKey[7])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            if (clickToCount === 8){
                clickToCount = 8;
            } else {
                
                if (clickToCount === 1){
                    firstQuestion();
                } else if (clickToCount === 2){
                    secondQuestion();
                } else if (clickToCount === 3){
                    thirdQuestion();
                } else if (clickToCount === 4){
                    fourthQuestion();
                } else if (clickToCount === 5){
                    fifthQuestion();
                } else if (clickToCount === 6){
                    sixthQuestion();
                } else if (clickToCount === 7){
                    seventhQuestion();
                } else if (clickToCount === 8){
                    eighthQuestion();
                }

                clickToCount ++;
                currentQuestionCount.textContent = clickToCount;
            }
        });
    });
});