const btn = document.querySelector('button');
// const input = document.querySelector('input');
const div = document.querySelector('.search');


btn.addEventListener('click',() =>
{
    div.classList.toggle('active');
})
