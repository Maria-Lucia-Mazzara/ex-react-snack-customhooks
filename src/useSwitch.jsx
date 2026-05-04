import { useState } from "react"

function useSwitch(valoreIniziale = false) {
    const [isOn, setIsOn] = useState(valoreIniziale)
    // valoreIniziale sarà uguale a false inizialmente, fino a quando non passerò un valore
    const toggle = () => {
        setIsOn(curr => !curr)
    }
    return [isOn, toggle]
    // a questo return potevo passare un array di oggetti, ma poi dovevo usarlo anche nel file app.jsx
}

export default useSwitch