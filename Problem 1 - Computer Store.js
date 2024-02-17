function computerStore(input) {
    let typeCustomer = input.pop().toLowerCase();
    let price = 0;
    let totalPrice = 0;
    let taxes = 0;
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        price = Number(input[i]);
        if (price <= 0) {
            console.log(`Invalid price!`);
        } else {
            totalPrice += price;
        }
    }

    if (totalPrice === 0) {
        console.log(`Invalid order!`);
    } else {
        taxes = totalPrice * 0.2;
        total = totalPrice + taxes;

        if (typeCustomer === "special") {
            total *= 0.9;
        }

        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${total.toFixed(2)}$`);
    }
}
//computerStore(['1050','200','450','2','18.50','16.86','special']);
computerStore(['1023','15','-20','-5.50','450','20','17.66','19.30','regular']);
computerStore(['regular']);