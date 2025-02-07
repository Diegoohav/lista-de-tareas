import { useRef } from "react"

export const AddTask = ({addTask}) => {
    const inputRef = useRef()

    return <>
    <input ref={inputRef} type="text" placeholder="Tarea" />
    <button onClick={() =>{ addTask(inputRef.current.value) }}>Agregar</button>

    </>
} 