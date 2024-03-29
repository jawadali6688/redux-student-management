import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../features/studentSlice';

function AddStudent() {
    const [name, setName] = useState('');
    const [reg, setReg] = useState('');
    const [semester, setSemester] = useState('');
    const dispatch = useDispatch();

    const handleStudentForm = (e) => {
        e.preventDefault();
        dispatch(addStudent({ name, reg, semester }));
        setName("")
        setReg("")
        setSemester("")
    };

    return (
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white shadow-md rounded px-4 py-6 md:px-8 md:py-8">
            <h1 className="text-2xl mb-4 font-bold text-center">Add a Student</h1>
            <form onSubmit={handleStudentForm}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Student Name
                    </label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Student Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg">
                        Registration
                    </label>
                    <input
                        id="reg"
                        value={reg}
                        onChange={(e) => setReg(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Registration"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
                        Semester
                    </label>
                    <input
                        id="semester"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Semester"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddStudent;
