document.addEventListener('DOMContentLoaded', displayAll);
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const countryInput=document.getElementById("countryList");
const stateInput=document.getElementById("stateList");
ci = countryInput.value;
btn1.addEventListener("click",displayStates)
function displayStates(){
    fetch("states.json")
    .then(res=>res.json())
    .then(data=>{
        let selectState = document.getElementById("stateList")
        console.log(selectState)
        selectState.innerHTML = '<option value="">--pick one--</option>';
        let i=0
        ci = countryInput.value;
        while(i<data.length){
            console.log(ci)
            if(data[i].country_name==ci){
                stateName = data[i].name
                selectState.appendChild(new Option(stateName))
                console.log(stateName)
            }
            i++
        }
    })
    if(ci){
        const state = document.getElementById("st");
        state.style.visibility="visible";
        document.getElementById("ct").style.visibility="hidden";
    }   
}
btn2.addEventListener("click",displayCities)
function displayCities(){
    document.getElementById("ct").style.visibility="visible";
    let selectCity = document.getElementById("cityList")
    selectCity.innerHTML='<option value="">--pick one--</option>';
    fetch("cities.json")
    .then(res=>res.json())
    .then(data=>{
        let i=0;
        const si = stateInput.value;
        while(i<data.length){
            if(data[i].country_name==ci && data[i].state_name==si){
                let cityName = data[i].name
                selectCity.appendChild(new Option(cityName));
                console.log(data[i])
            }
            i++
        }
    })
}
function displayAll(){
    fetch("countries.json")
    .then(res=>res.json())
    .then(data=>{
        let i=0
        let selectCountry = document.getElementById("countryList");
        while(i<data.length){
            let countryName=data[i].name;
            selectCountry.appendChild(new Option(countryName));
            i++
        }  
    })

}
