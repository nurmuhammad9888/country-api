let elBtnDrakMode = document.querySelector(".js-dark");

elBtnDrakMode.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

const elCounterList = document.querySelector(".counter-list");
const elCounterModalListWrap = document.querySelector(".modal-list-wrap");
const elCounterModalList = document.querySelector(".modal-list");
const counterTemplate = document.querySelector(".counter-template").content;
const counterFragment = document.createDocumentFragment();


const elModalImg = document.querySelector(".counter-modal-image");
const elModaTitlName = document.querySelector(".counter-title-name");
const elModalLanguage = document.querySelector(".counter-languages");
const elModalRegion = document.querySelector(".counter-region-modal");
const elModalBorder = document.querySelector(".counter-border");
const elModalCurrenci = document.querySelector(".counter-currencies");
const elModalSubregion = document.querySelector(".counter-subregion");
// const elModalNativName = document.querySelector(".counter-mativ-name-modal");
const elModalLink = document.querySelector(".btn-map-link");

// FORM 

const elForm = document.querySelector(".form-js");
const elInput = document.querySelector(".input-js");
const elSelect = document.querySelector(".select-js");


async function countFunc(url = "https://restcountries.com/v3.1/all"){
try {
    const res = await fetch(url)
    const data = await res.json();
    renderFunc(data)
} catch (error) {
    console.log(error);
}
}
countFunc()


function renderFunc(arr){
    elCounterList.innerHTML = "";
    arr.forEach(el => {
        const tempClone = counterTemplate.cloneNode(true);
        tempClone.querySelector(".counter-image").src = el.flags.png;
        tempClone.querySelector(".counter-image").alt = el.name.common;
        tempClone.querySelector(".counter-title-name").textContent = el.name.common;
        tempClone.querySelector(".counter-population").textContent = el.population;
        tempClone.querySelector(".counter-region").textContent = el.region;
        tempClone.querySelector(".counter-capital").textContent = el.capital;
        tempClone.querySelector(".btn-link").dataset.id = el.name.common;
        counterFragment.appendChild(tempClone)
    });
    elCounterList.appendChild(counterFragment)
}


elForm.addEventListener("submit", evt =>{
    evt.preventDefault();
    const elInputValue = elInput.value;
    const elSelectValue = elSelect.value;
    const select = `https://restcountries.com/v3.1/region/${elSelectValue}`;
    const input = `https://restcountries.com/v3.1/name/${elInputValue}`;
    
    if(!elInputValue == ""){
        countFunc(input)
    }else if(!elSelectValue == ""){
        countFunc(select)
    }
})
elSelect.addEventListener("change", evt =>{
    elInput.value  =""
})

elCounterModalListWrap.addEventListener("click", () =>{
    
    elCounterModalList.classList.add("hidden");
    elCounterModalListWrap.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
})

// MODAL RENDER 
elCounterList.addEventListener("click" , evt =>{
    if(evt.target.matches(".btn-link")){
        elCounterModalListWrap.classList.remove("hidden")
        elCounterModalList.classList.remove("hidden")
        document.body.classList.add("overflow-hidden")
        const btynId = evt.target.dataset.id;
        modalFunc(`https://restcountries.com/v3.1/name/${btynId}`)
    }
})

async function modalFunc(url){
    try {
        const res = await fetch(url)
        const data = await res.json();
        renderModalFunc(data)
    } catch (error) {
        console.log(error);
    }
}

function renderModalFunc(arr){
    arr.forEach(el => {
        elModalImg.src = el.flags.png;
        elModaTitlName.textContent = el.name.common
        // elModalNativName.textContent = el.name.official
        elModalRegion.textContent = el.region
        elModalBorder.textContent = el.borders.slice(0, 3)
        elModalSubregion.textContent = el.subregion;
        elModalLink.href = el.maps.googleMaps
        elModalLanguage.textContent = Object.values(el.languages);
        const currence = Object.keys(el.currencies)[0];
        elModalCurrenci.textContent = el.currencies[currence].name;
    });
}