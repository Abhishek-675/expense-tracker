function login(e) {
    e.preventDefault();
 
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    const obj = {
        email: email.value,
        pass: pass.value
    }

    axios.post('http://localhost:3000/login', obj)
        .then(response => {
            console.log(response);
            // alert('Successfuly logged in');
        })
        .catch(response => {
            console.log(response);
            // alert('User already exists, Please Login');
        });
}