#! \usr\bin\env node
import inquirer from "inquirer";



let currencysPrices:any ={
    usd : 1,
    Eur: 0.91,
    Gbp: 0.76,
    Inr: 74.57,
    Pkr:278.78,
    Myr: 60.89

}

let i = 1
while (i<5){
    console.log(i);
    


let user_answer= await inquirer.prompt([
    {  
    name:"from",
    message:"Enter from currency",
    type:"list",
    choices:["usd","Eur","Gbp","Inr","Pkr","Myr"],
},

{
    name: "to",
    message:"Enter to currency",
    type:"list",
    choices:["usd","Eur","Gbp","Inr","Pkr","Myr"],
 
},
{
    name:"amount",
    message:"Enter your amount currency",
    type:"number",
}
])

//conditional statement

let from_amount = currencysPrices[user_answer.from] 
let to_amount = currencysPrices[user_answer.to]
let Amount = user_answer.amount
let baseAmount =Amount / from_amount
let final = baseAmount * to_amount
console.log(final.toFixed(2));
}