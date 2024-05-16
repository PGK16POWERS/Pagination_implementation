let currentPage = 1;
const itemsPerPage = 6;
let users = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('main.json')
        .then(response => response.json())
        .then(data => {
            users = data;
            displayUsers();
        });

    const nextButton = document.querySelector("#next-btn");
    const backButton = document.querySelector("#prev-btn");
    const pageNo = document.querySelector("#page-no");

    backButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            pageNo.textContent = currentPage;
            displayUsers();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage * itemsPerPage < users.length) {
            currentPage++;
            pageNo.textContent = currentPage;
            displayUsers();
        }
    });
});

function displayUsers() {
    const userList = document.querySelector("#user-list");
    userList.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginatedUsers = users.slice(start, end);
    paginatedUsers.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.setAttribute("class","child-point-div");
        userDiv.textContent = `${user.username}: ${user.town}`;
        userList.appendChild(userDiv);
    });
}
