const validate = (inputs) => {
    let errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.username) && inputs.username.length > 0 && inputs.username.length < 35) {
        errors.username = 'Debe ser un correo electrónico';
    }
    
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/.test(inputs.password)) {
        errors.password = 'Debe contener al menos una MAYUSCULA, \nuna minuscula, un Numero y uno de \nlos siguiente simbolos: @ $ ! % * ? & #';
    };

    return errors;
};

export default validate