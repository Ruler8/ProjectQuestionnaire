// Asynchronously fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  function displayData(data) {
    const gameScreen = document.querySelector(".game");
    const resultScreen = document.querySelector(".result");
    const question = document.querySelector(".question");
    const answersContainer = document.querySelector(".answers");
    const submit = document.querySelector(".submit");
    const play = document.querySelector(".play");
    
    let qindex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let total = 0;
    let selectedAnswer;

    const playAgain = ()=>{
     qindex = 0;
     correctCount = 0;
     wrongCount = 0;
     total = 0;
   
    showQuestion(qindex);
    };

    play.addEventListener("click",()=>{
      resultScreen.style.display = "none";
      gameScreen.style.display = "block";
      playAgain()
    });
    
    const showResult = ()=>{
      resultScreen.style.display = "block";
      gameScreen.style.display = "none";

      resultScreen.querySelector(".correct").textContent =`
      Correct Answers: ${correctCount}`

      resultScreen.querySelector(".wrong").textContent =`
      Wrong Answers: ${wrongCount}`

      resultScreen.querySelector(".score").textContent =`
      Score: ${(correctCount - wrongCount) *10}`
    };

    const showQuestion = (qNumber) =>{
      if(qindex === data.length) return showResult()
        selectedAnswer = null;
        question.textContent = data[qNumber].question;
        answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
            `<div class="answer">
                        <input type="radio" id=${index} name="answer" value=${item.isCorrect}>
                        <label for="1">${item.answer}</label>
                    </div>
    `
        ).join("");
        selectAnswer();
    
    };
    
    const selectAnswer = () =>{
        answersContainer.querySelectorAll("input").forEach(el=>{
            el.addEventListener("click", (e) =>{
                selectedAnswer = e.target.value;
            });
        });
    };
    
    const submitAnswer = () => {
        submit.addEventListener("click", ()=>{
            if(selectedAnswer !== null){
                selectedAnswer === "true" ? correctCount++ : wrongCount++
            qindex++
            showQuestion(qindex)
            }
            else{
                alert("Select an answer!");
            }
            
        })
    }
    
    
    showQuestion(qindex);
    submitAnswer();
  }


// Call fetchUsers when the page loads
window.onload = fetchData;