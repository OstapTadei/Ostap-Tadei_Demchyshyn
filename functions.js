// FILTER LIST BY NUMBER-------------------------------------------------

var filter_list = function (array) {
  return array.filter((element) => typeof element === 'number')
}

// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1, 'a', 'b', 0, 15]))
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

// FIRST NON-REPEATING LETTER--------------------------------------------

var first_non_repeating_letter = function (str) {
  let letterCollection = {}

  str.match(/\S/g).forEach(function (element) {
    letterCollection[element] = (letterCollection[element] || 0) + 1
  })
  for (key in letterCollection) {
    if (letterCollection[key] === 1) {
      return key
    }
  }
}

// console.log(first_non_repeating_letter('stress'))
// console.log(first_non_repeating_letter('sTreSs'))
// console.log(first_non_repeating_letter('ccooLlaboration'))

//DIGITAL ROOT-----------------------------------------------------------

let digital_root = function (number) {
  let newnum = String(number)

  let arr = newnum.match(/\d/g)

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i]
  }

  return sum < 10 ? sum : digital_root(sum)
}

// console.log(digital_root(16))
// console.log(digital_root(942))
// console.log(digital_root(132189))
// console.log(digital_root(493193))

//PAIRS----------------------------------------------------------------

let findPairs = function (arr) {
  const targetNumberr = 5

  let pairs = 0

  arr.forEach(function (element, index) {
    for (let i = index + 1; i < arr.length; i++) {
      if (element + arr[i] === targetNumberr) pairs++
    }
  })

  return pairs
}

// console.log(findPairs([1, 3, 6, 2, 2, 0, 4, 5]))
// console.log(findPairs([3, 2, 1, 6, 4, 0, 2, 2]))
// console.log(findPairs([4, 3, 0, 5, 2, 3, 4, 1]))

//FORM INVITATION---------------------------------------------------------------

let formingInvitationList = function (str) {
  let list = {}

  listArr = str.split(/\W/)

  for (let i = 0; i < listArr.length; i++) {
    if (i % 2 == 1) {
      if (!(listArr[i] in list)) {
        list[listArr[i]] = []
      }

      list[listArr[i]].push(listArr[i - 1])
    }
  }

  let newArr = []

  sortedLnameArr = Object.keys(list).sort()
  for (let i = 0; i < sortedLnameArr.length; i++) {
    let tempArr = list[sortedLnameArr[i]].sort()
    for (let j = 0; j < list[sortedLnameArr[i]].length; j++) {
      // newArr.push(tempArr[j], sortedLnameArr[i])  //if swap this line and next, then name will be printed first
      newArr.push(sortedLnameArr[i], tempArr[j])
    }
  }

  let finalList = ''
  newArr.forEach(function (element, index) {
    index % 2 == 0
      ? (finalList += '(' + element.toUpperCase() + ',')
      : (finalList += ' ' + element.toUpperCase() + ') ')
  })
  return finalList
}

// console.log(
//   formingInvitationList(
//     'Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
//   )
// )
// console.log(
//   formingInvitationList(
//     'Hosep:Stevens;Maika:Jade;Tony:Stevens;Vika:Jade;Peter:Marley;Stefan:Stevens;Bob:Marley'
//   )
// )

//NEXT BIGGER NUMBER----------------------------------------------------------

let nextBigger = function (num) {
  let numArr = String(num).match(/\d/g)

  let biggerNumArr = []

  let customLength = numArr.length

  for (; numArr.length != 0; ) {
    let maxNum = numArr[0]

    for (let j = 0; j < numArr.length; j++) {
      if (numArr[j] > maxNum) maxNum = numArr[j]
    }

    numArr.forEach(function (element, index) {
      if (element === maxNum) biggerNumArr.push(maxNum)
    })

    numArr = numArr.filter((el) => el != maxNum)
  }

  return biggerNumArr.join('')
}

// console.log(nextBigger(1243))
// console.log(nextBigger(364654))
// console.log(nextBigger(674597))
