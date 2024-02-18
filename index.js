const allBtn = document.getElementsByClassName("btn"); 
let seatsCount = 40;
let countUp = 0;
let totalPrice =0;


for( const btn of allBtn){
    btn.addEventListener("click",function(){
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
        

        const totalPriceElemet =document.getElementById('total-price');
        totalPriceElemet.innerText = totalPrice;


    })
}

const apply =document.getElementById('apply');
apply.addEventListener('click',function(){
    const couponElement = document.getElementById('input-field').value;
    const convertCoupon = couponElement.split(' ').join('').toUpperCase();

    if(convertCoupon === 'NEW15'){
        const grandPriceElement = document.getElementById('grand');
        const grandTotal = totalPrice * 0.15;
        const disCountGrandTotal = totalPrice - grandTotal;
        grandPriceElement.innerText = disCountGrandTotal;

        document.getElementById('input-field').value = '';

    }
    else if( convertCoupon === "COUPLE20"){
        const grandPriceElement = document.getElementById('grand');
        const grandTotal = totalPrice * 0.2;
        const disCountGrandTotal = total -grandTotal;
        grandPriceElement.innerText = disCountGrandTotal;

        document.getElementById('input-field').value ='';
    }
    else{
        alert("Invalid Your Coupon Code");
        document.getElementById('input-field').value='';
    }
})
    


