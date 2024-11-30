
document.getElementById('btn_converti').addEventListener('click', function () {
    const dateInput = document.getElementById('date1').value;
    const numInput = parseInt(document.getElementById('num').value, 10);
    const unitInput = document.getElementById('valuta2').value;
    const resultElement = document.getElementById('risultato');

    if (!dateInput || isNaN(numInput)) {
      resultElement.textContent = "Inserisci una data valida e un valore numerico.";
      return;
    }

    const inputDate = new Date(dateInput);

    let finalDate = new Date(inputDate); 

    switch (unitInput) {
      case 'y': // Years
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
        resultElement.textContent = "Unità di misura non valida.";
        return;
    }

    resultElement.textContent = `La data finale è: ${finalDate.toISOString().replace('T', ' ').slice(0, 19)}`;
  });


document.getElementById('num').addEventListener('keypress', (e) => {
    if (e.key == "e" || e.key == "E") {
        e.preventDefault();
    }
});

document.getElementById('num').addEventListener('paste', (e) => {
    const pastedText = (e.clipboardData || window.Clipboard).getData("text");
    if (pastedText.includes("e") || pastedText.includes("E")) {
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

