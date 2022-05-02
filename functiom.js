/*function sum()
{
    return 2+2;
}
console.log(sum());*/
// function with passing a arguments
/*function sum(num1,num2)
{
    return num1+num2;
}
console.log(sum(2,2));*/
//function with using single arguments
/*function sum(num1,num2)
{
    if(num2==undefined)
    {
        return num1+num1;
    }
   // console.log(num1);
   // console.log(num2);
    return num1+num2;
}
console.log(sum(2,3));*/

//function using with arguments in string function

/*function usernamefromemail(email)
{
    return email.slice(0,email.indexOf("@"));
}
console.log(usernamefromemail("user@gmail.com"));*/
//another
function toproper(name)
{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();

}
console.log(toproper("prasanth"));