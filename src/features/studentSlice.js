import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    students: [
        
    ]
}
console.log(initialState.students);

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
        },
        editStudent: (state, action) => {
            console.log(action.payload);
            const {id, name, reg, semester} = action.payload
            const existingStudent = state.students.find((student)=> student.id === id);
            if (existingStudent) {
                existingStudent.name = name;
                existingStudent.reg = reg;
                existingStudent.semester = semester;
            
            }
        }

        
    }
})
export const {addStudent, removeStudent, editStudent} = studentSlice.actions
export default studentSlice.reducer