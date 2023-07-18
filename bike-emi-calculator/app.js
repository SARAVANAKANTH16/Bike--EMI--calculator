function pay(){
    let repayment=document.getElementById('repayment').value;
    let interest=document.getElementById('interest').value;
    let peroids=document.getElementById('peroids').value;

    let res=(repayment* interest*Math.pow((1+interest),peroids));
    let res1=Math.pow((1+interest),peroids)-1;
    let fr=res/res1;
    console.log(fr);
    document.getElementById('payment').innerHTML=Math.floor(fr);
    repayment.value='';
    interest.value='';
    peroids.value='';


}