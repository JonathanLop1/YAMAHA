for(let diasemana=1;diasemana<=7;diasemana++)
if(diasemana==1){
  console.log("Lunes")
}else{
  if(diasemana==2){
    console.log("Martes")
  }else{
    if(diasemana==3){
      console.log("Miercoles")
    }else{
      if(diasemana==4){
        console.log("Jueves")
      }else{
        if(diasemana==5){
          console.log("Viernes")
          }else{
            if(diasemana==6){
              console.log("Sabado")
            }else{
              if(diasemana==7){
                console.log("Domingo")
              }else{
                console.log("inserta un numero adecuado de la semana")
              }
            }
          }
        }
      }
    }
  }

switch(diasemana){
  case 1: diasemana=1;
  console.log("Lunes");
  break;
  case 2: diasemana=2;
  console.log("Martes");
  break;
  case 3: diasemana=3;
  console.log("Miercoles");
  break;
  case 4: diasemana=4;
  console.log("Jueves");
  break;
  case 5: diasemana=5;
  console.log("Viernes");
  break;
  case 6: diasemana=6;
  console.log("Sabado");
  break;
  case 7: diasemana=7;
  console.log("Domingo");
  break;
}