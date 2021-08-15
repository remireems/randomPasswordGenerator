// Constant variables for password content
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '1234567890'
const specialCharacter = '!@#$%&()/?'

// Initial variable for length of password
let askLength = ''

// Function to get a value from the user's password length input
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

// Function to give the user's input a boolean value
const checkInput = input => {
  input.toLowerCase()
  if (input === 'y' || input === 'n') {
    return true
  } else {
    return false
  }
}

// Function to ask which criteria the user would like to include in their password and create a string of the included criteria 
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

  if (askLower === 'n' && askUpper === 'n' && askNum === 'n' && askSpChar === 'n') {
    alert('You must include at least 1 criteria!')
    generateChar()
  }

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

// Function to create a random password by taking in the user's password length and criteria
const generatePassword = (askLength, passwordChar) => {
  let password = ''
  for (let i = 0; i < askLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    console.log(password)
  }
  return password
}

// Added in the all the functions to call it and print out the password on the website
document.getElementById('generate').addEventListener('click', () => {
  let passwordLen = generateLen()

  let passwordBody = generateChar()

  let generatedPassword = generatePassword(passwordLen, passwordBody)

  document.getElementById('password').textContent = generatedPassword
})
