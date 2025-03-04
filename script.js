function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
    wishes = [
      "Бажаю міцного здоров'я та сил!",
      "Нехай хвороби обходять стороною.",
      "Бажаю тобі справжнього кохання, яке буде поруч завжди!",
      "Живи без стресу та з гармонією в душі.",
      "Нехай кожен день приносить радість!",
    ];
  
    document.getElementById("btn_health_wishes").addEventListener("click", () => {
    document.getElementById("p-health-wishes").innerHTML = wishes[getRandomInt(4)];
    });

     let countofPills = 5
     document.gettlementById().innerText="💊".repeat(countofpills)

     document.getElementById('btn_health_wishes').addEventListener('click', () => {
         let index = Math.floor(Math.random() * arrayOfhealthWishes.lenght)
         document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]

     countofPills--
     console.log(countofPills)

     document.getElementById('count-of-tablet').innerText = "💊".repeat(countofPills) + "❌" .repeat(5-countofPills)
     console.log("💊".repeat(countofPills) + "❌".repeat(5-countofPills))

     if (countofPills == 0) {
        console.log("countofPills = 0");

        document.getElementById("btn_health_wishes").style.display ="none";
     }
    })

    document.getElementById("btn_health_wishes").addEventListener("click", () => {
        countOfpells = 5;
        console.log(countOfpells);
        
        document.getElementById("count-of-tablets").innerHTML = "".repeat(countOfpells);
          document.getElementById("btn_health_wishes").style.display = "inline-block";
      })


































