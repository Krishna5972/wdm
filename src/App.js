import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import AcademicProgress from "./Pages/Home/AcademicProgress";
import Index from "./Pages/Index";
import Courses from "./Pages/Home/Courses";
import Mapping from "./Pages/Home/Mapping";
import ExamAndAssessment from "./Pages/Home/ExamAndAssessment";
import ReportingAndAnalysis from "./Pages/Home/ReportingAndAnalysis";
import FeedbackAndCommuniaction from "./Pages/Home/FeedbackAndCommunication";
import StudentDashboard from "./Pages/StudentDashboard";
import Progress from "./Pages/Student/Progress";
import Notification from "./Pages/Student/Notification";
import Announcement from "./Pages/Student/Announcement";
import GradeUpdate from "./Pages/Student/GradeUpdate";
import Instructor from "./Pages/Instructor";
import CreateExam from "./Pages/Instructor/CreateExam";
import CourseManagement from "./Pages/Instructor/CourseManagement";
import Gradebook from "./Pages/Instructor/Gradebook";
import Communication from "./Pages/Instructor/Communication";
import Objective from "./Pages/Instructor/Objective";
import Analytics from "./Pages/Instructor/Analytics";
import Administrator from "./Pages/Administrator";
import SystemOverview from "./Pages/Administrator/SystemOverview";
import Curriculum from "./Pages/Administrator/Curriculum";
import Enhancement from "./Pages/Administrator/Enhancement";
import AddAccount from "./Pages/Administrator/AddAccount";
import EditAccount from "./Pages/Administrator/EditAccount";
import TeacherRegister from "./Pages/Administrator/TeacherRegister";
import DeactivateAccount from "./Pages/Administrator/DeactivateAccount";
import UpdateProgram from "./Pages/Administrator/UpdateProgram";
import ModifyProgram from "./Pages/Administrator/ModifyProgram";
import Settings from "./Pages/Administrator/Settings";
import Coordinator from "./Pages/Coordinator";
import ProgramCollaborationHub from "./Pages/Coordinator/ProgramCollaborationHub";
import ReviewAndImprovement from "./Pages/Coordinator/ReviewAndImprovement";
import ProgramEvaluation from "./Pages/Coordinator/ProgramEvaluation";
import QualityAssuranceTool from "./Pages/QAOfficer";
import OfficerDashboard from "./Pages/QAOfficer/OfficerDashboard";
import CourseReview from "./Pages/QAOfficer/CourseReview";
import Automated from "./Pages/QAOfficer/Automated";
import Collabaration from "./Pages/QAOfficer/Collabaration";
import Reccomendation from "./Pages/QAOfficer/Reccomendation";
import Resources from "./Pages/QAOfficer/Resources";
import Message from "./Pages/Message";
import NotificationMessage from "./Pages/Message/NotificationMessage";
import UnifiedMessagingSystem from "./Pages/Message/UnifiedMessagingSystem";
import UserFriendlyChat from "./Pages/Message/UserFriendlyChat";
import Contact from "./Pages/ContactUs";
import Login from "./Pages/Login";
import LoginRegister from "./Pages/Login/LoginRegister";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/academic_progress" element={<AcademicProgress />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mapping" element={<Mapping />} />
        <Route path="/exams_and_assessment" element={<ExamAndAssessment />} />
        <Route
          path="/feedback_and_communication"
          element={<FeedbackAndCommuniaction />}
        />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/gradeupdate" element={<GradeUpdate />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/create_exam" element={<CreateExam />} />
        <Route path="/courseManagement" element={<CourseManagement />} />
        <Route path="/gradebook" element={<Gradebook />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/system_overview" element={<SystemOverview />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/enhancement" element={<Enhancement />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/teacherregister" element={<TeacherRegister />} />
        <Route path="/deactivateaccount" element={<DeactivateAccount />} />
        <Route
          path="/reporting_and_analysis"
          element={<ReportingAndAnalysis />}
        />
        <Route path="/update_program" element={<UpdateProgram />} />
        <Route path="/modify_program" element={<ModifyProgram />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/coordinator" element={<Coordinator />} />
        <Route
          path="/program_collaboration_hub"
          element={<ProgramCollaborationHub />}
        />
        <Route
          path="/reviewandimprovement"
          element={<ReviewAndImprovement />}
        />
        <Route path="/program_evaluation" element={<ProgramEvaluation />} />
        <Route path="/qa-officer" element={<QualityAssuranceTool />} />
        <Route path="/officer_dashboard" element={<OfficerDashboard />} />
        <Route path="/course_review" element={<CourseReview />} />
        <Route path="/automated" element={<Automated />} />
        <Route path="/collabration" element={<Collabaration />} />
        <Route path="/recommendation" element={<Reccomendation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<NotificationMessage />} />
        <Route path="/unified_messaging" element={<UnifiedMessagingSystem />} />
        <Route path="/user_friendly_chat" element={<UserFriendlyChat />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
