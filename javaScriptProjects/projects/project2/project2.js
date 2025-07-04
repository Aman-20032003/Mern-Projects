const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === null || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter a Valid Height`;
    }
    else if (weight === null || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter a Valid Width`;

    }else{
        const bmi= (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span> ${bmi} </span>`;
        const weightGuide= document.querySelector("#weight-guide");
if(bmi<18.6){
    weightGuide.innerHTML=`<p> Under Weight = Less than 18.6</p>`
}
else if (bmi>18.6 && bmi<24.9 ) {
    weightGuide.innerHTML=` <p>Normal Range = 18.6 and 24.9</p>`;
}
else if (bmi>24.9) {
    weightGuide.innerHTML=` <p>Overweight = Greater than 24.9</p>`;
}
    }

});