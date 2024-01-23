const range = document.querySelector("#range");
const valueK = document.querySelector(".valueK");
const price = document.querySelector(".price");
const secimKutusu = document.querySelector("#secimKutusu");

let prices = [4,8,16,32,64];
let pageView = ["5K", "50K", "250K", "500K", "1000K"];
valueK.innerHTML = pageView[0];
price.innerHTML = prices[0];
let deger = 0;
let prices2 = [];

function changeRange(){

    // if (range.oninput == 0) {
    //         valueK.innerHTML = pageView[0];
    //         price.innerHTML = prices[0] + "$ ";
    // } 
    // if (range.oninput == 25) {
    //     valueK.innerHTML = pageView[1];
    //     price.innerHTML = prices[1] + "$ ";
    // }
    // if (range.oninput == 50) {
    //     valueK.innerHTML = pageView[2];
    //     price.innerHTML = prices[2] + "$ ";
    // }

    range.oninput = function(){
        let rangeDeger = parseInt(this.value);
        if(rangeDeger == 0){
            valueK.innerHTML = pageView[0];
            changeRange();
            bindCheckBox(0);
        }
        if(rangeDeger == 25){
            valueK.innerHTML = pageView[1];
            bindCheckBox(1);
        }
        if(rangeDeger == 50){
            valueK.innerHTML = pageView[2];

            bindCheckBox(2);
        }
        if(rangeDeger == 75){
            valueK.innerHTML = pageView[3];
            bindCheckBox(3);
        }
        if(rangeDeger == 100){
            valueK.innerHTML = pageView[4];
            bindCheckBox(4);
        }

    }

    
}


function bindCheckBox(deger){
    if (secimKutusu.checked == true) {
        prices2[deger] = prices[deger]*25/100;
        price.innerHTML = prices2[deger] + "$ ";
    }
    else{
        price.innerHTML = prices[deger] + "$ ";
    }
}
changeRange();
