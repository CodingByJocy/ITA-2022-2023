function volumeCyl() {

    var semicircle = document.getElementById ('semicircle').value;
    semicircle = Math.abs(semicircle);

    var height = document.getElementById('height').value;
    height = Math.abs(height);

    var volume = document.getElementById("volume");

    volume.value = (Math.PI*semicircle*semicircle*height).toFixed(3)
    
    return volume;
}

document.getElementById('volume').onsubmit = volumeCyl;
