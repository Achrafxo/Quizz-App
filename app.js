let quizData = [
    {
        question :"من أول رئيس لدولة الجزائر ؟",
        a:"بن بلة",
        b:"هواري بومدين",
        c:" عبد العزيز بوتفليقة",
        d:"الشاذلي",
        correct:"a",

    },
    {
        question :" كم تبلغ مساحة الجزائر ",
        a:"2,000,000",
        b:"4,582,000",
        c:"1,385,880",
        d:"6,386,440",
        correct:"a",

    },
    {
        question :" عدد ولايات الجزائر",
        a:"80",
        b:"40",
        c:"58",
        d:"49",
        correct:"c",

    },
    {
        question :" طبق تقليدي جزائري",
        a:"شاورما",
        b:"كسكس",
        c:"بيتزا",
        d:"برغر",
        correct:"b",

    }
]
let quiz = document.getElementById('quiz')
let Qst = document.getElementById("qst");
let txt_a = document.getElementById("txt_a")
let txt_b = document.getElementById("txt_b")
let txt_c = document.getElementById("txt_c")
let txt_d = document.getElementById("txt_d")
let btn = document.querySelector("button")
let currentQuiz= 0 ;
let score = 0 ;
let answerElms = document.querySelectorAll('.answer')
loadQuiz()

function getSelected() {
    
    let answer = undefined

    answerElms.forEach((answerElm) => {
        if(answerElm.checked) {
            answer = answerElm.id
            
        }
        
    });
    return answer
}



function loadQuiz() {
    deselect()

    currentQuizData = quizData[currentQuiz]
    Qst.innerText = currentQuizData.question
    txt_a.innerText = currentQuizData.a
    txt_b.innerText = currentQuizData.b
    txt_c.innerText = currentQuizData.c
    txt_d.innerText = currentQuizData.d
    

    

}

function deselect() {

    answerElms.forEach((e) => {
        e.checked = false
    })
}
btn.addEventListener('click', ()=>{
    

    let answer = getSelected()
    console.log(answer)
    if (answer ) { 
        if(answer === quizData[currentQuiz].correct) {score++}
    
    }
    currentQuiz++
        if (currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
        quiz.innerHTML = `<h2> you've got ${score} / ${quizData.length} answers 👏  </h2>
        <button onclick="location.reload()">Reload</button> `
    }




})