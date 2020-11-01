function payment() {

    let valorCheckout = document.querySelector('.vCheckout').value;

    let vDesconto = document.querySelector('.vDesconto');
    let vPagar = document.querySelector('.vPagar');
    let bPagar = document.querySelector('.bPagar');

    document.querySelector('.valores').style.display = "flex";

    if (valorCheckout > 2 && valorCheckout <= 499.99) {
        valorPagar = valorCheckout - (valorCheckout * .10);
        vPagar.innerText = parseFloat(valorPagar).toFixed(2);
        bPagar.innerText = parseFloat(valorPagar).toFixed(2);

        valorDesconto = valorPagar - valorCheckout;
        vDesconto.innerText = valorDesconto;50

    } else if (valorCheckout > 499.99) {
        valorPagar = valorCheckout - (valorCheckout * .15);
        vPagar.innerText = parseFloat(valorPagar).toFixed(2);
        bPagar.innerText = parseFloat(valorPagar).toFixed(2);

        valorDesconto = valorPagar - valorCheckout;
        vDesconto.innerText = valorDesconto;

    } else {
        vDesconto.innerText = "0.00";
        vPagar.innerText = "0.00";
        bPagar.innerText = "0.00";
        document.querySelector('.valores').style.display = "none";
    }
};
