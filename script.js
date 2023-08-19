 const randomNumber1= Math.floor(Math.random() * 6) + 1;

const firstImageSrc="images/dice"+randomNumber1+".png";


document.querySelector(".img1").setAttribute("src",firstImageSrc);

const randomNumber2= Math.floor(Math.random() * 6) + 1;

const secondImageSrc="images/dice"+randomNumber2+".png";


document.querySelector(".img2").setAttribute("src",secondImageSrc);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Won"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Won 🚩"
}
 else if (randomNumber1==randomNumber2)
 {
    document.querySelector("h1").innerText="Draw !"
 }

 document.addEventListener("click", function()
 {
    location.reload()
 })
