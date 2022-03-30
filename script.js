let adviceURL = "https://api.adviceslip.com/advice";
document.querySelector("#generate-advice").addEventListener("click", GenerateNewAdvice);

fetch(adviceURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let advice = data.slip.advice;
    let adviceNr = data.slip.id;
    console.log(advice + adviceNr);

    let adviceId = document.querySelector("#advice-id");
    adviceId.innerHTML = "ADVICE #" + adviceNr;

    let adviceText = document.querySelector("#advice");
    adviceText.innerHTML = advice;
  })
  .catch(function(error) {
    console.log(error);
  });

function GenerateNewAdvice() {
  fetch(adviceURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let advice = data.slip.advice;
    let adviceNr = data.slip.id;
    console.log(advice + adviceNr);

    let adviceId = document.querySelector("#advice-id");
    adviceId.innerHTML = "ADVICE #" + adviceNr;

    let adviceText = document.querySelector("#advice");
    adviceText.innerHTML = advice;
  })
  .catch(function(error) {
    console.log(error);
  });
}

