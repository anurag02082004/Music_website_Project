val = document.getElementById('input');
document.getElementById('input').addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(val.value);
});



