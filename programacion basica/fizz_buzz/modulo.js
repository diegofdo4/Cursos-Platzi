var num = 100;

for(var i = 1;i<=num;i++){
    var divisible = false;
    if(i%3 == 0){
        divisible = true;
        document.write(i + "  fizz");  
    }
    if(i%5 == 0){
        divisible = true;
        document.write(i + "  buzz"); 
    }
    if(!divisible){
        document.write(i);
    }
    document.write("<br>"); //concatenamos el "<br>" para hacer un salto de linea

}