1.
function dadebiti() {
    let n = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
    let x = 0;
    for(let item of n){
        if(item > 0){
            x += item;
        }
    }
    return x;
}
console.log(dadebiti());

2. 
function shejameba(){
   let x = 0;
   let numbers =[10, 50, 6, 7, 8, 11, 6, 3, 9];
    for(let item of numbers){
        x = x + item;
        x + item;
    }
    return x;
};
console.log(shejameba());

3.
function dabruneba(){
    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true,
      }
      if(user.isloggedin == true){
        return user.firstname + " " + user.lastname;
      }else if (user.isloggedin == false){
        return false ;
      }
};
console.log(dabruneba());


5.
let array =[1,2,3,4,5,6,7,8,9,10];
for(let item of array){
    if(item > 0 && item < 10){
        console.log(item);
    }
}

6.
let numbers =[1,2,3,4,5,6,7,8,9,10];
for(let item of numbers){
    if(item == 5){
        break;
    }
}
7.
//1
let arrayx = ["html", "css", "python","javascript", "bootstrap"];
for(i = 0; i < arrayx.length; i++){
    if(arrayx[i].length > 4 && arrayx[i].includes("av")){
        console.log(arrayx[i]);
    }
}

//2
let arrayz = ["html", "css", "python","javascript", "bootstrap"];
for(let item of arrayz){
    if(item.length > 4 && item.includes("av")){
        console.log(item)
    }
}



