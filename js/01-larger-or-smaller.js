var num1;
var num2;

num1 = window.prompt("Enter Number 1");
num2 = window.prompt("Enter Number 2");

if(num1 > num2){
    document.write("Largest number is : "+num1);
}else if (num1 === num2 ){
    document.write("Numbers are equal");
}else{
    document.write("Largest number is : "+num2);
}