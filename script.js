//TOGGLE LOGIC FOR HOME PAGE LIST
let faqListItems = document.getElementsByClassName('FAQ-list-item');
const minusSVG=`<svg class="toggle-icon" width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.456177V3.5439H0V0.456177H16Z" fill="white" />
                </svg>`;
const plusSVG=`<svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 9.22353H9.31765V16H6.65098V9.22353H0V6.80784H6.65098V0H9.31765V6.80784H16V9.22353Z" fill="white"/>
                </svg>`;
for(let item of faqListItems){
    item.addEventListener('click', ()=>{
        let question = item.querySelector('.question');
        let svg = item.querySelector('.toggle-icon');
        if (svg) {
            svg.remove();
        }
        let answer = item.getElementsByClassName('answer')[0];
        if(answer.classList.contains('dropped-down')){
            answer.style.height = "0";
            answer.classList.remove('dropped-down');
            question.insertAdjacentHTML('beforeend', minusSVG)
        }
        else{
            answer.style.height = "100%";
            answer.classList.add('dropped-down');
            question.insertAdjacentHTML('beforeend', plusSVG)
        }
    })
}
