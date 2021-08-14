const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '1234567890'
const specialCharacter = '!@#$%&()/?'

let askLength = ''
let askLower
let askUpper
let askNum
let askSpChar

const generateLength = () => {
  let askLength = parseInt(prompt('Choose a number between 8-128 for the length of your password.'))

  if (askLength <= 7 || askLength >= 129) {
    alert('Invalid choice, choose between 8-128!')
    generateLength()
  } else {
    alert(`Your password will have ${askLength} characters.`)
  }
}
// while (askLength <= 7 || askLength >= 129) {
//   alert('Invalid choice, choose between 8-128!')
//   let askLength = parseInt(prompt('Choose a number between 8-128 for the length of your password.'))
// }
// alert(`Your password will have ${askLength} characters.`)

const generateChar = () => {
  let askLower = prompt('Do you want to include lowercase in your password? Type in "y" or "n".')
  let askUpper = prompt('Do you want to include uppercase in your password? Type in "y" or "n".')
  let askNum = prompt('Do you want to include numbers in your password? Type in "y" or "n".')
  let askSpChar = prompt('Do you want to include special characters in your password? Type in "y" or "n".')
  let passwordChar = ''

  if (askLower === 'n' && askUpper === 'n' && askNum === 'n' && askSpChar === 'n') {
    alert('Invalid choice, choose at least 1 criterea!')
    generateChar()
  }

  if (askLower === 'y') {
    passwordChar = passwordChar.concat(lowercase)
  }

  if (askUpper === 'y') {
    passwordChar = passwordChar.concat(uppercase)
  }

  if (askNum === 'y') {
    passwordChar = passwordChar.concat(number)
  }

  if (askSpChar === 'y') {
    passwordChar = passwordChar.concat(specialCharacter)
  }

  console.log(passwordChar)

  let password = ''

  for (let i = 0; i < askLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    console.log(password)
  }

}




document.getElementById('generate').addEventListener('click', () => {

  














  // let password = ''
  // let length = prompt('Choose a number between 8-128 for the length of your password.')
  // if (8 <= length <= 128) {
  //   let lengthPass = parseInt(length)
  //   console.log(lengthPass)
  // }

  // let lowerCase = prompt('Do you want to include lowercase in your password? Type in "y" or "n".')
  // if (lowerCase === 'y') {
  //   const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  //   let lower = lowercase[Math.floor(Math.random() * lowercase.length)]
  //   console.log(lower)
  // } else if (lowerCase === 'n') {
  //   let lower = ''
  //   console.log(lower)
  // } else {
  //   prompt('Invalid choice, type "y" or "n"!')
  // }

  // let upperCase = prompt('Do you want to include uppercase in your password? Type in "y" or "n".')
  // if (upperCase === 'y') {
  //   const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   let upper = uppercase[Math.floor(Math.random() * uppercase.length)]
  //   console.log(upper)
  // } else if (upperCase === 'n') {
  //   let upper = ''
  //   console.log(upper)
  // } else {
  //   alert('Invalid choice, type "y" or "n"!')
  // }

  // let num = prompt('Do you want to include numbers in your password? Type in "y" or "n".')
  // if (num === 'y') {
  //   const numbers = '1234567890'
  //   let number = numbers[Math.floor(Math.random() * numbers.length)]
  //   console.log(number)
  // } else if (num === 'n') {
  //   let number = ''
  //   console.log(number)
  // } else {
  //   alert('Invalid choice, type "y" or "n"!')
  // }

  // let specialChar = prompt('Do you want to include special characters in your password? Type in "y" or "n".')
  // if (specialChar === 'y') {
  //   const specialCharacters = '!@#$%&?'
  //   let specialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  //   console.log(specialCharacter)
  // } else if (specialChar === 'n') {
  //   let specialCharacter = ''
  //   console.log(specialCharacter)
  // } else {
  //   alert('Invalid choice, type "y" or "n"!')
  // }




})
