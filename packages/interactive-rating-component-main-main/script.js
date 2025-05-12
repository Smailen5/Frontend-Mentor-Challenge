
const button = document.querySelector('#submit');
const review = document.querySelectorAll('.container > p > span.bubble');
const form = document.querySelector('.container');
const succes = document.querySelector('#form-final');

const reviewSelect = document.querySelector('#rating-here');

button.addEventListener('mouseover', entrata);
button.addEventListener('mouseout', uscita);


function entrata() {
    this.style.background = `hsl(0, 0%, 100%)`;
    this.style.color = `hsl(25, 97%, 53%)`;
}
function uscita() {
    this.style.background = '#FC7614';
    this.style.color = '';
}

review.forEach((review) => {
    review.addEventListener('click', () => {
        review.classList.toggle('selected');

        if (review.classList.contains('selected')) {

            let reviewContent = review.textContent;
            console.log(reviewContent);
            
            reviewSelect.innerText = ` ${reviewContent} `;// scrivo dentro lo span
            console.log(reviewSelect); // perche c'è dello spazio e non viene aggiunto?

        }
    })
})

// console.log(review);


button.addEventListener('click', function () {
    form.classList.add('active');

    setTimeout(function () {
        succes.classList.remove('hidden');
        form.classList.add('hidden');
    }, 500);
})


// ---------------------------------------------------------------------------------------------------------



