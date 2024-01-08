let computerResponse = 0;
let ourNumber
let btns = document.querySelectorAll(".btn");
let Output = document.querySelector(".output");
let headd = document.getElementById("headd");
let yourScore = 0;
let compScore = 0;


let removeInput = () =>
{
    for (btn of btns)
    {
        btn.style.display = "none";
        btn.innerHTML = "O"
    }
    Output.style.display = "block";
    btns[0].innerHTML = "0"
    btns[1].innerHTML = "1"
    btns[2].innerHTML = "2"
}

let Reset = () =>
{
    for (btnnn of btns)
    {
        btnnn.style.display = "block";
    }
    Output.style.display = "none";
    btns[0].innerHTML = '<img src="Img/stone.png" alt="">';
    btns[1].innerHTML = '<img src="Img/paper.png" alt="">';
    btns[2].innerHTML = '<img src="Img/scissors.png" alt="">';
    headd.innerHTML = "Stone Paper Scissors";
    document.getElementById("imgright").src = "Img/stone.png";
    document.getElementById("imgLeft").src = "Img/stone.png";
    document.getElementById("imgright").style.width = "400px";
    document.getElementById("imgLeft").style.width = "400px";
}


btns.forEach((btnn) => {
    btnn.addEventListener('click' , () =>
    {
        removeInput();
        headd.innerHTML = "waiting For Result"
        let computerResponse = Math.floor(Math.random() * 3);
        console.log(computerResponse);
        if (computerResponse === 0)
        {
            function gettingStone() 
            {
                document.getElementById("imgright").src = "Img/stone.png";
                document.getElementById("imgright").style.right = "-75px";
            }
            setTimeout(gettingStone, 1000);
        }else if (computerResponse === 1)
        {
            function gettingPaper()
            {
                document.getElementById("imgright").src = "Img/paper.png";
                document.getElementById("imgright").style.width = "430px";
                document.getElementById("imgright").style.right = "-75px";
            }
            setTimeout(gettingPaper, 1000);
        }
        else
        {
            function gettingScissors()
            {
                document.getElementById("imgright").src = "Img/scissors.png";
                document.getElementById("imgright").style.width = "350px";
                document.getElementById("imgright").style.right = "-75px";
            }
            setTimeout(gettingScissors, 1000);
        }
        console.log(btnn.innerHTML);

       if (btnn.innerHTML === "0")
       {
        function choseStone ()
        {
            document.getElementById("imgLeft").src = "Img/stone.png";
            document.getElementById("imgLeft").style.left = "-75px";
        }
        setTimeout(choseStone, 1000);
       }
       else if (btnn.innerHTML === "1")
       {
        function chosePaper ()
        {
            document.getElementById("imgLeft").src = "Img/paper.png";
            document.getElementById("imgLeft").style.width = "430px";
            document.getElementById("imgLeft").style.left = "-75px";
        }
        setTimeout(chosePaper, 1000);
       }
       else
       {
        function chosescissors ()
        {
            document.getElementById("imgLeft").src = "Img/scissors.png";
            document.getElementById("imgLeft").style.width = "350px";
            document.getElementById("imgLeft").style.left = "-75px";
        }
        setTimeout(chosescissors, 1000);
       }
       if (btnn.innerHTML == computerResponse)
       {
          function tie()
          {
            headd.innerHTML = "Game Tied"
          }
          setTimeout(tie, 1000);
       }

       function won()
       {
            yourScore ++;
            document.getElementById("myScore").innerHTML = yourScore;
            headd.innerHTML = "congratulations You Won";
       }
       function Loss()
       {
            compScore++;
            document.getElementById("compScore").innerHTML = compScore;
            headd.innerHTML = "Sadly You Lost";
       }
       if (btnn.innerHTML == 0 && computerResponse == 2)
       {
        
          setTimeout(won, 1000);
       }
       else if (btnn.innerHTML == 0 && computerResponse == 1)
       {
        
          setTimeout(Loss, 1000);
       }
       else if (btnn.innerHTML == 1 && computerResponse == 0)
       {
        
          setTimeout(won, 1000);
       }
       else if (btnn.innerHTML == 1 && computerResponse == 2)
       {
        
          setTimeout(Loss, 1000);
       }
       else if (btnn.innerHTML == 2 && computerResponse == 0)
       {
        
          setTimeout(Loss, 1000);
       }
       else if (btnn.innerHTML == 2 && computerResponse == 1)
       {
        
          setTimeout(won, 1000);
       }

        
    })
});


