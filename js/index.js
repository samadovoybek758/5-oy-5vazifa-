const big = document.getElementById('big');

big.style.backgroundColor = '#2E2E2E'

const reg = document.getElementById('registration');

reg.style.display = 'flex';
reg.style.flexDirection = 'column';
reg.style.padding = '106px 296px ';
reg.style.maxWidth = '900px';
reg.style.backgroundColor = '#242424';
reg.style.marginLeft = '527px';


const h1 =document.querySelector('h1');

h1.style.fontSize = '32px';
h1.style.color = 'white';
h1.style.fontFamily = 'poppins';
h1.style.lineHeight = '48px';
h1.style.margin = '0 0 10px 0';

const p = document.getElementById('main_p');

main_p.style.color = '#7F7F7F';
main_p.style.fontSize = '18px';
main_p.style.maxWidth = '625px';
main_p.style.fontFamily = 'poppins';
main_p.style.lineHeight = '27px';
main_p.style.marginBottom = '60px';


// forms

const form = document.getElementById('form');

form.style.display = 'flex';
form.style.gap = '30px';
form.style.maxWidth = '800px';
form.style.flexDirection = 'column';
form.style.display = 'flex';


const name = document.getElementById('name');

name.style.padding = '12px 0 12px 20px';
name.style.border = '1px solid #3D3D3D';
name.style.borderRadius = '4px';
name.style.backgroundColor = '#242424';



const surname = document.getElementById('surname');

surname.style.padding = '12px 0 12px 20px';
surname.style.border = '1px solid #3D3D3D';
surname.style.borderRadius = '4px';
surname.style.backgroundColor = '#242424';




const mobile_num = document.getElementById('mobile_number');

mobile_num.style.padding = '12px 0 12px 20px';
mobile_num.style.border = '1px solid #3D3D3D';
mobile_num.style.backgroundColor = '#242424';
mobile_num.style.borderRadius = '4px';



const email = document.getElementById('email');

email.style.padding = '12px 0 12px 20px';
email.style.border = '1px solid #3D3D3D';
email.style.borderRadius = '4px';
email.style.backgroundColor = '#242424';







const password = document.getElementById('password');

password.style.padding = '12px 0 12px 20px';
password.style.border = '1px solid #3D3D3D';
password.style.borderRadius = '4px';
password.style.backgroundColor = '#242424';




const con_password = document.getElementById('con_password');

con_password.style.padding = '12px 0 12px 20px';
con_password.style.border = '1px solid #3D3D3D';
con_password.style.borderRadius = '4px';
con_password.style.backgroundColor = '#242424';




const main_radio = document.getElementById('main_radio');

main_radio.style.display = "flex";
main_radio.style.gap = "16px";


const radio_p = document.getElementById('radio_p');

radio_p.style.fontSize = '16px';
radio_p.style.fontFamily = 'poppins';
radio_p.style.color = '#7F7F7F';


const btn = document.getElementById('button');

btn.style.padding = '12px 64px';
btn.style.backgroundColor = '#4B72C2';
btn.style.borderRadius = '4px';
btn.style.color = 'white';
btn.style.fontSize = '16px';
btn.style.fontWeight = '400';
btn.style.fontFamily = 'poppins';
btn.style.border = 'none';
btn.style.maxWidth = '200px';


const teg_ch = document.getElementById('tag_chiziq');

teg_ch.style.maxWidth = '800px';
teg_ch.style.height = '2px';
teg_ch.style.backgroundColor = '#3D3D3D';
teg_ch.style.marginTop = '50px';
teg_ch.style.marginBottom = '30px';




const footer = document.getElementById('footer');

footer.style.display = 'flex';
footer.style.gap = '6px';
footer.style.alignItems = 'center';


const footer_p = document.getElementById('footer_p');

footer_p.style.fontSize = '16px';
footer_p.style.color = '#7F7F7F';
footer_p.style.fontFamily = 'Poppins';


const footer_span = document.getElementById('footer_span');

footer_span.style.fontSize = '16px';
footer_span.style.color = '#4B72C2';
footer_span.style.fontFamily = 'Poppins';
footer_span.style.textDecoration = 'none';





const wrapper =document.getElementById('wrapper')

function valitade() {

    if (name.value.length < 3) {
        alert('ismda hatolik');
        name.focus();
        name.style.outlineColor = 'red';
        return false
    }
    if (surname.value.length < 3) {
        alert('familyangizda xatolik bor');
        surname.focus();
        surname.style.outlineColor = 'red';
        return false
    }
    if (mobile_num.value.length < 14 && typeof mobile_num.value ==  Number) {
        alert('telfon raqamingizni tuliq kiritng');
        mobile_num.focus();
        mobile_num.style.outlineColor = 'red';
        return false
    }
    if (email.value.length < 13) {
        alert('emailda xatolik');
        email.focus();
        email.style.outlineColor = 'red';
        return false
    }
    if  (password.value.length < 8) {
    alert('parolga 8 ta belgi kiritng');
     password.focus();
     password.style.outlineColor = 'red';
        return false
    }
    if (con_password.value != password.value) {
        alert('parolda xatolik');
        con_password.focus();
        con_password.style.outlineColor = 'red';
        return false
    }
    return true
}



function createCard(user) {
    let card = document.createElement('div');
    card.setAttribute('class','card')

    const nameElement = document.createElement('h2');
    nameElement.innerHTML = user.name;
    card.appendChild(nameElement);

    const surnameElement = document.createElement('h2');
    surnameElement.innerHTML = user.surname;
    card.appendChild(surnameElement);

    const mobileElement = document.createElement('h2');
    mobileElement.innerHTML = user.mobile_num;
    card.appendChild(mobileElement);

    const emailElement = document.createElement('h2');
    emailElement.innerHTML = user.email;
    card.appendChild(emailElement);


    return card
}



btn && btn.addEventListener('click',function (el) {
    el.preventDefault()
    let isValidet = valitade()

    if (!isValidet) {
        return
    }

    const user = {
        name : name.value,
        surname : surname.value,
        mobile_num : mobile_num.value,
        email : email.value,
        password : password.value,
    }

    let card = createCard(user);
    wrapper.appendChild(card)
})