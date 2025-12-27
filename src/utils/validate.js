export const checkValidateData = (email,password,name) =>{
const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
const isNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);


if(!isEmailValid){
    return {valid:false,message:"Invalid email format."};
}
if(!isPasswordValid){
    return {valid:false,message:"Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."};
    
}
if(name !== undefined && !isNameValid){
    return {valid:false,message:"Name can only contain letters, spaces, apostrophes, and hyphens."};
}
return null;

}