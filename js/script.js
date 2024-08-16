const copyBox = document.querySelector('.copy')
const originalBtn = document.querySelectorAll('.original-btn')

originalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let elemNum = item.querySelector('span').innerHTML

        let copyElement = document.createElement('div')
        copyElement.classList.add('copy-elem')
        copyElement.innerHTML = `Клонируемый элемент <span>${elemNum}</span>`
        copyBox.appendChild(copyElement)
        item.disabled = true

        copyElement.addEventListener('click', ()=> {
            copyElement.remove()
            item.disabled = false
        })
    })
})