import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    students: [
        
    ]
}

const studentSlice = createSlice({
    name: "Students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const student = {
                id: nanoid(),
                name: action.payload.name,
                reg: action.payload.reg,
                semester: action.payload.semester
            }
            state.students.push(student)
        },
        removeStudent: (state, action) => {
            state.students = state.students.filter((student)=> student.id !== action.payload)
        }

        
    }
})
export const {addStudent, removeStudent} = studentSlice.actions
export default studentSlice.reducer