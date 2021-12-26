function saveColor(color) {
    if (localStorage.getItem('colors')==null) {
        Colors_pre = ''
    } else {
        Colors_pre = localStorage.getItem('colors')
    }
    localStorage.setItem('colors', Colors_pre+'<div class="color" style="background-color: '+color+';" onclick="window.open(\'https://color.jacobdrath.co/color'+color+'\')">'+color+'</div>')
}