const range = document.querySelector("#range");
const valueK = document.querySelector(".valueK");
const price = document.querySelector(".price");

let prices = [4,8,16,32,64];
let pageView = ["5K", "50K", "250K", "500K", "1000K"];
valueK.innerHTML = pageView[0];
price.innerHTML = prices[0];
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
        if(parseInt(this.value) == 0){
            valueK.innerHTML = pageView[0];
            price.innerHTML = prices[0] + "$ ";
        }
        if(parseInt(this.value) == 25){
            valueK.innerHTML = pageView[1];
            price.innerHTML = prices[1] + "$ ";
        }
        if(parseInt(this.value) == 50){
            valueK.innerHTML = pageView[2];
            price.innerHTML = prices[2] + "$ ";
        }
        if(parseInt(this.value) == 75){
            valueK.innerHTML = pageView[3];
            price.innerHTML = prices[3] + "$ ";
        }
        if(parseInt(this.value) == 100){
            valueK.innerHTML = pageView[4];
            price.innerHTML = prices[4] + "$ ";
        }

    }
    
}

changeRange();