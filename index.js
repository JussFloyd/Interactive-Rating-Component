const btnRatingScale = document.querySelectorAll(".btn");
let userRating = "N/A";
const submitBtn = document.querySelector(".submit-btn");

for(let i = 0; i < btnRatingScale.length; i++) {
    btnRatingScale[i].addEventListener("click", function(){
        userRating = this.innerHTML; //Extracts the HTML in the Button
        console.log(`Button ${userRating} was clicked.`);
        
        submitBtn.disabled = false;
    });
}

document.querySelector(".submit-btn").addEventListener("click", function(){
    console.log(`Submit button clicked.`);

    document.querySelector("#pre-user-input-container").classList.add("hide");//Hides the rating system
    document.querySelector("#post-user-input").classList.add("flex");//Displays a thank you screen
    document.querySelector("#user-rating-container").textContent = (`You selected ${userRating} out of 5`);
})