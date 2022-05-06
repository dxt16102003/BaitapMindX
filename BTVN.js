import React, {useState} from 'react';

export default function RegisterForm(){
    const [FirstName, setFirstName] = useState();
    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const [LastName, setLastName] = useState();
    const changeLastName = (event) => {
        setLastName(event.target.value);
    }

    const [Gender, setGender] = useState();
    const changeGender = (event) => {
        setGender(event.target.value);
    }

    const [Age, setAge] = useState();
    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const [Address, setAddress] = useState();
    const changeAddress = (event) => {
        setAddress(event.target.value);
    }

    const [Email, setEmail] = useState();
    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const [Password, setPassword] = useState();
    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const [confirmPassword, setConfirmPassword] = useState();
    const changeConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(!FirstName || !LastName || !Email || !Password || !confirmPassword){
                alert('All fields must be valid data')
        }
        else if(isNaN(Age)) {
            alert('All fields must be valid data')
        }
        else if(Age <= 0){
            alert('All fields must be valid data')
        }
        else if (Password.length < 6){
            alert('All fields must be valid data')
        }
        else if (Password != confirmPassword){
            alert('All fields must be valid data')
        }
        else {
            alert( 'Bạn đã đăng ký thành công với thông tin:                                               '
            + ' Họ và tên: ' + FirstName  + LastName
            + ' Giới Tính: ' + Gender
            + ' Age: ' + Age
            + ' Address: ' + Address
            + ' Email: ' + Email

            )
        }
        
    }
    
        return(
            <form onSubmit={handleLogin}>
                <div>
                    FirstName: <input type="text" placeholder="Enter FirstName" onChange={changeFirstName}/>
                    LastName: <input type="text" placeholder="Enter LastName" onChange={changeLastName}/>
                </div>
                <fieldset>
                    <legend>Enter Gender:</legend>
                    <div>
                        <input type = "radio" name="Gender" value="M" id="M" onChange={changeGender} />
                        <label for="M">M</label>
                        <input type = "radio" name="Gender" value="F" id="F" onChange={changeGender} />
                        <label for="F">F</label>
                    </div>
                </fieldset>
                <div>
                    Age: <input type="text" placeholder="Enter Age" onChange={changeAge}/>
                </div>
                <div>
                    Address: <input type="text" placeholder="Enter Address" onChange={changeAddress}/>
                </div>
                <div>
                    Email: <input text="text" placeholder="Your email" onChange={changeEmail}/>
                </div>
                <div>
                    Password: <input text="password" placeholder="Your password" onChange={changePassword} />
                    Confirm Password: <input text="password" placeholder="Your confirm password" onChange={changeConfirmPassword}/>
                </div>
                <button>Register</button>
            </form>
        );


}
