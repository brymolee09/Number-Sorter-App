const sortBtn = document.getElementById('sort')
const sortInputArray = (event) => {
  //to prevent the form from submitting
  event.preventDefault()
  //select element by the class name change it to an array using the three dot and convert it to number using the map method
  const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value))
const sortedValues = inputValues.sort((a,b) => {
  return(a - b)
})
  updateUI(sortedValues)
}
//store the output numbers into an array and display it to the UI
const updateUI = (array = []) => {
  array.forEach((num,i)=> {
  const outputValueNode = document.getElementById(`output-value-${i}`)
  outputValueNode.innerText = num
}
)}
//function that trigger the sorting
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      //console.log(array,array[j],array[j+1])
      if (array[j] > array[j+1]) {
        const temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}
//selection algorithm for sorting
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i+1; j < array.length; j++) {
      //console.log(array,array[j],array[minIndex])
      if (array[j]<array[minIndex]) {
        minIndex = j
      }
    }
    const temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}
//insertion algorithm for sorting
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i]
    let j = i - 1
    while(j>=0 && array[j] > currValue){
      array[j+1] = array[j]
      j--
    }
    array[j+1] = currValue
  }
  return array
}
sortBtn.addEventListener('click', sortInputArray)