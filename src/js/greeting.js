const loginForm = document.querySelector('#login-form');
const inputName = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const onLoginSubmit = (event)=>{
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = inputName.value;
    paintGreetings(username);
    localStorage.setItem("username",username);
}
const paintGreetings = (username)=>{
    greeting.innerText = `Hello ${ username}`;
    greeting.classList.remove('hidden');
}
const onGreeting = () => {
    const savedUsername = localStorage.getItem("username");
    if(savedUsername){
        loginForm.classList.add('hidden');
        paintGreetings(savedUsername);
    }else{
        loginForm.classList.remove('hidden');
        greeting.classList.add('hidden');
    }
}
loginForm.addEventListener('submit', onLoginSubmit);

(function(){
    onGreeting();
})();

