let input = document.getElementById("textInner");
input.addEventListener('keyup', (e) => {
    let str = e.target.value;
    let str2 = '';
    for( let x = str.length-1; x >= 0; x--) {
        str2 += str[x];
    };
    if (str === str2) {
        document.getElementById('result').innerText = 'True';
    } else {
        document.getElementById('result').innerText = 'False';
    }
});

