import { useState } from 'react';
import { AddStudent } from './components/AddStudent';
import { StudentTable } from './components/StudentTable';
import { data } from './utils/data';
import './App.css';



function App() {
  const [students, setStudents] = useState(data);
  const [search, setSearch] = useState('');

  // فلترة الطلاب حسب البحث
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.class.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="center-container">
      {/* مربع البحث */}
      <input
        type="text"
        placeholder="ابحث عن طالب..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 16, padding: 8, width: 300, borderRadius: 4, border: '1px solid #ccc' }}
      />
      <StudentTable students={filteredStudents} checkMaxLimit={true} />
      <AddStudent students={students} setStudents={setStudents} />
    </div>
  );
}
export default App;
