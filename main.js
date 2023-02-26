
const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#uer');


const convert = (elem, target, target2) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json');
        request.send()
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.eur).toFixed(2)
            } else {
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (elem.value * data.eur).toFixed(2)
            }
        })

    })
}
convert(som, usd)
convert(usd, som,eur)