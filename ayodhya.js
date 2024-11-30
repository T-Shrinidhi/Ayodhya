<!doctype html>
<html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Quiz Website</title> 
  <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .quiz-container {
            max-width: 600px;
            margin: 0 auto;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, p {
            text-align: center;
        }
        .question {
            margin-bottom: 10px;
        }
        .options label {
            display: block;
            margin-bottom: 8px;
        }
    </style> 
 </head> 
 <body> 
  <div class="quiz-container"> 
   <h1>Quiz Time!</h1> 
   <div id="quiz"> 
    <div class="question"> 
     <p>1. What is the capital of France?</p> 
     <div class="options"> <label> <input type="radio" name="q1" value="a"> a) Paris </label> <label> <input type="radio" name="q1" value="b"> b) London </label> <label> <input type="radio" name="q1" value="c"> c) Berlin </label> 
     </div> 
    </div> 
    <div class="question"> 
     <p>2. Who painted the Mona Lisa?</p> 
     <div class="options"> <label> <input type="radio" name="q2" value="a"> a) Leonardo da Vinci </label> <label> <input type="radio" name="q2" value="b"> b) Vincent van Gogh </label> <label> <input type="radio" name="q2" value="c"> c) Pablo Picasso </label> 
     </div> 
    </div> <button onclick="submitQuiz()">Submit Quiz</button> 
   </div> 
   <div id="results" style="display: none;"> 
    <h2>Results</h2> 
    <p id="score"></p> 
   </div> 
  </div> 
  <script>
        function submitQuiz() {
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked').value,
                q2: document.querySelector('input[name="q2"]:checked').value
            };
            const correctAnswers = { q1: 'a', q2: 'a' }; // Define correct answers
            let score = 0;

            for (const key in answers) {
                if (answers[key] === correctAnswers[key]) {
                    score++;
                }
            }

            const resultsContainer = document.getElementById('results');
            resultsContainer.style.display = 'block';
            document.getElementById('score').textContent = You scored ${score} out of ${Object.keys(correctAnswers).length};
        }
    </script> 
 </body>
</html>