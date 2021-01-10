// const slider = document.querySelector('#range')
// const label = document.querySelector('label')

//Range min = -30px, max = 250px
//My solution before seeing the video
// slider.addEventListener('input', () => {
//     const range = slider.value
    
//     label.innerText = `${range}`
//     label.style.left = `${range * 2.8 - 30}px`

//     console.log(range * 2.8 - 30)

// })

// My solution after seeing part of the video
    // putInTheMiddle()

    // slider.addEventListener('input', (evt) => {
    //     const range = evt.target.value

    //     const ballWidth = 24

    //     const rangeWidthPx = getComputedStyle(evt.target).getPropertyValue('width')
    //     const [rangeWidth, px] = rangeWidthPx.split('px')

    //     const calculation = (((rangeWidth - ballWidth)/100) * range) + (ballWidth/2) 


    //     label.innerText = range
    //     label.style.left = `${calculation}px`

    //     console.log(calculation)
    // })

    // function putInTheMiddle(){
    //     const sliderWidth = getComputedStyle(slider).getPropertyValue('width')
    //     const [numSliderWidth, px ] = sliderWidth.split('px')
    //     const center = numSliderWidth /2

    //     label.style.transform = 'translateX(-50%)'
    //     label.style.left = `${center}px`

    //     console.log(slider.scrollHeight)
    // }

const range = document.getElementById('range')

putInTheMiddle()

range.addEventListener('input', (evt) => {
    const value = evt.target.value
    const label = evt.target.nextElementSibling
    
    const rangeWidth = getComputedStyle(evt.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')

    const numWidth = +rangeWidth.substring(0,rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0,labelWidth.length - 2)

    const max = +evt.target.max
    const min = +evt.target.min

    const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

    console.log(left)
    label.style.left = `${left}px`

    label.innerHTML = value
})

    function putInTheMiddle(){
        const label = document.getElementById('label')

        const sliderWidth = getComputedStyle(range).getPropertyValue('width')
        const [numSliderWidth, px ] = sliderWidth.split('px')

        const labelWidth = getComputedStyle(label).getPropertyValue('width')
        const [numLabelWidth, px2 ] = labelWidth.split('px')

        const center = (numSliderWidth / 2) - (numLabelWidth /2)

        label.style.left = `${center}px`
    }


    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }