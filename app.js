const amount=document.getElementById('amount');
const guests=document.getElementById('guests');
const quality=document.getElementById('quality');
const tipamount=document.getElementById('tip-amount');

calculate=()=>{
    const tip=((amount.value*quality.value)/(guests.value)).toFixed(2);
    amount.value='';
    guests.value='';
    quality.value='';
    if (tip==='NaN') {
        tipamount.innerHTML='Tip $0 each';
        showTipAmount();
    }
    else{
        tipamount.innerHTML='Tip $'+tip+'each';
        showTipAmount();
    }
   
}
showTipAmount=()=>{
    var x=tipamount;
    x.className='show';
    setTimeout(function(){x.className=x.className.replace('show','');},3000);
}