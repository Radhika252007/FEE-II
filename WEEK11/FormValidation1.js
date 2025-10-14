const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNum = document.getElementById('phoneNum');
const ValidateForm = (event)=>{
    event.preventDefault();
    if(firstName.value.trim()===''){
        alert('Please enter the First Name');
        return
    }
    if(lastName.value.trim()===''){
        alert('Please enter the Last Name');
        return
    }
    if(phoneNum.value.trim()===''){
        alert('Please enter the phone number');
        return
    }
    ValidateForm2();
}
const ValidateForm2 = ()=>{
    const firsthasDigit = /\d/.test(firstName.value.trim());
    const lasthasDigit = /\d/.test(lastName.value.trim());
    if(firsthasDigit){
        alert('First Name cannot contain a digit');
    }
    else if(lasthasDigit){
        alert('Last name cannot contain digits');
    }
    else if(!/^\d{10}$/.test(phoneNum.value.trim())){
        alert('Please enter 10-digits phone number');
    }
    else{
        alert('Form Submitted Successfully');
    }

}