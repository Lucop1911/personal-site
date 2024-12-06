function setDefaultDate() {
    const dateInput = document.getElementById('date1');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    dateInput.value = formattedDate;
}

document.addEventListener('DOMContentLoaded', setDefaultDate);

document.getElementById('btn_converti').addEventListener('click', function () {
    const dateInput = document.getElementById('date1').value;
    const numInput = parseInt(document.getElementById('num').value, 10);
    const unitInput = document.getElementById('valuta2').value;
    const resultElement = document.getElementById('risultato');

    if (!dateInput) {
        resultElement.textContent = "Please enter a valid date.";
        return;
    }

    const datePattern = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
    if (!datePattern.test(dateInput)) {
        resultElement.textContent = "The date format is incorrect. Use dd/mm/yyyy hh:mm:ss.";
        return;
    }

    if (isNaN(numInput) || numInput === 0) {
        resultElement.textContent = "Please enter a valid numeric amount.";
        return;
    }

    if (!unitInput) {
        resultElement.textContent = "Please select a unit (Years, Months, Days, Hours, Minutes, Seconds).";
        return;
    }

    const [day, month, yearAndTime] = dateInput.split('/');
    const [year, time] = yearAndTime.split(' ');
    const [hours, minutes, seconds] = time.split(':');
    const inputDate = new Date(year, month - 1, day, hours, minutes, seconds);
    let finalDate = new Date(inputDate);

    switch (unitInput) {
      case 'y':
        finalDate.setFullYear(finalDate.getFullYear() + numInput);
        break;
      case 'm':
        finalDate.setMonth(finalDate.getMonth() + numInput);
        break;
      case 'g':
        finalDate.setDate(finalDate.getDate() + numInput);
        break;
      case 'h':
        finalDate.setHours(finalDate.getHours() + numInput);
        break;
      case 'i':
        finalDate.setMinutes(finalDate.getMinutes() + numInput);
        break;
      case 's':
        finalDate.setSeconds(finalDate.getSeconds() + numInput);
        break;
      default:
        resultElement.textContent = "Invalid time unit.";
        return;
    }

    const resultDay = String(finalDate.getDate()).padStart(2, '0');
    const resultMonth = String(finalDate.getMonth() + 1).padStart(2, '0');
    const resultYear = finalDate.getFullYear();
    const resultHours = String(finalDate.getHours()).padStart(2, '0');
    const resultMinutes = String(finalDate.getMinutes()).padStart(2, '0');
    const resultSeconds = String(finalDate.getSeconds()).padStart(2, '0');
    resultElement.textContent = `The final date is: ${resultDay}/${resultMonth}/${resultYear} ${resultHours}:${resultMinutes}:${resultSeconds}`;
});

document.getElementById('num').addEventListener('keydown', (e) => {
    if (isNaN(e.key) && e.key !== '.' && e.key !== ',' && e.key !== '-') {
        e.preventDefault();
    }
});

document.getElementById('num').addEventListener('paste', (e) => {
    const pastedText = (e.clipboardData || window.Clipboard).getData("text");
    if (isNaN(pastedText) && pastedText !== '.' && pastedText !== ',' && pastedText !== '-') {
        e.preventDefault();
    }
});

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closeHamburger = document.querySelector('.close-hamburger');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.getElementById('hamburger').disabled = true;
    document.getElementById('hamburger').style.cursor = 'default';
});

closeHamburger.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.getElementById('hamburger').disabled = false;
    document.getElementById('hamburger').style.cursor = 'pointer';
});
