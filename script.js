function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
    arrayOfhealthWishes = [
      "Бажаю міцного здоров'я та сил!",
      "Нехай хвороби обходять стороною.",
      "Бажаю тобі справжнього кохання, яке буде поруч завжди!",
      "Живи без стресу та з гармонією в душі.",
      "Нехай кожен день приносить радість!",
    ];
  
    document.getElementById("btn_health_wishes").addEventListener("click", () => {
    document.getElementById("p-health-wishes").innerHTML = arrayOfhealthWishes[getRandomInt(4)];
    });

    let countOfpills = 5;
    document.getElementById("count-of-tablets").innerText = "💊".repeat(
      countOfpills
    );
    document.getElementById("btn_health_wishes").addEventListener("click", () => {
      let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
      document.getElementById("p-health-wishes").innerText =
        arrayOfhealthWishes[index];
    
      countOfpills--;
      console.log(countOfpills);
      document.getElementById("count-of-tablets").innerText =
        "💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills);
      console.log("💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills));
      if (countOfpills === 0) {
        console.log("countOfpills = 0");
        document.getElementById("btn_health_wishes").style.display = "none";
      }
    });
    
    document.getElementById("btn-buy-tablets").addEventListener("click", () => {
      countOfpills = 5;
      console.log(countOfpills);
      document.getElementById("count-of-tablets").innerText = "💊".repeat(
        countOfpills
      );
      document.getElementById("btn_health_wishes").style.display = "inline-block";
    });
    