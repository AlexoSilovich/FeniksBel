
const TOKEN = '5565936982:AAFXlsAEKIWeAWlwsXqpqzC_fGwMzWJSRzM'
const CHAT_ID = '-1001777463101'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const success = document.querySelector('.main_order')
const checkbox = document.querySelectorAll('.order_chekbox')

const form = document.querySelectorAll('#tg')

form.forEach(item => {item.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Имя отправителя: </b> ${item.name.value}\n`
  message += `<b>Телефон: </b> ${item.tel.value}\n`

  checkbox.forEach(i => {
    if (i.checked) {
      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
      .then(res => {
        item.name.value = ''
        item.tel.value = ''
        success.innerHTML = 'Ваш заказ успешно отправлен'
        success.style.fontSize = '140%'
        success.style.padding = '42px 10px'
        success.style.transform = 'translateY(0)'
        success.style.opacity = '1'
      })
      .catch(err => {
        success.innerHTML = `${err}`
        success.style.fontSize = '140%'
        success.style.padding = '42px 10px'
        success.style.transform = 'translateY(0)'
        success.style.opacity = '1'
        setTimeout(() => {
          success.style.opacity = '0'
          success.style.transform = 'translateY(-100%)'
        },2000)
      })
      .finally(() => {
        setTimeout(() => {
          success.style.opacity = '0'
          success.style.transform = 'translateY(-100%)'
        },2000)
      })
    }
    
  })

})})



