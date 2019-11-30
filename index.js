function breakOut(array,changeValue,stopValue){
  array.forEach((element,index,array){
    if(array[index] == stopValue){
      break;
    }
    array[index] = changeValue;
  });
}
