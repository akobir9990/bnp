import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";
import Videos from "../pages/videos";
import Test from "../pages/tests";

import Presentation from "../pages/presentation";
import PresentationOne from "../pages/presentation/pages/1";
import PresentationTwo from "../pages/presentation/pages/2";
import PresentationThree from "../pages/presentation/pages/3";
import PresentationFour from "../pages/presentation/pages/4";
import PresentationFive from "../pages/presentation/pages/5";
import PresentationSix from "../pages/presentation/pages/6";
import PresentationSeven from "../pages/presentation/pages/7";
// import PresentationEight from "../pages/presentation/pages/8";
// import PresentationNine from "../pages/presentation/pages/9";
// import PresentationTen from "../pages/presentation/pages/10";
// import PresentationEleven from "../pages/presentation/pages/11";
// import PresentationTwelve from "../pages/presentation/pages/12";
// import PresentationThreeteen from "../pages/presentation/pages/13";
// import PresentationFourteen from "../pages/presentation/pages/14";
// import PresentationFifteen from "../pages/presentation/pages/15";
// import PresentationSixteen from "../pages/presentation/pages/16";

import Lecture from "../pages/lecture/index";

import LectureOne from "../pages/lecture/pages/1";
import LectureTwo from "../pages/lecture/pages/2";
import LectureThree from "../pages/lecture/pages/3";
import LectureFour from "../pages/lecture/pages/4";
import LectureFive from "../pages/lecture/pages/5";
import LectureSix from "../pages/lecture/pages/6";
import LectureSeven from "../pages/lecture/pages/7";
import LectureEight from "../pages/lecture/pages/8";
import LectureNine from "../pages/lecture/pages/9";
// import LectureTen from "../pages/lecture/pages/10";
// import LectureThirteen from "../pages/lecture/pages/13";
// import LectureSixteen from "../pages/lecture/pages/16";

import Practice from "../pages/practice/index";

import PracticeOne from "../pages/practice/pages/1";
import PracticeTwo from "../pages/practice/pages/2";
import PracticeThree from "../pages/practice/pages/3";
import PracticeFour from "../pages/practice/pages/4";
import PracticeFive from "../pages/practice/pages/5";
import PracticeSix from "../pages/practice/pages/6";
import PracticeSeven from "../pages/practice/pages/7";
import PracticeEight from "../pages/practice/pages/8";
import PracticeNine from "../pages/practice/pages/9";
import PracticeTen from "../pages/practice/pages/10";
import PracticeEleven from "../pages/practice/pages/11";
import PracticeTwelve from "../pages/practice/pages/12";
import PracticeThreeteen from "../pages/practice/pages/13";
import PracticeFourteen from "../pages/practice/pages/14";
import PracticeFifteen from "../pages/practice/pages/15";
import PracticeSixteen from "../pages/practice/pages/16";

import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  LECTURE_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  VIDEOS_PAGE,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={TEST_PAGE} element={<Test />} />
        <Route path={VIDEOS_PAGE} element={<Videos />} />
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<PresentationOne />} />
          <Route path="2" element={<PresentationTwo />} />
          <Route path="3" element={<PresentationThree />} />
          <Route path="4" element={<PresentationFour />} />
          <Route path="5" element={<PresentationFive />} />
          <Route path="6" element={<PresentationSix />} />
          <Route path="7" element={<PresentationSeven />} />
          {/* <Route path="8" element={<PresentationEight />} />
          <Route path="9" element={<PresentationNine />} />
          <Route path="10" element={<PresentationTen />} />
          <Route path="11" element={<PresentationEleven />} />
          <Route path="12" element={<PresentationTwelve />} />
          <Route path="13" element={<PresentationThreeteen />} />
          <Route path="14" element={<PresentationFourteen />} />
          <Route path="15" element={<PresentationFifteen />} />
          <Route path="16" element={<PresentationSixteen />} /> */}
        </Route>
        <Route path={LECTURE_PAGE}>
          <Route path="" element={<Lecture />} />
          <Route path="1" element={<LectureOne />} />
          <Route path="2" element={<LectureTwo />} />
          <Route path="3" element={<LectureThree />} />
          <Route path="4" element={<LectureFour />} />
          <Route path="5" element={<LectureFive />} />
          <Route path="6" element={<LectureSix />} />
          <Route path="7" element={<LectureSeven />} />
          <Route path="8" element={<LectureEight />} />
          <Route path="9" element={<LectureNine />} />
          {/* <Route path="10" element={<LectureTen />} />
          <Route path="13" element={<LectureThirteen />} />
          <Route path="16" element={<LectureSixteen />} /> */}
        </Route>
        <Route path={PRACTICE_PAGE}>
          <Route path="" element={<Practice />} />
          <Route path="1" element={<PracticeOne />} />
          <Route path="2" element={<PracticeTwo />} />
          <Route path="3" element={<PracticeThree />} />
          <Route path="4" element={<PracticeFour />} />
          <Route path="5" element={<PracticeFive />} />
          <Route path="6" element={<PracticeSix />} />
          <Route path="7" element={<PracticeSeven />} />
          <Route path="8" element={<PracticeEight />} />
          <Route path="9" element={<PracticeNine />} />
          <Route path="10" element={<PracticeTen />} />
          <Route path="11" element={<PracticeEleven />} />
          <Route path="12" element={<PracticeTwelve />} />
          <Route path="13" element={<PracticeThreeteen />} />
          <Route path="14" element={<PracticeFourteen />} />
          <Route path="15" element={<PracticeFifteen />} />
          <Route path="16" element={<PracticeSixteen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default router;
