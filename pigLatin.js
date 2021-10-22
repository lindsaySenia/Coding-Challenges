// Write your solution below:

const pigLatin = sentence => {
    let wordsArr = sentence.split(' ');
    let pigLatinArr = []
    wordsArr.forEach(function(word){
        let x = word[0]    
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' ){
                pigLatinArr.push(word += 'yay')
            } else {
                pigLatinArr.push(word.substr(1) + x + 'ay')
            } 
    
        }
    )
    let newSentence = pigLatinArr.join(' ')
    return newSentence
}

console.log(pigLatin('porcupines are cute'))
console.log(pigLatin('give me an apple'))