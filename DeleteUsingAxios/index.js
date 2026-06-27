// Write your code below:
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/1c726a722d754970b9e6c9e6ca41c9ea/appointmentData")
        .then((res) => {
            console.log(res);
            for (var i = 0; i < res.data.length; i++){
                showOnScreen(res.data[i])
            }
        }).catch((error) => {
            console.log(error);
})
    
})
function handleFormSubmit(event) {
    event.preventDefault();
    const usersDetails = {
         username: event.target.username.value,
         email: event.target.email.value,
         phone: event.target.phone.value
        
    }
axios.post("https://crudcrud.com/api/1c726a722d754970b9e6c9e6ca41c9ea/appointmentData", usersDetails).then((res) => {
    console.log(res);
    showOnScreen(res.data);
}).catch((error) => {
    console.log(error);
})
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
function showOnScreen(usersDetails){
    const userItem = document.createElement("li");
    userItem.appendChild(
        document.createTextNode(
            `${usersDetails.username} - ${usersDetails.email} - ${usersDetails.phone}`
        )
    );
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
    const updateBtn = document.createElement("button");
    updateBtn.appendChild(document.createTextNode("Update"));
    userItem.appendChild(updateBtn);
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
    deleteBtn.addEventListener('click', (event) => {
        axios.delete(`https://crudcrud.com/api/1c726a722d754970b9e6c9e6ca41c9ea/appointmentData/${usersDetails._id}`).then(() => {
            userList.removeChild(event.target.parentElement);
        }).catch((error) => {
            console.log(error);
        })
    });
    updateBtn.addEventListener('click', (event) => {
        userList.removeChild(event.target.parentElement);
        localStorage.removeItem(usersDetails.email);
        document.getElementById("username").value = usersDetails.username;
        document.getElementById("email").value = usersDetails.email;
        document.getElementById("phone").value = usersDetails.phone;
    });
    
}


