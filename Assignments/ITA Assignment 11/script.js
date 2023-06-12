
let button = document.getElementById('fetch-btn');
let loader = document.getElementById('loader');
let textArea = document.getElementById('studentlist');

button.addEventListener('click', function(){
    loader.style.display = 'inline-block'
    fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt').then(function(response) {
        if(response.status !==200) {
         throw Error ('Unable to fetch data') 
        } return response.text();
     })
     .then(function(text) {
        const lines = text.split('\n');

        const parsedData = lines.reduce((acc, line, index) => {
            const trimmedLine = line.trim();
            if (index % 4 === 0) {
                acc.push({
                    name: trimmedLine,
                    address: lines[index + 1].trim(),
                    phone: lines[index + 2].trim(),
                    subject: lines[index + 3].trim()
                });
            }
            return acc;
        }, []);

        const displayText = parsedData.map(entry => {
            return `Name: ${entry.name}\nAddress: ${entry.address}\nPhone: ${entry.phone}\nSubject: ${entry.subject}\n\n`;
        }).join('');

        textArea.innerHTML = displayText;
     })
     .catch(function(err){
         textArea.innerHTML = 'Unable to fetch due to: ' + err.message
     })
     .finally(function(){
         loader.style.display = 'none'
     });
})

