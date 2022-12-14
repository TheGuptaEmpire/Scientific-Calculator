const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        screen.value += btntext;
        if (btntext == 'x') {
            btntext = '*'
        }
        else if (btntext == '÷') {
            btntext = '/'
        }
        function sin() {
            screen.value = Math.sin(screen.value);
        }
        function cos() {
            screen.value = Math.cos(screen.value);
        }
        function tan() {
            screen.value = Math.tan(screen.value);
        }
        function pow() {
            screen.value = Math.pow(screen.value, 2);
        }
        function sqrt() {
            screen.value = Math.sqrt(screen.value, 2);
        }
        function pi() {
            screen.value = 3.14159265359
        }
        function e() {
            screen.value = 2.718281828459045;
        }
    })
}