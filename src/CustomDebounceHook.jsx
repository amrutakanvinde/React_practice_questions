//Create a custom useDebounce hook() which will cause a delay in displaying the info on the screen

import React, {useEffect, useState} from "react";

const useDebounce = (text, delay) => {
    const [debounce, setDebounce] = useState(text);

    useEffect(() => {
        const timer = setTimeout(()=> {
            setDebounce(text);
        }, delay)

        //cleanup to avoid memory leaks when the component unmounts
        return ()=> {
            clearTimeout(timer)
        }
    }, [text,delay]);

    return debounce;
}

export const SecondQuestion = () => {
    const [text,setText] = useState("");
    const debouncedText = useDebounce(text, 1000);//1000ms delay
    return (
        <div>
            <h2> Debounce Hook Tester </h2>
            <input type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Type something"

            />
            <p>Debounced value: {debouncedText}</p>
        </div>
    )

}