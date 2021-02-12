const buttonFeed = document.getElementById("feedButton");
const feedLevel = document.getElementById("feedLevel");
const buttonWater = document.getElementById("waterButton");
const waterLevel = document.getElementById("waterLevel");
const buttonFun = document.getElementById("funButton");
const funLevel = document.getElementById("funLevel");

const petDog = document.getElementById("dog");
const petCat = document.getElementById("cat");
const petRabbit = document.getElementById("rabbit");


petDog.addEventListener("click", () => {
    petRabbit.style.display = "none";
    petCat.style.display = "none";
    buttonFun.innerText = "walk";
})

petCat.addEventListener("click", () => {
    petDog.style.display = "none";
    petRabbit.style.display = "none";
    buttonFun.innerText = "nap";
})

petRabbit.addEventListener("click", () => {
    petDog.style.display = "none";
    petCat.style.display = "none";
    buttonFun.innerText = "hop";
})


buttonFeed.addEventListener("click", () => { 
    feedLevel.value += 20;
    funLevel.value -= 10;
    })

buttonWater.addEventListener("click", () => { 
    waterLevel.value += 20;
    funLevel.value -= 10;
    })

buttonFun.addEventListener("click", () => { 
    funLevel.value += 20;
    waterLevel.value -= 10;
    feedLevel.value -= 10;
    })