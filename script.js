// Display Sign up and Sign in page
// Disable scrolling completely
document.body.style.overflow = "hidden";


function AdJustLayout() {

    document.getElementById('Main-d').classList.add('d-none');
    if (window.innerWidth <= 768) {
        document.getElementById('demo').classList.remove('d-none');

        document.getElementById('Main-d').classList.add('d-none');

        document.getElementById('width100').classList.remove('w-50');


        document.getElementById('Signwidth100').classList.remove('w-50');


    } else if (window.innerWidth > 768) {
        document.getElementById('Main-d').classList.remove('d-none');

        document.getElementById('demo').classList.add('d-none');
    }


}

AdJustLayout();

window.addEventListener('resize', AdJustLayout);


function SignUpIn(click) {


    if (click == 'btnup') {
        document.getElementById('SignUp').classList.remove('d-none');

        document.getElementById('demo').classList.add('d-none');

        document.getElementById('Main-d').classList.add('d-none');




    } else if (click == 'btnin') {
        document.getElementById('SignIn').classList.remove('d-none');
        document.getElementById('demo').classList.add('d-none');

        document.getElementById('Main-d').classList.add('d-none');




    }
}

function SignUpIn2(click2) {
    if (click2 == 'SIGNIN') {
        document.getElementById('SignIn').classList.remove('d-none');

        document.getElementById('SignUp').classList.add('d-none');

        document.getElementById('demo').classList.add('d-none');

        document.getElementById('Main-d').classList.add('d-none');

    } else if (click2 == 'SIGNUP') {
        document.getElementById('SignUp').classList.remove('d-none');

        document.getElementById('SignIn').classList.add('d-none');

        document.getElementById('demo').classList.add('d-none');

        document.getElementById('Main-d').classList.add('d-none');
    }
}


// Sign Up -Register

function Register() {
    const UserName = document.getElementById('userName').value;
    const UserEmail = document.getElementById('Email').value;
    const UserPassword = document.getElementById('Password').value;

    if (!UserName) {
        alert('Please inter user name.');
        return;
    }
    if (!UserEmail) {
        alert('Please inter Email.');
        return;
    }
    if (!UserPassword) {
        alert('Please inter Password.');
        return;
    }

    const infoStore = { UserName, UserEmail, UserPassword };

    console.log(infoStore);

    // const me =localStorage.setItem( UserEmail, JSON.stringify(infoStore))

    localStorage.setItem(UserEmail, JSON.stringify(infoStore));



    alert('Registration Successfully! You can now login.')

    document.getElementById('userName').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Password').value = '';

    SignUpIn2('SIGNIN');

}

// Sign in - log in

function LogIn() {
    const InputGmail = document.getElementById('Gmail').value;
    const InputPassword = document.getElementById('Password2').value;

    if (!InputGmail) {
        alert('Please Inter your gmail.');
        return;
    }

    if (!InputPassword) {
        alert('Please inter your password.');
        return;
    }

    const LoginUser = localStorage.getItem(InputGmail);

    if (!LoginUser) {
        alert('User not exist!')
    }

    const BackInfo = JSON.parse(LoginUser);
    

    if (InputPassword != BackInfo.UserPassword) {
        alert('Incorrect Password.')
        return;
    }

    alert('Login Successfully. Welcome' + BackInfo.UserName);

    document.getElementById('Gmail').value = '';
    document.getElementById('Password2').value = '';
}





