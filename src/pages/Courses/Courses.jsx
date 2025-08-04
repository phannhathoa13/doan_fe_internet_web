import logo from "../../assets/Courses/logo.png";
import "./Courses.css";
import avatarAccount from "../../assets/Courses/avatarAccount.png";
import courseInformation from "../../assets/Courses/courseInformation.png";
import addCourseInfo from "../../assets/Courses/addCourseInfo.png";
import removeCourse from "../../assets/Courses/removeCourse.png";

export function Courses() {
  return (
    <div className="courses-container">
      <div className="heading-container">
        <div className="content-left-container">
          <img className="logo-ELearning" src={logo} alt="logo-ELearning"></img>
          <h1>E-Learning</h1>
        </div>
        <div className="content-right-container">
          <img src={avatarAccount} alt="logo-ELearning"></img>
          <p>Phan Nhat Hoa</p>
        </div>
      </div>
      <div className="content-container">
        <div className="nav-left-container">
          <div className="course-information">
            <img src={courseInformation} alt="Course-Information"></img>
            <p>Course Information</p>
          </div>
          <div className="course-information">
            <img src={addCourseInfo} alt="Add Course Info"></img>
            <p>Add Course Info</p>
          </div>
          <div className="course-information">
            <img src={removeCourse} alt="Remove Course"></img>
            <p>Remove Course</p>
          </div>
        </div>
      </div>
      <div className="information-conatiner"></div>
    </div>
  );
}
