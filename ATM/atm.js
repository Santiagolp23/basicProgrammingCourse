class Bill {
    constructor(v, q){
        this.value = v;
        this.quantity = q;
    }
}

var register = [];
var delivered = [];
register.push(new Bill (50, 20));
register.push(new Bill (20, 20));
register.push(new Bill (10, 10));

var money = 0;
var div = 0;
var papers = 0;

var result = document.getElementById("result")
var b = document.getElementById("extract");
b.addEventListener("click", deliverMoney);

function deliverMoney() {
    var t = document.getElementById("money");
    money = parseInt(t.value);
    for(var bi of register) {
        if(money > 0) {
            div = Math.floor(money / bi.value);
            if(div > bi.quantity) {
                papers = bi.quantity;
            }
            else {
                papers = div;
            }
            delivered.push( new Bill(bi.value, papers));
            money -= (bi.value * papers);
        }
    }
    if (money > 0) {
        result.innerHTML = "I cannot give you that amount :(";
    }
    else {
          for(var e of delivered) {
             if(e.quantity > 0) {
             result.innerHTML += e.quantity + " bills of $" + e.value + "<br />";
             }
          }
    }
}