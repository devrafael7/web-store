let clickToCount = 0;

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
                quizQuestion.textContent = 'Which word is a synonym for "happy"?'

                A_Content.textContent = 'Sad' 
                B_Content.textContent = 'Angry'
                C_Content.textContent = 'Joyful'
                D_Content.textContent = 'Tired'

                if (clickedBtn.classList.contains(englishAnswerKey[1])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function thirdQuestion(){
                quizQuestion.textContent = 'What is the past tense of "eat"?'

                A_Content.textContent = 'Eated'
                B_Content.textContent = 'Ate'
                C_Content.textContent = 'Eating'
                D_Content.textContent = 'Eats'

                if (clickedBtn.classList.contains(englishAnswerKey[2])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function fourthQuestion(){
                quizQuestion.textContent = 'Which sentence is correct?'

                A_Content.textContent = `She don't like pizza.`
                B_Content.textContent = `She doesn't like pizza.`
                C_Content.textContent = `She doesn't likes pizza.`
                D_Content.textContent = `She don't likes pizza.`

                if (clickedBtn.classList.contains(englishAnswerKey[3])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function fifthQuestion(){
                quizQuestion.textContent = 'What is the opposite of "easy"?'

                A_Content.textContent = 'Hard'
                B_Content.textContent = 'Fast'
                C_Content.textContent = 'Big'
                D_Content.textContent = 'Strong'

                if (clickedBtn.classList.contains(englishAnswerKey[4])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function sixthQuestion(){
                quizQuestion.textContent = 'Choose the correct article: ___ apple.'

                A_Content.textContent = 'A'
                B_Content.textContent = 'An'
                C_Content.textContent = 'The'
                D_Content.textContent = 'No article'

                if (clickedBtn.classList.contains(englishAnswerKey[5])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }
            
            function seventhQuestion(){
                quizQuestion.textContent = 'Which one is a verb?'

                A_Content.textContent = 'Beautiful'
                B_Content.textContent = 'Quickly'
                C_Content.textContent = 'Jump'
                D_Content.textContent = 'Happy'

                if (clickedBtn.classList.contains(englishAnswerKey[6])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }

            function eighthQuestion(){
                quizQuestion.textContent = '"I am reading a book." — What tense is this?'

                A_Content.textContent = 'Past Simple'
                B_Content.textContent = 'Future Simple'
                C_Content.textContent = 'Present Continuous'
                D_Content.textContent = 'Present Simple'

                if (clickedBtn.classList.contains(englishAnswerKey[7])) {
                    window.alert('you got the right question');
                } else {
                    window.alert('you got the wrong question')
                }
            }
            
            if (clickToCount === 0){
                firstQuestion();
            } else if (clickToCount === 1){
                secondQuestion();
            } else if (clickToCount === 2){
                thirdQuestion();
            } else if (clickToCount === 3){
                fourthQuestion();
            } else if (clickToCount === 4){
                fifthQuestion();
            } else if (clickToCount === 5){
                sixthQuestion();
            } else if (clickToCount === 6){
                seventhQuestion();
            } else if (clickToCount === 7){
                eighthQuestion();
            };

            clickToCount ++;
            currentQuestionCount.textContent = clickToCount;

        });
    });
});