const conteDegradado = document.querySelector('.conte-degradado');
const sizeDegradado = 500;

conteDegradado.style.background = `radial-gradient(circle at 40px 40px, transparent 0%, black ${sizeDegradado}px)`

conteDegradado.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    //conteDegradado.style.cursor = "none"
    //console.log(x, y)
    conteDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, black ${sizeDegradado}px)`
})

//nieve//

const body = document.querySelector('body')
    const crearnieve = () => {
        let copo = document.createElement9('i')

        body.appendChild(copo)

    }

    setInterval(crearnieve, 100)
    