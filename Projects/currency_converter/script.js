document.getElementById('btn_converti').addEventListener("click", conversion);

async function conversion() {
    const valuta1 = document.getElementById("valuta1").value;
    const valuta2 = document.getElementById("valuta2").value;
    const num = document.getElementById("num").value;

    if (!num) {
        document.getElementById("risultato").innerText = "Please enter a valid amount";
        return;
    }

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${valuta1}`);
        const data = await response.json();

        if (data.result === "success") {
            const exchange_rate = data.rates[valuta2];
            const final_value = num * exchange_rate;
            const last_update = data.time_last_update_utc;
            const api_provider = data.provider;
            document.getElementById("risultato").innerText = `${final_value.toFixed(2)} ${valuta2}`;

            document.getElementById('informazioni').innerText = `Last update: ${last_update} UTC\n Provider: ${api_provider}`;

        } 
        else {
            document.getElementById("risultato").innerText = "Conversion error. Please try again later.";
        }
    } 
    catch (error) {
        document.getElementById("risultato").innerText = "Error retrieving data. Check your connection or try again later.";
    }
}

document.getElementById('num').addEventListener('keydown', (e) => {
    const allowedKeys = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Enter',
        'Tab',
        'Delete',
    ];

    if (!(!isNaN(e.key) || e.key === '.' || e.key === ',' || allowedKeys.includes(e.key))) {
        e.preventDefault();
    }
});


document.getElementById('num').addEventListener('paste', (e) => {
    const pastedText = (e.clipboardData || window.Clipboard).getData("text");
    if (isNaN(pastedText) && pastedText !== '.' && pastedText !== ',') {
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
