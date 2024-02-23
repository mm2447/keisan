const calc = ()=>{
    const payment = document.querySelector("input[name=payment]")
    const input1 = document.querySelector("input[name=input1]");
    const input2 = document.querySelector("input[name=input2]");
    const input3 = document.querySelector("input[name=input3]");
    const input4 = document.querySelector("input[name=input4]");
    const input5 = document.querySelector("input[name=input5]");
    const total = document.querySelector("input[name=total]");
    const rest = document.querySelector("input[name=rest]");
    total.value = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value);
    rest.value = Number(payment.value) - total.value;
}
