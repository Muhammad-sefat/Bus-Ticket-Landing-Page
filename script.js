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



     // update total price
        const perPrice = parseInt(document.getElementById('per-price').innerText);
        const totalPrice = parseInt(document.getElementById('total-price').innerText);
        let newTotalPrice = totalPrice + perPrice;
        setNumberElementById("total-price",newTotalPrice)


     //update grand total price
     const grandTotal = parseInt(document.getElementById('grand-total').innerText);
     setNumberElementById('grand-total',newTotalPrice);



    // append price
        const appendDiv = document.getElementById("append-div");
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = "space-between";
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seat.innerText;
        p2.innerText = "Economoy";
        p3.innerText = perPrice;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        appendDiv.appendChild(li);

    })
}

// popup
const popup = document.getElementById('popup');
const showPopup = document.getElementById('show-popup');
const closePopup = document.getElementById('close-popup');
showPopup.addEventListener('click',function(){
    popup.classList.remove('hidden');
})
closePopup.addEventListener('click',function(){
    popup.classList.add('hidden');
})

function setNumberElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
