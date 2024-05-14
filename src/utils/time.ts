export const AMPMtime = ()=>{
    let hour = new Date().getHours();
    let message = ''
    
    if(hour <= 9){
        message = 'Morning'
    }else if(hour <= 12){
        message = 'Afternoon'
    }else if(hour <= 18){
        message = 'Afternoon'
    }else{
        message = 'Night'
    }
    return message;
}

