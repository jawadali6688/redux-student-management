import AddStudent from "./components/AddStudent"
import StudentList from "./components/StudentList"
import Todos from "./components/Todos"


function App() {


  return (
<>
<div className="flex flex-col gap-4 my-8 ">
{/* <AddStudent/>
<StudentList/> */}
<Todos/>
</div>
</>
  )
}

export default App
