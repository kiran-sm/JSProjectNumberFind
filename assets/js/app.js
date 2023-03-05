// console.log(document.querySelector(".message").textContent);    
// document.querySelector(".message").textContent = '🎉 Correct Number!'   
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value=23
// console.log(document.querySelector(".guess").value);

// const funnyTxt = "no major updates"

// let secreteNumber = Math.trunc(Math.random()*20)+1;
// let score = 20;
// let highScore = 0;

// document.querySelector(".check").addEventListener('click',function(){
//     const guess = Number(document.querySelector(".guess").value);
    

//     if(!guess){
//         document.querySelector(".message").textContent = '⛔️Not a Wrong Number!' 
//     }
//     else if(guess === secreteNumber){
//         document.querySelector(".message").textContent = '🎉 Correct Number!'
//         document.querySelector("body").style.background="#60b347";
// document.querySelector(".number").textContent = secreteNumber;
// document.querySelector(".number").style.width="30rem";
// if(score > highScore){
//     highScore=score;
//     document.querySelector(".highscore").textContent=highScore;
// }
//     }
//     else if(guess > secreteNumber){
//         if(score>1){
//             document.querySelector(".message").textContent = '📈 Too high!';
//         score--;
//         document.querySelector(".score").textContent = score;
//         }

//         else{
//         document.querySelector(".score").textContent = 0;
//         document.querySelector(".message").textContent = '💥 You lost the game'
//         }
        

//     }
//     else if(guess < secreteNumber){
//         if(score>1){
//             document.querySelector(".message").textContent = '📉 Too low!'
//         score--;
//         document.querySelector(".score").textContent = score;
//         }
//         else{
//             document.querySelector(".score").textContent = 0;
//             document.querySelector(".message").textContent = '💥 You lost the game'
//             }
//     }
// });

// document.querySelector(".again").addEventListener("click", function(){
//     score = 20;
// let secreteNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector(".message").textContent = 'Start Guessing...';
// document.querySelector(".score").textContent = score;
// document.querySelector(".number").textContent = '?';
// document.querySelector(".guess").textContent = '';
// document.querySelector("body").style.background="#222";
// document.querySelector(".number").style.width="15rem";

// })

// console.log("advanced JS");

// const arr = [2,3,6,4,5,6]
// for (const star of arr)
// console.log(star,"q");

// sum = 0
// for(let i=0; i<arr.length;i++){
//     sum+=arr[i]
    // console.log(`${arr[i]} number`);
    // console.log(sum);
// }
// console.log(sum);

// console.log(arr.length);
// let newArr = new Set(arr)
// console.log(newArr);
// console.log(newArr.length());
// for(const item of arr)
// console.log(item,"aa");
// console.log(arr,"Kiran");
// // console.log(arr);≥
// const [x,y,z,,a] = arr
// console.log(x,y,z,a );
// let p ="congaro"
// console.log(p.length)
// console.log("2",p.slice(2));
// console.log(`${p[0].toUpperCase()}${p.slice(1,-1)}`);
