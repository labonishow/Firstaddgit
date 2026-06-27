// Write your code below:
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/1c726a722d754970b9e6c9e6ca41c9ea/appointmentData")
        .then((res) => {
            console.log(res);
             for (var i = 0; i < res.data.length; i++){
               displayUserOnScreen(res.data[i]);
                
            }
        })
        .catch((error) => {
            console.log(error);
})
})
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    }
    axios.post("https://crudcrud.com/api/1c726a722d754970b9e6c9e6ca41c9ea/appointmentData", userDetails).then((res) => {
       // console.log(res);
        displayUserOnScreen(res.data);
    }).catch((error) => {
        console.log(error);
    })
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
    function displayUserOnScreen(userDetails) {
        const userItem = document.createElement('li');
        userItem.appendChild(
            document.createTextNode(
                `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
            )
        )
    const deleteBtn = document.createElement("Button");
        deleteBtn.appendChild(document.createTextNode("Delete"));
        userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("Button");
      editBtn.appendChild(document.createTextNode("Edit"));
      userItem.appendChild(editBtn);

    const usersList = document.querySelector("ul");
        usersList.appendChild(userItem);
    deleteBtn.addEventListener('click', (event) => {
            usersList.removeChild(event.target.parentChild);
            localStorage.removeItem(userDetails.email);

        }
        );
        editBtn.addEventListener('click', (event) => {
            usersList.removeChild(event.target.parentElemnt);
            localStorage.removeItem(userDetails.email);
            document.getElemntById("username").value = userDetails.uasename;
            document.getElemntById("email").value = userDetails.email;
            document.getElemntById("phone").value = userDetails.phone;
        });    

    }



