console.log("Hi!");

const templates = {
    1 : `
        <div class="about">              
            <h1 class="about__title">Future by digital asset management</h1>
             <p class="about__text">Registered investment advisor with the quantitative approach
                                    in portfolio management
                                    </p>
             <div class="about__container">
                <button class="button">How it works</button>
             </div>
             </div>
             <img class="main__image" src="images/ipad.png">`,
    2 : `
        `,
    3 : `
        <div class="about">
                <h2 class="about__title">Digital solutions
                    for global markets industry</h2>
                <p class="about__text about__text-marked">User simplicity</p>
                <p class="about__text">Blockchain security</p>
                <p class="about__text">Support availability</p>
                <div class="about__container">
                    <button class="button">Try right now</button>
                    <button class="button button-learn">Learn more</button>
                </div>
            </div>
            <img class="main__image" src="images/ipad.png">`
};

const main = document.querySelector(".main");
const mainContainer = document.createElement("div");
mainContainer.className = "main__container";

let templateNumber = 1;


main.insertAdjacentElement("beforeEnd", mainContainer);
mainContainer.insertAdjacentHTML("beforeEnd", templates[templateNumber]);

main.addEventListener("click", ()=>{

    mainContainer.insertAdjacentHTML("beforeEnd", templates[templateNumber]);



    templateNumber += 1;

    if(templateNumber === 4) {
        templateNumber = 1;
    }
});

main.addEventListener('scroll', (event)=> {
    
});


