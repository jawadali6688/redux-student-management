import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../features/todoSlice';
import { BeatLoader } from 'react-spinners';

function Todos() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const todos = useSelector(state => state.todo.todos);
    const loading = useSelector(state => state.todo.isLoading);
    
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const totalPageCount = Math.ceil(todos.length / itemsPerPage);
    let paginationToShow = [];
    if (totalPageCount <= 10) {
        paginationToShow = Array.from({ length: totalPageCount }, (_, i) => i + 1);
    } else {
        if (currentPage <= 5) {
            paginationToShow = Array.from({ length: 9 }, (_, i) => i + 1);
            paginationToShow.push('...', totalPageCount);
        } else if (currentPage >= totalPageCount - 4) {
            paginationToShow.push(1, '...');
            paginationToShow = paginationToShow.concat(Array.from({ length: 9 }, (_, i) => totalPageCount - 8 + i));
        } else {
            paginationToShow.push(1, '...');
            paginationToShow = paginationToShow.concat(Array.from({ length: 7 }, (_, i) => currentPage - 3 + i));
            paginationToShow.push('...', totalPageCount);
        }
    }

    const handleRefresh = () => {
        dispatch(fetchTodos());
        setCurrentPage(1); // Reset current page to 1 after refresh
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Programming Joke</h1>
            <div className="mb-4 flex justify-end items-center">
                <button
                    onClick={handleRefresh}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
                >
                    Generate More
                </button>
                <label className="mr-2 bg-blue-500 p-2 rounded-md text-white">Items per page:</label>
                <select
                    className="border border-gray-300 rounded px-3 p-2"
                    value={itemsPerPage}
                    onChange={e => setItemsPerPage(parseInt(e.target.value))}
                >
                    <option value="5">5</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center">
                    <BeatLoader color="#4A90E2" size={15} />
                </div>
            ) : (
                <div>
                    <ul className="grid grid-cols-1 gap-6">
                        {currentItems.map(item => (
                            <li key={item.id} className="bg-white shadow-md rounded p-4">
                                <h2 className="text-xl font-bold mb-2">{item.setup}</h2>
                                <p className="text-gray-600">{item.punchline}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex justify-center">
                        {paginationToShow.map((page, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 rounded ${
                                    page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                                onClick={() => (typeof page === 'number' ? paginate(page) : null)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todos;
