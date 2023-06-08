//Business logic

// function pigLatin(vowel, text) {
//     const passage = text;
//     let passageLength = passage.length;

//     // const vowelArray = ['a' ,'e' ,'i' ,'o' ,'u']
//     for (let i = 0; i <= passageLength; i++ )
//     if passag

// }
function startsWithVowel(text){
    let word = text;
    if (word.startsWith('a') || word.startsWith('e') ||word.startsWith('i') ||word.startsWith('o') ||word.startsWith('u')){
        return true;
    }
    return false;
}



function pigLatin(text){
   newWord = []
    let passage = text.split(" ");
passage.foreach(function(word){
    if (startsWithVowel(word)){
        newWord.push(word + "way");
    }
    else if(!startsWithVowel(passage)){
        newWord.push(word + "const");
    }
    
    // return word;
})
return newWord;
}




//UI logic

