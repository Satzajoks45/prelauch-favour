"use client"

import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number) {
    const [debouceValue, setDebouceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouceValue(value);
        }, delay);

        return ()=> clearTimeout(timer);
    }, [value, delay]);

    return debouceValue;
}
