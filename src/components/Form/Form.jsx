import React, {useState} from "react";
import validate from './validation'
import styled from 'styled-components'

const Errors = styled.p`
color: red;
font-weight: bold;
`


const Form = (props) => {
    
    const [inputs, setInputs] = useState({ 
        username: '',
        password: '' 
    });

    const [errors, setErrors] = useState({ 
        username: '',
        password: '' 
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    
        setErrors(
          validate({
            ...inputs, [name]: value
          })
        );
      };

      const handleSubmit = (event) => {
        event.preventDefault()
        props.login(inputs)
        if(Object.keys(errors).length){
          window.alert("Debes corregir los errores");
        }else{
          setInputs({
            username: '',
            password: '' 
          });
          setErrors({
            username: '',
            password: '' 
          });
        }
      }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">User Name: </label>
                <input type="text" placeholder="Escribe tu email..." name="username" value={inputs.username} onChange={handleInputChange} />
                {errors.username ? <Errors>{errors.username}</Errors> : null}

                <label htmlFor="">Password: </label>
                <input type="text" placeholder="Escribe tu password..." name="password" value={inputs.password} onChange={handleInputChange} />
                {errors.password ? <Errors>{errors.password}</Errors> : null}

                <button>LogIn</button>
            </form>
        </div>
    );
};

export default Form;