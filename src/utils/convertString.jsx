export function convertToDashedLowerCase(inputString) {
   const words = inputString.toLowerCase().split(' ')
   const dashedString = words.join('-')

   return dashedString
}
