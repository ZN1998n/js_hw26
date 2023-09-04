let totalSpeed = document.querySelector('.total_speed')
let totalPrice = document.querySelector('.total_price')
let editSpeed = document.querySelector('.edit_speed')
let btnSpeed = document.querySelectorAll('button')
let speedUp = document.querySelector('#speed_up')
let speedDown = document.querySelector('#speed_down')
let curr = 90000

speedUp.onclick = () => {
    totalPrice.innerHTML =  `${`$${curr += 5000}`}`
    totalSpeed.innerHTML =  `${`${parseInt(totalSpeed.innerHTML) + 100}км`}`
    editSpeed.innerHTML = `${`${parseInt(editSpeed.innerHTML) + 5 } км/ч`}`
}

speedDown.onclick = () => {
    totalPrice.innerHTML = `${`$${curr -= 5000}`}`
    totalSpeed.innerHTML = `${`${parseInt(totalSpeed.innerHTML) - 100}км`}`
    editSpeed.innerHTML = `${`${parseInt(editSpeed.innerHTML) - 5 } км/ч`}`
}


btnSpeed.forEach(btn => {

    btn.onclick = () => {
        let btnType = btn.getAttribute('data-speed')

        console.log("click");

        switch (btnType) {
            case "speed_up":
                totalPrice.innerHTML = curr += 5000
                totalSpeed.innerHTML = parseInt(totalSpeed.innerHTML) + 100

                break;

            case "speed_down":
                totalPrice.innerHTML = curr -= 5000
                totalSpeed.innerHTML = parseInt(totalSpeed.innerHTML) - 100
                break;


        }

    }
})



