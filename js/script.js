let cardText = document.querySelector('.text');


document.querySelector('.image-cont').addEventListener('mouseover', () =>{
    cardText.innerHTML = 'Мы разработали приложение для поддержки вашего здоровья и экономии на покупке продуктов'
    cardText.classList.add('hah');
})

document.querySelector('.image-cont').addEventListener('mouseout', ()=>{
    cardText.innerHTML='...';
    cardText.classList.remove('hah');
})

