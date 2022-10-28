console.log('hey')
your_name = prompt('What is your name?')
age = parseInt(prompt('What is your age?'))
var amount = prompt('How much do you have?')
let new_amount = amount.replace("$", "");
money = parseInt(new_amount)


if (money <= 10 && age >= 15){
  console.log(`Hello ${your_name}, with your $${money} budget, I will recommend you visit Pizza hut`)
}else if((99 < money && money <= 250) && (age >= 15)){
  console.log(`Hello ${your_name}, with your $${money} budget, I will recommend you visit Xhi Chinese Restaurant`)
} else if((299 < money && money <= 600)&& (age >= 15)){
  console.log(`Hello ${your_name}, with your $${money} budget, I will recommend you visit Tiana's Deluxe Lounge`)
} else if (money > 600 && age >= 15){
  console.log('We do not have any recommendations at the moment')
} else{
  console.log(`Hello ${your_name}, you are less than 15 years old, please check back when we have kids and teens options`)
}
  

