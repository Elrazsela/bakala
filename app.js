function addTax(price){
    if(!price || price<=0 || typeof(price) === 'string'){
        throw Error('Nothing is for free! please suppy a price');
    }
   else{
       const vat = 1.17;
    const total = (price*vat).toFixed(2);
    return total;
   }
}

function generateId(){
    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
}
