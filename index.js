const allBtn = document.getElementsByClassName("btn"); 
let seatsCount = 40;
let countUp = 0;
let totalPrice = 0;



for( const btn of allBtn){
    btn.addEventListener("click",function(){

        if(countUp >=4){
            alert("You cannot selected more 4 Ticket");
            return;
        
        }

        seatsCount  =  seatsCount - 1;
        
        const seatLeft = document.getElementById('cart-count');
        seatLeft.innerText = seatsCount;
        // seats card done

        countUp = countUp + 1;
        const count =document.getElementById('count');
        count.innerText = countUp;

        // seats up section done

        btn.style.backgroundColor = "#1DD100";
        btn.style.color ="white";

        // btn color done

        const SetNumber = btn.innerText;
        const ticketShow =document.getElementById('ticket-container');
        const li = document.createElement('ul');
        li.style.display='flex';
        li.style.justifyContent='space-between';
        
        
        const p = document.createElement('p');
        p.innerText = SetNumber;

        const p1 =document.createElement('p');
        p1.innerText = 'Economy';

        const p2 =document.createElement('p2');
        p2.innerText ="550";
        let price = p2.innerText;

        // append time to

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        ticketShow.appendChild(li);

        // ticket show done

        totalPrice =totalPrice + parseInt(price);
        

        const totalPriceElement =document.getElementById('total-price');
        totalPriceElement.innerText = totalPrice;


    })
}


const apply =document.getElementById('Apply');
apply.addEventListener('click',function(){
    const couponElement = document.getElementById('input-field').value;
  
    const convertCoupon = couponElement.split(' ').join('').toUpperCase();

    if(convertCoupon === 'NEW15'){
        const grandPriceElement = document.getElementById('grand');
        const grandTotal = totalPrice * 0.15;
        const disCountGrandTotal = totalPrice - grandTotal;
        grandPriceElement.innerText = disCountGrandTotal;
        
        const discountPrice =document.getElementById('discountPrice');
        discountPrice.innerText=grandTotal;
        
        // document.getElementById('input-field').value ='';
        
        const inputDiv = document.getElementById('input-div');
        inputDiv.classList.add('hidden');
        
    }
    else if( convertCoupon === "COUPLE20"){
        const grandPriceElement = document.getElementById('grand');
        const grandTotal = totalPrice * 0.2;

        const disCountGrandTotal = totalPrice - grandTotal;
        grandPriceElement.innerText = disCountGrandTotal;

        const discountPrice =document.getElementById('discountPrice');
        discountPrice.innerText=grandTotal;

        const inputDiv = document.getElementById('input-div');
        inputDiv.classList.add('hidden');

        document.getElementById('input-field').value ='';

    
    }

    else{
        alert("Invalid Your Coupon Code");
        document.getElementById('input-field').value= '';
    }



    const nextButton = document.getElementById('nextButton');

    const phoneNumber = document.getElementById('phoneNumber');

    if(countUp !==0 && phoneNumber != ''){
        nextButton.classList.remove('hide');
        nextButton.classList.add('bg-green');
        nextButton.classList.add('text-white');
    }
    else{
        nextButton.classList.add('hide');

    }

   

    if(countUp !== 0 && phoneNumber !=''){
        nextButton.classList.remove('hide');
        nextButton.classList.add.apply('bg-[#1DD100');
        nextButton.classList.add('text-white');

    }
    else{
        nextButton.classList.add('hide');
    }

    if(!btn.disabled){
        btn.disabled = true;
    }
   


})


    


function  play(){
    const successContainer= document.getElementById('success');
    successContainer.classList.remove('hidden');
    
    // console.log(homeScreen.classList);
}











