function check()
      {
      var yes=0;
      var no=0;
      var otvet="";
      var choice;
      for (var v=1; v<=3; v++)
      {
      var q = document.forms['quiz'].elements['vopros'+v];
       for (var i=0; i<q.length; i++)
       {
       if (q[i].checked) {
       choice=q[i].value;
       }
       }
       if (choice=="yes") {yes++;}
       if (choice=="no") {no++;}
      }
      switch (true) {
      case (yes<2): otvet="оценка 3";break;
      case (yes==2): otvet="оценка 4";break;
      case (yes>2): otvet="оценка 5";break;
      default: otvet="очень плохо";break;
      }
      alert(otvet);
      }
      {
      const dragstart = function(event) {
        event.dataTransfer.setData("text", event.target.id);
      };
      const dragover = function(event) {
        if(event.target.nodeName.toLowerCase() === "img") {
          return true;
        }
        event.preventDefault();
      }
      const drop = function(event) {
        event.preventDefault();
        let imageId = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(imageId));
      };

      const cells = document.getElementsByClassName("Acol");
      Array.from(cells).forEach((element) => {
        element.addEventListener('dragover',dragover);
        element.addEventListener('drop',drop);
      });      

      const images = document.getElementsByTagName("img");
      Array.from(images).forEach((element) => {
        element.addEventListener('dragstart',dragstart);
      });
    }
    {
      function Submit(){
        if((document.getElementById('EngWord').value)=="Собака") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
        
      }
      function Submit2(){
        if((document.getElementById('EngWord2').value)=="Кошка") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
      }
      function Submit3(){
        if((document.getElementById('EngWord3').value)=="Корова") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
       
      }
      function SubmitWR(){
        if((document.getElementById('socleWR').value)=="Мало") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
      }
      function SubmitWR2(){
        if((document.getElementById('socleWR2').value)=="Бездельничать") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
      }
      function SubmitWR3(){
        if((document.getElementById('socleWR3').value)=="Далеко") {
          return alert("Верно!");
        }
        else{
          return alert("Ошибка!Попробуй еще раз.");
        }
      }
      {
        function Submit4(){
          return alert("Верно!");
          
        }
        
        function Submit5(){
          return alert("Не верно!");
        }
      }
      {
        function SubmitFalse(){
          document.getElementById('cardCick').classList.add('cardCick-bgFalse'); 
          
        }
        
        function SubmitTrue(){
          document.getElementById('cardCick').classList.add('cardCick-bgTrue');
        }
        function SubmitFalse2(){
          document.getElementById('cardCick2').classList.add('cardCick-bgFalse'); 
          
        }
        
        function SubmitTrue2(){
          document.getElementById('cardCick2').classList.add('cardCick-bgTrue');
        }
        function SubmitFalse3(){
          document.getElementById('cardCick3').classList.add('cardCick-bgFalse'); 
          
        }
        
        function SubmitTrue3(){
          document.getElementById('cardCick3').classList.add('cardCick-bgTrue');
        }
      }
    }