// Ex 1 

const isFifty = (n1, n2) => {
    if (n1 === 50 || n2 === 50) {
        return true
    } else if (n1 + n2 === 50 ) {
        return true
    } else return false
}

console.log('Ex 1: ', isFifty(20, 30));


// Ex 2

const removeCharacter = (string, index) => {
    const newString = string.slice(0, index) + string.slice(index+1)

    return newString
} 

console.log('Ex 2: ', removeCharacter('epicode', 3));


// Ex 3

const betweenNumb = (n1, n2) => {
    if (n1 >= 40 && n1 <= 60 || n2 >= 40 && n2 <= 60) {
        return true
    } else if (n1 >= 70 && n1 <= 100 || n2 >= 70 && n2 <= 100) {
        return true
    } else return false
}

console.log('Ex 3: ', betweenNumb(25, 50));


// Ex 4

const startWith = (city) => {
    const startsCharacter =  city.split('').splice(0,3).join().replaceAll(',', '').toLowerCase();

    if (startsCharacter === 'los' || startsCharacter === 'new') {
        return true
    } else return false
}

console.log('Ex 4: ', startWith('new york'));


// Ex 5

const sumArrayItems = (array) => {
   let total = 0;
    array.map(item => {
        total += item;
    })
    return total
}

console.log('Ex 5: ', sumArrayItems([10,4,6]));


//Ex 6

const checkNumbers = (array) => {
    if (array.includes(3) || array.includes(1)) {
        return false
    } else return true 
}

console.log('Ex 6: ', checkNumbers([2, 4, 5, 6]));


// Ex 7

const checkAngle = (grade) => {
    if (grade < 90) {
        return 'acuto'
    }
    
    if (grade > 90 && grade < 180) {
        return 'ottuso'
    }
    
    if (grade === 90) {
        return 'retto'
    }
    
    if (grade === 180) {
        return 'piatto'
    }

    return 'inserisci un valore valido'
}

console.log('Ex 7: ', checkAngle(150));


// Ex 8

const getAcronym = (string) => {
    const splittedString = string.split(' ');
    let acronym = '';

    splittedString.map(word => {
        
        const firstChar = word.split('').shift()
        acronym += firstChar + '.'
    })
    
    return acronym
}

console.log('Ex 8: ', getAcronym('fabbrica italiana automobili torino'));