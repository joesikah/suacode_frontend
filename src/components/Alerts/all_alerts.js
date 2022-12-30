import Swal from 'sweetalert2';

//Success Alert
const success_alert = (title, text, btnText) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: btnText,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
}

//Error Alert
const error_alert = (title, text, btnText) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: btnText,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
}

//Warning Alert
const warning_alert = (title, text, btnText) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        confirmButtonText: btnText,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
}

//Question Alert
const question_alert = (title, text, btnText) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'question',
        confirmButtonText: btnText,
        showCancelButton: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
}



//Loading Alert
const loading_alert = (title) => {
    return Swal.fire({
        title: title,
        didOpen: () => {
            Swal.showLoading()
        },
        allowEscapeKey: false,
        allowOutsideClick: false
    });
}



const ShowAlert = {
    success_alert,
    error_alert,
    warning_alert,
    question_alert,
    loading_alert
}

export default ShowAlert;