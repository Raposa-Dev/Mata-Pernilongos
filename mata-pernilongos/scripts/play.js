function playGame() {
    let level = document.getElementById('level').value

    if (level === '') {
        alert('Selecione um Nivel!')
        return false
    }
    window.location.href = 'app.html?' + level
}