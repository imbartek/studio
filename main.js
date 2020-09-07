const boxs = document.querySelectorAll('.box__item')
const boxImgs = document.querySelectorAll('.box__img');
const boxLinks = document.querySelectorAll('.box__link')


boxs.forEach( box => {
    box.addEventListener('mouseover', () => {
        box.children[0].src = './img/cmyk.jpg'
        box.children[1].style.color = '#f76eb3'
    })
    box.addEventListener('mouseout', () => {
        box.children[0].src = './img/rgb.jpg'
        box.children[1].style.color = '#80807e'
    })
});