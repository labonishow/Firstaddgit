let usersList = JSON.parse(localStorage.getItem("usersList")) || [];

function handleFormSubmit(event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    const usersDetails = {id : Date.now(),amount,description,category}
    usersList.push(usersDetails);
    localStorage.setItem("usersList",JSON.stringify(usersList));

    const li = document.createElement('li');
   
    li.innerHTML = `
    
    Amount:${amount},Description:${description},Category:${category}
    
    
    <button class="delete-btn">Delete Expense</button>
    <button class="edit-btn">Edit Expense</button>
    
    `;
li.querySelector(".delete-btn").addEventListener('click',function(){
    usersList = usersList.filter(item=>item.id !== usersDetails.id);
    localStorage.setItem("usersList",JSON.stringify(usersList));
    li.remove();
});

li.querySelector(".edit-btn").addEventListener('click',function(){
    document.getElementById('amount').value = usersDetails.amount;
    document.getElementById('description').value = usersDetails.description;
    document.getElementById('category').value = usersDetails.category;
    usersList = usersList.filter(item=>item.id !== usersDetails.id);
    localStorage.setItem("usersList",JSON.stringify(usersList));
    li.remove();
});

document.querySelector("ul").appendChild(li);
event.target.reset();

    
}

