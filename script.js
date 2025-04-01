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

    const arrayOfImages = [
      "1.jpg",
      "2.jpg",
      "3.jpg"
    ]

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
    
    let galleryImage = 1

    document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      
      document.getElementById("right-arrow").addEventListener('click', ()=>{
        galleryImage++
        console.log(galleryImage)
      
        if(galleryImage == 4)
           {galleryImage = 1}

        document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      })

      document.getElementById("left-arrow").addEventListener('click', ()=>{
        galleryImage++
        console.log(galleryImage)
      
        if(galleryImage == 4)
           {galleryImage = 1}

        document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      })

      const arrayOfVitamins = [
        {
          id:"001",
          title:"Аевіт",
          photo:"free-icon-a-3554188.png",
          description:"Вітамін А — група близьких за хімічною будовою речовин, яка включає ретиноїди: ретинол (вітамін A1, аксерофтол), дегідроретинол (вітамін А2), ретиналь (ретинен, альдегід вітаміну A1), ретиноєву кислоту і кілька провітамінів — каротиноїдів, серед яких найважливішим є β-каротин.",
          shema:"All-trans-Retinol2.svg",
          rating:2,
          type:"кристалічні"
        },
        {
          id:"002",
          title:"Вітімін С",
          photo:"free-icon-supplement-8059751.png",
          description:"Аскорбíнова кислотá (лат. Ascorbic acid (BP, JP, USP)[1][2][3], лат. Acidum ascorbinicum (PhEur)[1], гамма-лактон 2,3-дегідро-L-гулонової кислоти, вітамін C) — відносно проста органічна кислота. Хімічна формула C6H8O6. Міститься у свіжих фруктах (яблука, сливи, персики тощо) та овочах. Відносять до водорозчинних вітамінів.[4]",
          rating:4,
          type:"водорозчинні"
        },
        {
          id:"003",
          title:"Вітамін D",
          photo:"free-icon-vitamin-d-18622404.png",
          description:"Вітамі́н D має кілька форм[1]. Їх називають кальцифероли і представлені вони переважно у вигляді двох речовин: ергокальциферолу (вітаміну D2), що надходить із дріжджів, та холекальциферолу (вітаміну D3), який отримано із тканин тварин.",
          rating:3,
          type:"Нікотинамі́д"
        },
        {
          id:"004",
          title:"Вітамін B3",
          photo:"free-icon-vitamins-6011439.png",
          description:"Нікоти́нова кислота́, також ніацин, вітамін B3, вітамін PP (від англ. pellagra preventing), нікотинамід — розчинний у воді вітамін; необхідний для багатьох реакцій окиснення у живих клітинах.",
          rating:1,
          type:"жиророзчинний"
        },
        {
          id:"005",
          title:"Омега-3",
          photo:"free-icon-omega-3-4114258.png",
          description:"Омега-3 поліненасичені жирні кислоти належать до родини ненасичених жирних кислот, що мають подвійний вуглець-вуглецевий зв'язок в омега-3 позиції, тобто біля третього атома вуглецю від метильного кінця жирної кислоти",
          rating:4,
          type:"Жирні кислоти"
        },
        {
          id:"006",
          title:"Вітамін E",
          photo:"free-icon-vitamin-e-10638138.png",
          description:"Вітамін E — група жиророзчинних біологічно активних сполук (токофероли та токотрієноли), що проявляють антиоксидантні властивості.",
          rating:5,
          type:"жиророзчинні"
        }
      ]

      console.log(arrayOfVitamins)

      arrayOfVitamins.forEach((item,index) =>{
        //console.log("елемент №",index.item)

        let divVitamin = document.createElement('div')
        //divVitamin.innerText = item.title 
        
        divVitamin.innerHTML = `
                <p>${item.id}</p>
                <h3>${item.title}</h3>
                <hr>
                <img src="img/vitamins/${item.photo}" alt="">
                <p>${item.description}</p>
                <div>
                <p>${"💚". repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
                <p>${item.type}</p>
                </div>
                `
        divVitamin.classList.add('vitamin')

        document.getElementById("p-vitamins").appendChild(divVitamin)
      })

     
                
                

