document.getElementById('filterBtn').addEventListener('click', function () {
    document.getElementById('filtersOffcanvas').classList.toggle('active');
});

document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('filtersOffcanvas').classList.remove('active');
});
