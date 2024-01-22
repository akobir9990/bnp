import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";
import Test from "../pages/tests";
import Control from "../pages/controlQuest";
import Tutorial from "../pages/tutorial";
import ListOfLib from "../pages/usedLib";

import Presentation from "../pages/presentation";
import PresentationOne from "../pages/presentation/pages/1";
import PresentationTwo from "../pages/presentation/pages/2";
import PresentationThree from "../pages/presentation/pages/3";
import PresentationFour from "../pages/presentation/pages/4";
import PresentationFive from "../pages/presentation/pages/5";
import PresentationSix from "../pages/presentation/pages/6";
import PresentationSeven from "../pages/presentation/pages/7";

import ControlOne from "../pages/controlQuest/pages/1";
import ControlTwo from "../pages/controlQuest/pages/2";
import ControlThree from "../pages/controlQuest/pages/3";
import ControlFour from "../pages/controlQuest/pages/4";
import ControlFive from "../pages/controlQuest/pages/5";
import ControlSix from "../pages/controlQuest/pages/6";
import ControlSeven from "../pages/controlQuest/pages/7";
import ControlEight from "../pages/controlQuest/pages/8";
import ControlNine from "../pages/controlQuest/pages/9";

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

import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  CONTROL_QUESTIONS_PAGE,
  HOME_PAGE,
  LECTURE_PAGE,
  LIST_OF_LIB_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={TEST_PAGE} element={<Test />} />
        <Route path={TUTORIAL_PAGE} element={<Tutorial />} />
        <Route path={CONTROL_QUESTIONS_PAGE} element={<Control />} />
        <Route path={LIST_OF_LIB_PAGE} element={<ListOfLib />} />
        <Route path={CONTROL_QUESTIONS_PAGE}>
          <Route path="" element={<Control />} />
          <Route path="1" element={<ControlOne />} />
          <Route path="2" element={<ControlTwo />} />
          <Route path="3" element={<ControlThree />} />
          <Route path="4" element={<ControlFour />} />
          <Route path="5" element={<ControlFive />} />
          <Route path="6" element={<ControlSix />} />
          <Route path="7" element={<ControlSeven />} />
          <Route path="8" element={<ControlEight />} />
          <Route path="9" element={<ControlNine />} />
        </Route>
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<PresentationOne />} />
          <Route path="2" element={<PresentationTwo />} />
          <Route path="3" element={<PresentationThree />} />
          <Route path="4" element={<PresentationFour />} />
          <Route path="5" element={<PresentationFive />} />
          <Route path="6" element={<PresentationSix />} />
          <Route path="7" element={<PresentationSeven />} />
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
        </Route>
      </Routes>
    </div>
  );
}

export default router;
