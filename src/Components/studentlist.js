import React, { useState } from 'react';
import StudentProfiles from './Studentprofiles';
import img1 from './images/img1.jpg';
import student2 from './images/student2.jpg';
import student8 from './images/student8.jpg';
import student7 from './images/student7.jpg';
import student4 from './images/student4.jpg';
import student9 from './images/student9.jpg';
import student10 from './images/student10.jpg';
import student6 from './images/student6.jpg';
import student5 from './images/student5.jpg';
import student3 from './images/student3.jpg';













function StudentList({StudentProfile}) {
  
      const [students, setStudents] = useState([
        { name: 'Nwakaego Johnson', pictureUrl:student8 , email: 'Nwakaego@gmail.com', score:'score=540',dt: "2023-02-10" },
        { name: 'Juliet Hills', pictureUrl: student2, email: 'Juliet@gmail.com', score:'score=519',dt: "2023-02-10" },
        { name: 'Hope Michaels', pictureUrl: student7, email: 'Hope@gmail.com', score:'score=508',dt: "2023-02-10" },
        { name: 'Uche Jacobs', pictureUrl: img1, email: 'Uche@gmail.com', score:'score=493',dt: "2023-02-10" },
        { name: 'David Daniels', pictureUrl: student4, email: 'David@gmail.com', score:'score=485',dt: "2023-02-10" },
        { name: 'Valerie Nnam', pictureUrl: student9, email: 'Valerie@gmail.com', score:'score=473',dt: "2023-02-10" },
        { name: 'Chike Eze', pictureUrl: student10, email: 'Chike@gmail.com', score:'score=445',dt: "2023-02-10" },
        { name: 'Emelda Onah', pictureUrl: student6, email: 'Emelda@gmail.com', score:'score=414',dt: "2023-02-10" },
        { name: 'Best Emmanuel', pictureUrl: student5, email: 'emmanuel@gmail.com', score:'score=379',dt: "2023-02-10" },
        { name: 'Chidimma Offor', pictureUrl: student3, email: 'Chidimma@gmail.com', score:'score=289',dt: "2023-02-10" },

        // ...
      ]);
    
      return (
        <div className='profiles'>
          {students.map(student => (
            <StudentProfiles
              key={student.email}
              name={student.name}
              pictureUrl={student.pictureUrl}
              email={student.email}
              score={student.score}
            
            />
            
            
          ))}
        </div>
        
      );
      
    };
    
export default StudentList;
