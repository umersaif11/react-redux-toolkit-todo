import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    [
        {id: 1, text: 'Hello World'}
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
})