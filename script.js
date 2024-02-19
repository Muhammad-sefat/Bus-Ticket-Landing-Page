const seats = document.getElementsByClassName('seat');
let count = 0; 
let totalPrice = 0;  
        

for(let seat of seats){
    seat.addEventListener('click',function(e){

        // double click check
    
      
        // count
        count++;
        if(count > 4){
            alert('You have already selected four seat.');
            return;
        }

    // decrease number
        let seatNumber = parseInt(document.getElementById('seat-number').innerText);
        let newSeatNumber = seatNumber - 1;
        setNumberElementById('seat-number',newSeatNumber);

    //    increase number
       let conterNumber = parseInt(document.getElementById('counter-number').innerText);
       let newCountNumber = conterNumber + 1;
       setNumberElementById('counter-number',newCountNumber);

    // background color set
        seat.style.background = "limeGreen";
        seat.style.color = "white";



     // update total price
        const perPrice = parseInt(document.getElementById('per-price').innerText);
        totalPrice += perPrice;
        setNumberElementById("total-price",totalPrice)
        
     //update grand total price
      setNumberElementById('grand-total',totalPrice);

    
      // coupon
      const inputValue = document.getElementById('input-value');
      const grandTotal = document.getElementById('grand-total'); 
      
      inputValue.addEventListener('click',function(){
        const applyContainer = document.getElementById('apply-container');
        const firstCoupon = document.getElementById('first-coupon').innerText;
        const secondCoupon = document.getElementById('second-coupon').innerText;
        const input = document.getElementById('input').value;
        const newInput1 = input.toUpperCase().split(" ").join("");
        const newInput2 = input.split(" ").join(" ").charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        applyContainer.classList.add('hidden');

        
        if(newInput1 === firstCoupon){
            const discountValue = totalPrice * 15 / 100;
            const remainValue = totalPrice - discountValue;
            grandTotal.innerText = remainValue;

        }else if(newInput2 === secondCoupon){
            const discountValue = totalPrice * 20 / 100;
            const remainValue = totalPrice - discountValue;
            grandTotal.innerText = remainValue;
        }else{
            applyContainer.classList.remove('hidden')
        }
            
    })

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

// pop-up
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
