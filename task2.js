function check() {
    let person = document.getElementById('name')
    let surname = document.getElementById('surname')
    let town = document.getElementById('town')
    let email = document.getElementById('e-mail')
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeatPassword')
    document.getElementById('errorMessage').innerHTML = ''

    if (person.value == '') {
        document.getElementById('errorMessage').innerHTML += 'Не заполнено имя<br>'
    }

    if(surname.value == '') {
        document.getElementById('errorMessage').innerHTML +='Не заполнена фамилия<br>'
    } 

    if(town.value == '') {
        document.getElementById('errorMessage').innerHTML +='Не заполнен город<br>'
    }

    if(email.value == '') {
        document.getElementById('errorMessage').innerHTML +='Не заполнен e-mail<br>'
    }

    if(password.value == '') {
        document.getElementById('errorMessage').innerHTML +='Не заполнен пароль<br>'
    } 

    if(password.value.length <= 5) {
        document.getElementById('errorMessage').innerHTML +='Пароль слишком короткий<br>'
    } 

    if(repeatPassword.value == '') {
        document.getElementById('errorMessage').innerHTML +='Не заполнена проверка пароля<br>'
    } 

    if(repeatPassword.value !== password.value) {
        document.getElementById('errorMessage').innerHTML +='Проверка пароля не прошла<br>'
    } 

    if (person.value !== '' && surname.value !== '' && town.value !== '' && email.value !== '' && password.value !== '' && repeatPassword.value === password.value){
        alert(`Привет, ${person.value}`)
    }
}