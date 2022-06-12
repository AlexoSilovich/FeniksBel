
const TOKEN = '5565936982:AAFXlsAEKIWeAWlwsXqpqzC_fGwMzWJSRzM'
const CHAT_ID = '-1001777463101'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const form = document.querySelectorAll('#tg')

form.forEach(item => {item.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Имя отправителя: </b> ${item.name.value}\n`
  message += `<b>Телефон: </b> ${item.tel.value}\n`

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then(res => {
    item.name.value = ''
    item.tel.value = ''
  })
  .catch(err => {
    console.warn(err)
  })
  // .finally(() => {
  //   console.log('the end')
  // })

})})



