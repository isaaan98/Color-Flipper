const button = document.getElementById('button');
const namaWarna = document.getElementById('namaWarna');
const content = document.getElementById('content');

button.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    namaWarna.innerText = `RGB (${r},${g},${b})`;
});