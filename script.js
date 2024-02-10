const setOfWords = [ "My name is krishna sabat",
"Hope you are doing well", "Where are you going?","What are you doing"];
const msg = document.querySelector(".msg");
const textArea = document.querySelector("#mywords");
const btn = document.querySelector(".main_btn");
let startTime,endTime;

const playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerHTML = setOfWords[randomNumber];
    btn.innerHTML = "Done";
    let date = new Date();
    startTime = date.getTime();
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let totalStr = textArea.value;
    let wordsCount = wordCounter(totalStr);
    let speed = Math.round((wordsCount/totalTime)*60);
    let finalMsg = `Your typed total at ${speed} words per minute`;
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerHTML = finalMsg;
}

const compareWords= (str1,str2)=>{
    let word1 = str1.split(" "); 
    let word2 = str2.split(" "); 
    let cnt = 0;

    word1.forEach(function(item,index){
        if(item == word2[index]){
            cnt++;
        }
    })

    let errorWord = (word1.length - cnt);
    return `${cnt} correct out of ${word1.length} words  and the total number of error are ${errorWord}.`;

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click",function(){
    if(this.innerHTML == "Start"){
        textArea.disabled = false;
        playGame();
    }
    else if(this.innerHTML == "Done"){
        textArea.disabled = true;
        btn.innerHTML = "Start";
        endPlay();
    }
})