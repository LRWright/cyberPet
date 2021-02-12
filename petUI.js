const buttonFeed = document.getElementById("feedButton");
const feedLevel = document.getElementById("feedLevel");
const buttonWater = document.getElementById("waterButton");
const waterLevel = document.getElementById("waterLevel");
const buttonNap = document.getElementById("napButton");
const napLevel = document.getElementById("napLevel");
const buttonWalk = document.getElementById("walkButton");
const walkLevel = document.getElementById("walkLevel");
const funcs = document.getElementById("funcs");
const petDog = document.getElementById("dog");
const petCat = document.getElementById("cat");


petDog.addEventListener("click", () => {
    petCat.style.display = "none";
    buttonWalk.style.display = "block";
    walkLevel.style.display = "block"
})

petCat.addEventListener("click", () => {
    petDog.style.display = "none";
    buttonNap.style.display = "block";
    napLevel.style.display = "block";
})


buttonFeed.addEventListener("click", () => { 
    feedLevel.value += 20;
    })

buttonWater.addEventListener("click", () => { 
    waterLevel.value += 20;
    })

buttonNap.addEventListener("click", () => { 
    napLevel.value += 20;
    waterLevel.value -= 10;
    feedLevel.value -= 10;
    })

buttonWalk.addEventListener("click", () => { 
    walkLevel.value += 20;
    waterLevel.value -= 10;
    feedLevel.value -= 10;
    })