import Swal from "sweetalert2";


const success_toast = (text) => {
    return Swal.fire({
        title: 'Success',
        icon: 'success',
        text: text,
        position: 'top-right',
        toast: true,
        showConfirmButton: false,
        timer: 3000
    })
}


const error_toast = (text) => {
    return Swal.fire({
        title: 'Error',
        icon: 'error',
        text: text,
        position: 'top-right',
        toast: true,
        showConfirmButton: false,
        timer: 3000
    })
}


const warning_toast = (text) => {
    return Swal.fire({
        title: 'Warning',
        icon: 'warning',
        text: text,
        position: 'top-right',
        toast: true,
        showConfirmButton: false,
        timer: 3000
    })
}



const info_toast = (text) => {
    return Swal.fire({
        title: 'Hello',
        icon: 'info',
        text: text,
        position: 'top-right',
        toast: true,
        showConfirmButton: false,
        timer: 3000
    })
}




const ShowToast = {
    success_toast,
    error_toast,
    warning_toast,
    info_toast
}

export default ShowToast;
