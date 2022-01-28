
// MAKE THIS SCRIPT RUN WITHOUT ERRORS MODIFYING ONLY BETWEEN THIS COMMENT TAG: [MODIFICATION ALLOWED]

let stackPointer = 0
const stateStack = []

const renderComponent = (Component) => {
  const result = Component()
  stackPointer += 1
  return result
}

const renderComponents = (...components) => {
  const renderedComponents = components.map(renderComponent)
  stackPointer = 0
  return renderedComponents
}

const useState = (initialState) => {
  // [MODIFICATION ALLOWED]
  const setter = (toSetValue) => {
    if (typeof toSetValue === 'function') {
      stateStack[stackPointer] = toSetValue(stateStack[stackPointer] || initialState)
    } else {
      stateStack[stackPointer] = toSetValue
    }
  }

  return [stateStack[stackPointer] || initialState, setter]
  // [MODIFICATION ALLOWED]
}

let increment
let decrement

const IncrementCounter = () => {
  const [counter, setCounter] = useState(0)
  
  increment = () => {
    setCounter((prev) => prev + 1)
  }

  return counter
}

const DecrementCounter = () => {
  const [counter, setCounter] = useState(0)
  
  decrement = () => {
    setCounter((prev) => prev - 1)
  }

  return counter
}

const assertArray = (original, asserted) => {
  if (original.length !== asserted.length) {
    throw new Error(`Arrays have different lengths: ${original} : ${asserted}`)
  }
  original.forEach((originalItem, index) => {
    const assertedItem = asserted[index]
    if (originalItem !== assertedItem) {
      throw new Error(`Element at index [${index}] is not equal, expecting: [${originalItem}] found: [${assertedItem}]`)
    }
  })
}

const oneRender = () => renderComponents(
  IncrementCounter,
  DecrementCounter,
)

const render1 = oneRender()

assertArray([0, 0], render1)

increment()
increment()
decrement()

const render2 = oneRender()

assertArray([2, -1], render2)

increment()
decrement()

const render3 = oneRender()

assertArray([3, -2], render3)

increment()
increment()
increment()
decrement()

const render4 = oneRender()

assertArray([6, -3], render4)
