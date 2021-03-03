import {React, useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

const Digital = styled.div`
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 3rem;
        font-family: sans-serif;
        line-height: .9;
    `;

export default function Clock() {

    const [count, setCount] = useState(new Date());
    const ref = useRef(null);

    useEffect(() => {
        ref.current = setInterval(() => setCount(new Date()), 1000);
        return () => clearInterval(ref.current);
    }, [count]);

    return (
        <Digital>
            {count.toLocaleTimeString()}
        </Digital>
    )
}