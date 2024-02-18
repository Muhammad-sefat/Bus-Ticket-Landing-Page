const seats = document.getElementsByClassName('seat');

for(let seat of seats){
    seat.addEventListener('click',function(){

    // decrease number
        let seatNumber = parseInt(document.getElementById('seat-number').innerText);
        let newSeatNumber = seatNumber - 1;
        setNumberElementById('seat-number',newSeatNumber);

    //    increase number
       let conterNumber = parseInt(document.getElementById('counter-number').innerText);
       console.log(conterNumber);
       let newCountNumber = conterNumber + 1;
       setNumberElementById('counter-number',newCountNumber);

    // background color set
        seat.style.background = "limeGreen";
        seat.style.color = "white";

     // update price
        const perPrice = parseInt(document.getElementById('per-price').innerText);
        const totalPrice = parseInt(document.getElementById('total-price').innerText);
        let newTotalPrice = totalPrice + perPrice;
        setNumberElementById("total-price",newTotalPrice)
    })
}

function setNumberElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
