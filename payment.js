"use strict";

console.log("helo");
let btn = document.getElementById("btn");
btn.disabled = true;

let data = [
    {
        payment_type: "School Fees",
        phone_number: "0700000000",
        reference_number: "12345678",
        status: true
    },
    {
        payment_type: "School Fees",
        phone_number: "07000000000",
        reference_number: "12341234",
        status: true
    },
    {
        payment_type: "School Fees",
        phone_number: "07000000000",
        reference_number: "12345677",
        status: true
    },
    {
        payment_type: "School Fees",
        phone_number: "07000000000",
        reference_number: "00000000",
        status: true
    },
    {
        payment_type: "School Fees",
        phone_number: "07000000000",
        reference_number: "12312312",
        status: true
    },
]


function character_detect(){
    console.log("changing");
    let form_input = document.getElementById('reference-num');
    if (form_input.value.length == 8){
        console.log("You are getting there");

        // searching for the inputted datum in the data
        try {
            let found = false;
            data.forEach((datum)=>{
                if(form_input.value == datum.reference_number){
                    found = true;
                }
               
            })
            if (found){

                let paymentType = document.getElementById('table-payment-type');
                let referenceNumber = document.getElementById('table-reference-num');
                // let phoneNumber = document.getElementById('phone-data');

                paymentType.innerHTML = document.getElementById('payment').value
                // phoneNumber.innerHTML = document.getElementById('phone-num').value
                referenceNumber.innerHTML = form_input.value
                // this.setState = ({handleDisable:false});
                btn.disabled = false;
                throw "";
            }
            else{
                throw "Reference Number not Available";
            }
        } catch (error) {
            document.getElementById('error-message').innerHTML = error;
            setTimeout(()=>{
                document.getElementById('error-message').innerHTML = "";
            }, 60000)
        }
        

        
    }
}

function pay(){
    console.log("You have paid");
    const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
          };
          let payment_ref = generateRandomNumber(1222222222, 9222222222)
        document.getElementById("payment-ref-detail").innerHTML = `Payment Ref: "${payment_ref}"`
        let ref = document.getElementById("payment-ref-display")
        ref.innerHTML = `To complete payment from any bank:
        dial *bank_code*000*${payment_ref}#`
}