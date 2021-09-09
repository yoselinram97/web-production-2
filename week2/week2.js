const myTitle = 'A Joyful Dragon'
let myObject = {'adjectives': ['smile', 'delicious', 'flying'], 'verbs': ['shows', 'eats', 'believes'], 'nouns': ['happy', 'pie', 'dragon', 'full of promise', 'great']}
let myPrepositionArray = ['With', 'at', 'on', 'in']

function returnPoem(title, preposition, noun, verb, adjective) {
  return title + ': ' + preposition + ' ' + adjective + ' ' + verb + ' ' + noun
}

W(returnPoem(myTitle, myPrepositionArray[0], myObject.adjectives[0], myObject.verbs[0], myObject.nouns[0]))

function forLoopPoem(title, prepositions, nouns, verbs, adjectives) {
  W(title)
  for (i = 0; i < 3; i++) {
    W(prepositions[i] + ' ' + nouns[i] + ' ' + verbs[i] + ' ' + adjectives[i])
  }
}

forLoopPoem(myTitle, myPrepositionArray, myObject.nouns, myObject.verbs, myObject.adjectives)


// while loop poem:
let counter = 0
while(counter < 8) {
  W(getRandomItem(myPrepositionArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.verbs) + ' ' + getRandomItem(myObject.nouns))
  counter++
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
