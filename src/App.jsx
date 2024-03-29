import AddStudent from "./components/AddStudent"
import StudentList from "./components/StudentList"


function App() {


  return (
<>
<div className="flex flex-col gap-4 my-8 ">
<AddStudent/>
<StudentList/>
</div>
</>
  )
}

export default App
