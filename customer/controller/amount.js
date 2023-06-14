let amountElement = document.getElementById("amount");
let amount = amountElement.value;

let render = (amount) => {
    amountElement.value = amount
}

let handlePlus = () =>{
    amount++;
    render(amount)
}

let handleMinus = () =>{
    amount--;
    render(amount);
}