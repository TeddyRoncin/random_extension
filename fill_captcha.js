// Fills the captcha of https://www.cnil.fr/fr/webform/nous-contacter

const textThingy = document.querySelector(".form-item-captcha-response label").nextSibling
const match = textThingy.textContent.replaceAll("\n", "").match(/\s*(\d+)\s*\+\s*(\d+)\s*=\s*/)
textThingy.nextSibling.value = Number.parseInt(match[1]) + Number.parseInt(match[2])
