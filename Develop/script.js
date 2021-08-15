const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '1234567890'
const specialCharacter = '!@#$%&()/?'

let askLength = ''

const generateLen = () => {
  let askLength = prompt('Choose a number between 8-128 for the length of your password.')

  if (askLength <= 7 || askLength >= 129 || isNaN(askLength)) {
    alert('Invalid choice, choose between 8-128!')
    generateLen()
  } else {
    alert(`Your password will have ${askLength} characters.`)
    return askLength
  }
}

const checkInput = input => {
  input.toLowerCase()
  if (input === 'y' || input === 'n') {
    return true
  } else {
    return false
  }
}

const generateChar = () => {
  do {
    askLower = prompt('Do you want to include lowercase in your password? Type in "y" or "n".')
  } while (!checkInput(askLower))

  do {
    askUpper = prompt('Do you want to include uppercase in your password? Type in "y" or "n".')
  } while (!checkInput(askUpper))

  do {
    askNum = prompt('Do you want to include numbers in your password? Type in "y" or "n".')
  } while (!checkInput(askNum))

  do {
    askSpChar = prompt('Do you want to include special characters in your password? Type in "y" or "n".')
  } while (!checkInput(askSpChar))

  let passwordChar = ''

  if (askLower === 'y') {
    passwordChar += lowercase
  }

  if (askUpper === 'y') {
    passwordChar += uppercase
  }

  if (askNum === 'y') {
    passwordChar += number
  }

  if (askSpChar === 'y') {
    passwordChar += specialCharacter
  }

  return passwordChar
}

const generatePassword = (askLength, passwordChar) => {
  let password = ''
  for (let i = 0; i < askLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    console.log(password)
  }
  return password
}

document.getElementById('generate').addEventListener('click', () => {
  let passwordLen = generateLen()

  let passwordBody = generateChar()

  let generatedPassword = generatePassword(passwordLen, passwordBody)

  document.getElementById('password').textContent = generatedPassword
})
