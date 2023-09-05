let totalSpeed = document.querySelector('.total_speed')
let totalPrice = document.querySelector('.total_price')
let editSpeed = document.querySelector('.edit_speed')
let speedUp = document.querySelector('#speed_up')
let speedDown = document.querySelector('#speed_down')
let diskUp = document.querySelector('#disk_up')
let diskDown = document.querySelector('#disk_down')
let disk = document.querySelector('.disk')
let nineteen = document.querySelector('.nineteen')
let twentyOne = document.querySelector('.twenty_one')
let editTemperature = document.querySelector('.edit_temperature')
let temperatureUp = document.querySelector('#temperature_up')
let temperatureDown = document.querySelector('#temperature_down')
let curr = 89990
curr.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })




function formatCurrency(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '')
}




temperatureUp.onclick = () => {
    if (parseInt(editTemperature.innerHTML) < 40) {
        editTemperature.innerHTML = `${parseInt(editTemperature.innerHTML) + 10}°`;
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) + 7}км`
        if (parseInt(editTemperature.innerHTML) > 10) {
            conditioner.checked = false;
        }
    }


}

temperatureDown.onclick = () => {
    if (parseInt(editTemperature.innerHTML) > -10) {
        editTemperature.innerHTML = `${parseInt(editTemperature.innerHTML) - 10}°`
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) - 7}км`
        if (parseInt(editTemperature.innerHTML) <= 10) {
            conditioner.checked = true;
        }
    }


}





diskUp.onclick = () => {
    if (disk.innerHTML !== '21') {
        disk.innerHTML = '21'
        nineteen.style.display = 'none'
        twentyOne.style.display = 'block'
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) - 5}км`
        totalPrice.innerHTML = formatCurrency(curr += 750)
    }
}

diskDown.onclick = () => {
    if (disk.innerHTML !== '19') {
        disk.innerHTML = '19'
        nineteen.style.display = 'block'
        twentyOne.style.display = 'none'
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) + 5}км`
        totalPrice.innerHTML = formatCurrency(curr -= 750)
    }

}


speedUp.onclick = () => {
    if (parseInt(totalSpeed.innerHTML) > 550) {
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) - 100}км`
        editSpeed.innerHTML = `${parseInt(editSpeed.innerHTML) + 5} км/ч`
    }
}

speedDown.onclick = () => {
    if (parseInt(totalSpeed.innerHTML) < 850) {
        totalSpeed.innerHTML = `${parseInt(totalSpeed.innerHTML) + 100}км`
        editSpeed.innerHTML = `${parseInt(editSpeed.innerHTML) - 5} км/ч`
    }
}



let conditioner = document.querySelector('.checkbox')
let version = document.querySelector('.checkbox1')

version.addEventListener('change', function () {
    if (version.checked) {
        totalPrice.innerHTML = formatCurrency(curr += 1250)
    } else {
        totalPrice.innerHTML = formatCurrency(curr -= 1250)
    }
});

conditioner.addEventListener('change', function () {
    if (conditioner.checked) {
        totalPrice.innerHTML = formatCurrency(curr += 500)
    } else {
        totalPrice.innerHTML = formatCurrency(curr -= 500)
    }
}
);







