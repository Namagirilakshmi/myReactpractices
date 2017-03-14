
export function sendMail(payload){
    return {type:"NEW_MAIL",payload};
}
export function receiveMail(payload){    
    return {type:"RECEIVING_MAIL",payload};
}