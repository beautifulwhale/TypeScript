// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }

    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("abc")

export {}


function useStates(state: any) {
    let currentState = state;
    const changeState = (newState: any) => {
        currentState = newState;
    }
    let tupleState: [any, (newState: any) => void] = [currentState, changeState]
    return tupleState
}

let [person, setPerson] = useState([])
console.log(person)
const arr: string[] = ['123', 'abc']
// setPerson([...arr])
setPerson(arr)
console.log(person)
