const smallLengths = document.querySelectorAll('.length-small')

const meters = document.getElementById('meters')

const percentage = document.getElementById('percentage')

const remained = document.getElementById('remained')



updateBigLength()



smallLengths.forEach((length, idx) => {

  length.addEventListener('click', () => highlightLengths(idx))

})



function highlightLengths(idx) {

  if (

    smallLengths[idx].classList.contains('full') &&

    !smallLengths[idx].nextElementSibling.classList.contains('full')

  ) {

    idx--

  }



  smallLengths.forEach((length, idx2) => {

    if (idx2 <= idx) {

      length.classList.add('full')

    } else {

      length.classList.remove('full')

    }

  })

  updateBigLength()

}



function updateBigLength() {

  //missed a dot in the selector
  const fullLengths = document.querySelectorAll('.length-small.full').length



  const totalLengths = smallLengths.length

  if (fullLengths === 0) {

    percentage.style.visibility = 'hidden'

    //changed height by width
    percentage.style.width = 0

  } else {

    percentage.style.visibility = 'visible'

    // 'totalLengths' was mispelled as 'totalLenghs'

    percentage.style.width = `${(fullLengths / totalLengths) * 1000}px`

    percentage.innerText = `${(fullLengths / totalLengths) * 100}%`

  }



  if (fullLengths === totalLengths) {

    remained.style.visibility = 'hidden'

    //Changed height by width
    remained.style.width = 0

  } else {

    remained.style.visibility = 'visible'

    //Changed the math a little
    meters.innerText = `${1000 - (100 * fullLengths)}m`

  }

}