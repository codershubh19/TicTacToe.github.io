var che = [
    ["-1", "-1", "-1"],
    ["-1", "-1", "-1"],
    ["-1", "-1", "-1"],
  ];
  var moves=9;
  



  var winner=0;
  function res(value){
      var cuar=document.getElementsByClassName("cur");
      winner=1;
      if(value==1)
      {
          
          cuar[0].innerHTML="You Win!";
  
      }
      else{
          cuar[0].innerHTML="You Lost!";
      }
  
      for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
              if(che[i][j]==-1)
              {
                  che[i][j]=value;
              }
          }
      }
  
  }
  
  function win()
  {
      if(che[0][0]==che[1][1]&&che[1][1]==che[2][2]&&che[0][0]!=-1)
      {
          res(che[0][0]);
         
      }
  
      if(che[2][0]==che[1][1]&&che[1][1]==che[0][2]&&che[2][0]!=-1){
          res(che[2][0]);
      }
  
      if(che[0][0]==che[0][1]&&che[0][1]==che[0][2]&&che[0][0]!=-1){
          res(che[0][0]);
      }
  
      if(che[0][0]==che[1][0]&&che[1][0]==che[2][0]&&che[0][0]!=-1){
          res(che[0][0]);
      }
  
      if(che[2][0]==che[2][1]&&che[2][1]==che[2][2]&&che[2][0]!=-1){
          res(che[2][0]);
      }
  
      if(che[1][0]==che[1][1]&&che[1][1]==che[1][2]&&che[1][0]!=-1){
          res(che[1][0]);
      }
  
      if(che[0][1]==che[1][1]&&che[1][1]==che[2][1]&&che[0][1]!=-1){
          res(che[0][1]);
      }
  
      if(che[0][2]==che[1][2]&&che[1][2]==che[2][2]&&che[0][2]!=-1){
          res(che[0][2]);
      }
      if(moves==0)
      {
          var cq=document.getElementsByClassName("cur");
          cq[0].innerHTML="DRAW!";
      }
  }
  
  function makecheck(key)
  {
    let x=key[0]-'0';
    let y=key[1]-'0';
    
    if(che[x][y]==-1&&moves%2==0)
    {
        
        let temp=document.getElementsByClassName(key);
        moves--;
        che[x][y]=0;
        console.log(x+" "+y);
        console.log(moves);
        temp[0].innerHTML = "⭕";
        win();
    }    
    
    
  }


  function iswin(key)
  {
      console.log(key);
      if(moves==6&&che[0][2]==che[2][0]&&che[0][2]==1){
          makecheck("01");
          return;
      }
        if(moves==6&&che[2][2]==che[1][1]&&che[1][1]==1){
          makecheck("12");
          return;
      }
        if(moves==6&&che[2][2]==che[0][0]&&che[0][0]==1){
          makecheck("21");
          return;
      }
    if((che[0][0]==che[1][1]&&che[1][1]==key)||(che[1][1]==che[2][2]&&che[2][2]==key)||(che[0][0]==che[2][2]&&che[2][2]==key))
    {
        if(key==0||key==1)
        {
            if(che[0][0]==che[1][1])
            {
                makecheck("22");
            }
            if(che[1][1]==che[2][2])
            {
                makecheck("00");
            }
            if(che[0][0]==che[2][2]){
                makecheck("11");
            }
        }
        
    }
    if((che[2][0]==che[1][1]&&che[1][1]==key)||(che[1][1]==che[0][2]&&che[1][1]==key)||(che[0][2]==che[2][0]&&che[0][2]==key))
    {
        if(key==0||key==1)
        {
            if(che[2][0]==che[1][1])
            {
                makecheck("02");
            }
            if(che[1][1]==che[0][2])
            {
                makecheck("20");
            }
            if(che[0][2]==che[2][0]){
                makecheck("11");
            }
        }
        
    }
    if((che[0][0]==che[0][1]&&che[0][1]==key)||(che[0][1]==che[0][2]&&che[0][2]==key)||(che[0][2]==che[0][0]&&che[0][0]==key))
    {
        if(key==0||key==1)
        {
            if(che[0][0]==che[0][1])
            {
                makecheck("02");
            }
            if(che[0][1]==che[0][2])
            {
                makecheck("00");
            }
            if(che[0][2]==che[0][0]){
                makecheck("01");
            }
        }
    }
    if((che[0][0]==che[1][0]&&che[1][0]==key)||(che[1][0]==che[2][0]&&che[2][0]==key)||(che[2][0]==che[0][0]&&che[0][0]==key))
    {
        if(key==0||key==1)
        {
            
            if(che[0][0]==che[1][0])
            {
                makecheck("20");
            }
            if(che[1][0]==che[2][0])
            {
                makecheck("00");
            }
            if(che[2][0]==che[0][0]){
                
                makecheck("10");
            }
        }
    }
    if((che[2][0]==che[2][1]&&che[2][1]==key)||(che[2][1]==che[2][2]&&che[2][2]==key)||(che[2][2]==che[2][0]&&che[2][0]==key))
    {
        if(key==0||key==1)
        {
            if(che[2][0]==che[2][1])
            {
                makecheck("22");
            }
            if(che[2][1]==che[2][2])
            {
                makecheck("20");
            }
            if(che[2][2]==che[2][0]){
                makecheck("21");
            }
        }
    }
    if((che[1][0]==che[1][1]&&che[1][1]==key)||(che[1][1]==che[1][2]&&che[1][2]==key)||(che[1][2]==che[1][0]&&che[1][0]==key))
    {
        if(key==0||key==1)
        {
            if(che[1][0]==che[1][1])
            {
                makecheck("12");
            }
            if(che[1][1]==che[1][2])
            {
            
                makecheck("10");
            }
            if(che[1][2]==che[1][0]){
                makecheck("11");
            }
        }
    }
    if((che[0][1]==che[1][1]&&che[1][1]==key)||(che[1][1]==che[2][1]&&che[2][1]==key)||(che[2][1]==che[0][1]&&che[0][1]==key))
    {
        if(key==0||key==1)
        {
            if(che[0][1]==che[1][1])
            {
                makecheck("21");
            }
            if(che[1][1]==che[2][1])
            {
                makecheck("01");
            }
            if(che[2][1]==che[0][1]){
                makecheck("11");
            }
        }
    }
    if((che[0][2]==che[1][2]&&che[1][2]==key)||(che[1][2]==che[2][2]&&che[2][2]==key)||(che[2][2]==che[0][2]&&che[0][2]==key))
    {
        if(key==0||key==1)
        {
            if(che[0][2]==che[1][2])
            {
                makecheck("22");
            }
            if(che[1][2]==che[2][2])
            {
                
                makecheck("02");
            }
            if(che[2][2]==che[0][2]){
                console.log("qw");
                makecheck("12");
            }
        }
    }

  }

  function computer()
  {
      console.log(che);
    if(chance){
        chance=0;
    }
    else{
        chance=1;
    }
    if(moves==8)
    {
        
        //moves--;
        if(che[1][1]==-1)
        {
            makecheck("11");
        }
        else
        {
            
            makecheck("00");
        }
    }
    else
    {
        
        iswin(0);
        if(moves%2==0)
        {
            iswin(1);
            
        }
        if(moves%2==0)
        {
            let f=1;
            for(let i=0;i<3;i++){
                if(f==0){
                    break;
                }
                for(let j=0;j<3;j++){
                    if(che[i][j]==-1)
                    {
                        f=0;
                        let temp1="";
                        temp1=temp1+i+j;
                        makecheck(temp1);
                        break;
                    }
                }
            }
        }
        console.log(che);
    }
    
  }

  
  var chance = 1;
  
  var q00 = document.getElementsByClassName("00");
  
  q00[0].addEventListener("click", function () {
    if (che[0][0] == -1) {
        moves--;
      if (chance) {
        q00[0].innerHTML = "❌";
      } else {
        q00[0].innerHTML = "⭕";
      }
      che[0][0] = chance;
      
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }

      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200);  
        
      }
    }
  });
  
  var q01 = document.getElementsByClassName("01");
  q01[0].addEventListener("click", function () {
    if (che[0][1] == -1) {
      moves--;
      if (chance) {
        q01[0].innerHTML = "❌";
      } else {
        q01[0].innerHTML = "⭕";
      }
      che[0][1] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  var q02 = document.getElementsByClassName("02");
  q02[0].addEventListener("click", function () {
    if (che[0][2] == -1) {
      moves--;
      if (chance) {
        q02[0].innerHTML = "❌";
      } else {
        q02[0].innerHTML = "⭕";
      }
      che[0][2] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  var q10 = document.getElementsByClassName("10");
  q10[0].addEventListener("click", function () {
    if (che[1][0] == -1) {
      moves--;
      if (chance) {
        q10[0].innerHTML = "❌";
      } else {
        q10[0].innerHTML = "⭕";
      }
      che[1][0] = chance;
      if(chance){
        chance=0;
    }
    else{
        chance=1;
    }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  var q11 = document.getElementsByClassName("11");
  q11[0].addEventListener("click", function () {
    if (che[1][1] == -1) {
      moves--;
      if (chance) {
        q11[0].innerHTML = "❌";
      } else {
        q11[0].innerHTML = "⭕";
      }
      che[1][1] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
     
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200);
    }
    }
  });
  
  
  var q12 = document.getElementsByClassName("12");
  q12[0].addEventListener("click", function () {
    if (che[1][2] == -1) {
      moves--;
      if (chance) {
        q12[0].innerHTML = "❌";
      } else {
        q12[0].innerHTML = "⭕";
      }
      che[1][2] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  var q20 = document.getElementsByClassName("20");
  q20[0].addEventListener("click", function () {
    if (che[2][0] == -1) {
      moves--;
      if (chance) {
        q20[0].innerHTML = "❌";
      } else {
        q20[0].innerHTML = "⭕";
      }
      che[2][0] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  
  var q21 = document.getElementsByClassName("21");
  q21[0].addEventListener("click", function () {
    if (che[2][1] == -1) {
      moves--;
      if (chance) {
        q21[0].innerHTML = "❌";
      } else {
        q21[0].innerHTML = "⭕";
      }
      che[2][1] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  
  var q22 = document.getElementsByClassName("22");
  q22[0].addEventListener("click", function () {
    if (che[2][2] == -1) {
      moves--;
      if (chance) {
        q22[0].innerHTML = "❌";
      } else {
        q22[0].innerHTML = "⭕";
      }
      che[2][2] = chance;
      if(chance){
          chance=0;
      }
      else{
          chance=1;
      }
      
      win();
      if(winner==0)
      {
        setTimeout(() => {
            computer();
        }, 200); 
    }
    }
  });
  
  
