class Bill {
    constructor(v, q){
        this.value = v;
        this.quantity = v;
    }
}

var register = [];
var delivered = [];
register.push(new Bill (50, 3));
register.push(new Bill (20, 2));
register.push(new Bill (10, 2));

var money = 210;
var div = 0;
var papers = 0;

var b = document.getElementById("extract");
b.addEventListener("click", deliverMoney);

function deliverMoney() {
    for(var bi of register) {
        if(money > 0) {
            div = Math.floor(money / bi.value);
            console.log(div);
        }
    }
}