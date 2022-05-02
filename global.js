var a=10;
var b=20;
const z=19;
console.log(`global:${a}`);
console.log(`global:${b}`);
console.log(`global:${z}`);

const prasanth=()=>
{

    console.log(`global:${z}`);
    {
        console.log(`global:${z}`);

    }

    
}
prasanth();
//global scope is used to declare the variable in globally in 
// the program it can be easy to access the element easily in
//the block of codes and access the variable anywhere
