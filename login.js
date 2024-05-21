const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const contact = document.getElementById('contact').value;

    const user = { name, grade, contact };
    localStorage.setItem('user', JSON.stringify(user)); 
    window.location.href = './game.html'; 
});

