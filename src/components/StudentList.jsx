import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeStudent } from '../features/studentSlice';
function StudentList() {
    const students = useSelector((state) => state.students);
    const dispatch = useDispatch()

    return (
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Student List</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-center">
                            <th className="px-4 py-2">Sr</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Registration</th>
                            <th className="px-4 py-2">Semester</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border text-center px-4 py-2">{index + 1}</td>
                                <td className="border text-center px-4 py-2">{student.name}</td>
                                <td className="border text-center px-4 py-2">{student.reg}</td>
                                <td className="border text-center px-4 py-2">{student.semester}</td>
                                <td className="border text-center px-4 py-2">
                                    <button 
                                    onClick={()=>dispatch(removeStudent(student.id))}
                                    className='bg-red-700 text-white px-4 py-1 rounded-lg hover:bg-red-800 active:bg-red-900'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentList;
