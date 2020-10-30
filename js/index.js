let Anser = ['Orange','Banana','Cherry','Pear','Kiwi','Coconut','Lime','Mango'];
let prompt=['Слово начинается с буквы - О','Monkeys like to eat it.','First word it is - C','Желтая лампочка висит','Зеленого цвета внутри','First word it is - C','очень кислый','First word it is - M'];
let math=0, count=0, elem, elemText, articleDiv,elem1, elemText1, articleDiv1,elem2, elemText2, articleDiv2;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
     math=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(math) ; //Максимум и минимум включаются
    switch(math){
        case 0:
             articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
            // создаем элемент
             elem = document.createElement("p");
            // создаем для него текст
             elemText = document.createTextNode("Какой фрукт (из семейства цитрусовых) ораньжевого цвета?");
            // добавляем текст в элемент в качестве дочернего элемента
            elem.appendChild(elemText);
            // добавляем элемент в блок div
            articleDiv.appendChild(elem);
           
            break;
        
            case 1:
              articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
             // создаем элемент
              elem = document.createElement("p");
             // создаем для него текст
              elemText = document.createTextNode("Он желтый снаружи и белый, мягкий внутри.");
             // добавляем текст в элемент в качестве дочернего элемента
             elem.appendChild(elemText);
             // добавляем элемент в блок div
             articleDiv.appendChild(elem);
            
             break;
             case 2:
              articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
             // создаем элемент
              elem = document.createElement("p");
             // создаем для него текст
              elemText = document.createTextNode("Round, as ball, Red, as blood, Sweet, as honey.");
             // добавляем текст в элемент в качестве дочернего элемента
             elem.appendChild(elemText);
             // добавляем элемент в блок div
             articleDiv.appendChild(elem);
            
             break;
         
             case 3:
               articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
              // создаем элемент
               elem = document.createElement("p");
              // создаем для него текст
               elemText = document.createTextNode("This is looks like a lamp");
              // добавляем текст в элемент в качестве дочернего элемента
              elem.appendChild(elemText);
              // добавляем элемент в блок div
              articleDiv.appendChild(elem);
             
              break;
              case 4:
                articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
               // создаем элемент
                elem = document.createElement("p");
               // создаем для него текст
                elemText = document.createTextNode("looks like a small tropic bird");
               // добавляем текст в элемент в качестве дочернего элемента
               elem.appendChild(elemText);
               // добавляем элемент в блок div
               articleDiv.appendChild(elem);
              
               break;
           
               case 5:
                 articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
                // создаем элемент
                 elem = document.createElement("p");
                // создаем для него текст
                 elemText = document.createTextNode("Round, is a hairy; inside-white; outside-brown.");
                // добавляем текст в элемент в качестве дочернего элемента
                elem.appendChild(elemText);
                // добавляем элемент в блок div
                articleDiv.appendChild(elem);
               
                break;
                case 6:
                 articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
                // создаем элемент
                 elem = document.createElement("p");
                // создаем для него текст
                 elemText = document.createTextNode("Что можно назвать зеленым лимоном?");
                // добавляем текст в элемент в качестве дочернего элемента
                elem.appendChild(elemText);
                // добавляем элемент в блок div
                articleDiv.appendChild(elem);
               
                break;
            
                case 7:
                  articleDiv = document.querySelector("div.cardAnserText");//куда помещаем
                 // создаем элемент
                  elem = document.createElement("p");
                 // создаем для него текст
                  elemText = document.createTextNode("This a long red or green fruit which is often seen in the joghurts");
                 // добавляем текст в элемент в качестве дочернего элемента
                 elem.appendChild(elemText);
                 // добавляем элемент в блок div
                 articleDiv.appendChild(elem);
                
                 break;
                 
    }
    
    return math;
}
let num1 = document.getElementById('cardAnserBTN');
  {
    function ClickAnser(){
        
        if(num1.value==Anser[math]) {
          console.log("yes");
          elemText.textContent='';
          alert("Верно!");
          getRandomIntInclusive(0,7);
        }
        else{
            console.log("no");
            count++;
             articleDiv1 = document.querySelector("div.cardAnser_try");//куда помещаем
            
           if(count==1){
            // создаем элемент
            elem1 = document.createElement("p");
            // создаем для него текст
             elemText1 = document.createTextNode("Попытка № "+count);
            // добавляем текст в элемент в качестве дочернего элемента
            elem1.appendChild(elemText1);
            // добавляем элемент в блок div
            articleDiv1.appendChild(elem1);
           }
           if(count==2){
            elemText1.textContent='Попытка № 2';
           }
           if(count==3){
            elemText1.textContent='Попытка № 3';
             articleDiv2 = document.querySelector("div.cardAnser_prompt");//куда помещаем
            // создаем элемент
             elem2 = document.createElement("p");
            // создаем для него текст
             elemText2 = document.createTextNode(prompt[math]);
            // добавляем текст в элемент в качестве дочернего элемента
            elem2.appendChild(elemText2);
            // добавляем элемент в блок div
            articleDiv2.appendChild(elem2);
           }
           if(count==4){
            elemText.textContent='';
            elemText1.textContent='';
            elemText2.textContent='';
            
            
            alert("Это был  "+Anser[math]);
            count=0;
            getRandomIntInclusive(0,7);
           }
            
        }
      }
  }
  getRandomIntInclusive(0,7);