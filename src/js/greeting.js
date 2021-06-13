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
    const date=new Date();
    const hour = date.getHours();
    let day;
    if(4<=hour && hour<12){
        day = 'Good Morning !'
    }else if(12<=hour && hour <18){
        day = 'Good Afternoon !'
    }else{
        day = 'Good Evening !' 
    }
    greeting.innerText = `${day} ${ username}`;
    greeting.classList.remove('hidden');
}
const onGreeting = () => {
    const savedUsername = localStorage.getItem("username");
    if(savedUsername){
        paintGreetings(savedUsername);
        loginForm.classList.add('hidden');
    }else{ 
        greeting.classList.add('hidden');
    }
}
loginForm.addEventListener('submit', onLoginSubmit);

(()=>{
    onGreeting();
})();