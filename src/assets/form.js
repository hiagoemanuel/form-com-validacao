const FORM = document.getElementById('form')
const formDATA = document.querySelectorAll('.validation')

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    validationForm()
})

function validationForm() {
    formDATA.forEach((data) => {
        if (data.value.trim() === '') {
            validationRefused(data)
        } else if (data.value !== '') {
            validationAccepted(data)
        }
    })
}

function validationRefused(element) {
    element.parentElement.classList.remove('accepted')
    element.parentElement.classList.add('refused')
}

function validationAccepted(element) {
    element.parentElement.classList.remove('refused')
    element.parentElement.classList.add('accepted')
}