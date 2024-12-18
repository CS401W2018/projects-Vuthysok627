document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    
    if (!firstname || !lastname) {
        alert("First name and last name are required!");
        return;
    }
    if (!age || age < 18) {
        alert("You must be 18 to sign up!");
        return;
    }
    
    const Data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
    };
    
    const xhr = new XMLHttpRequest(); 
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() { 
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); 
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    
    xhr.send(JSON.stringify(Data));
    console.log(Data);
});
