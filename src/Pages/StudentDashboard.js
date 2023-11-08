import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import scheduleLogo from "../Images/schedule.jpg";
import progress1 from "../Images/progress1.jpg";
import two from "../Images/2.jpg";

// function StudentDashboard() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h3>Student Dashboard</h3>

//       <div className="container">
//         {/* Create the first block container for the left column */}
//         <div className="block-container">
//           <div className="block">
//             <Link to="/progress">
//               <img
//                 className="block-image"
//                 src={progress1}
//                 alt="Progress Summary Logo"
//               />
//               <span>Progress Summary</span>
//             </Link>
//           </div>

//           <div className="block">
//             <Link to="/courses">
//               <img
//                 className="block-image"
//                 src={scheduleLogo}
//                 alt="Course Schedule Logo"
//               />
//               <span>Course Schedule</span>
//             </Link>
//           </div>
//         </div>

//         <div className="block-container">
//           <div className="block">
//             <Link to="/notification">
//               <img
//                 className="block-image"
//                 src={two}
//                 alt="Notification Logo"
//                 width="150px"
//                 height="150px"
//               />
//               <span>Tests</span>
//             </Link>
//           </div>

//           {/* <div className="block">
//             <Link to="/announcement">
//               <span>Announcement</span>
//             </Link>
//           </div>

//           <div className="block">
//             <Link to="/gradeupdate">
//               <span>Grade Update</span>
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

function StudentDashboard() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Student Dashboard</h3>

      <div style={{
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around"
      }}>
        {/* Create the first block container for the left column */}
        
          <div >
          <img
                style={{margin:"10px", boxShadow: "5px 2px black"}}
                src={progress1}
                alt="Progress Summary Logo"
              />
              <br/>
            <Link to="/progress">
              <label>Progress Summary</label>
            </Link>
          </div>

          <div >
          <img
                className="block-image"
                src={scheduleLogo}
                alt="Course Schedule Logo"
              />
              <br/>
            <Link to="/courses">
              <label>Course Schedule</label>
            </Link>
          </div>
        

        
          <div >
            
              <img
                className="block-image"
                src={two}
                alt="Notification Logo"
                width="150px"
                height="150px"
              />
           <br/>
            <Link to="/notification">
              <label>Tests</label>
            </Link>
          

          {/* <div className="block">
            <Link to="/announcement">
              <span>Announcement</span>
            </Link>
          </div>

          <div className="block">
            <Link to="/gradeupdate">
              <span>Grade Update</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
