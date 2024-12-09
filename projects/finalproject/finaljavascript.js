document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    
    if (!age || age < 18) {
        alert("You must be 18 or older to sign up!");
        return;
    }

    const Data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
    };
    
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", "b.json", true); // Changed to POST
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() { 
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText); 
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").reset();
            } else {
                alert('Error submitting form: ' + xhr.statusText);
            }
        }
    };
    
    xhr.onerror = function() {
        console.error('Network error occurred.');
    };

    xhr.send(JSON.stringify(Data)); // Sends the data
    console.log(Data);
});
