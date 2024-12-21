import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Users from "pages/Users/Users";
import Logo from "pages/Logo/Logo";
import AboutYou from "pages/Clients/componenets/AboutYou/AboutYou";
import Otto from "pages/Clients/componenets/Otto/Otto";
import Zalando from "pages/Clients/componenets/Zalando/Zalando";
import Clients from "pages/Clients/Clients";

//lessons
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "lessons/Lesson10/Lesson10";
// import Lesson11 from "lessons/Lesson11/Lesson11";
import Lesson13 from "lessons/lesson13/Lesson13";

//homeworks
// import Homework07 from "./homeworks/Homeworks07/Homeworks07";
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework09 from "homeworks/Homework09/Homework09";
// import Homewrok11 from "homeworks/Homework11/Homewrok11";
import Homework13 from "homeworks/Homework13/Homework13";

//comsultations
// import Consultation04 from "./consultations/Consultation04/Consultation04";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/about-you" element={<AboutYou />} />
          <Route path="/clients/otto" element={<Otto />} />
          <Route path="/clients/zalando" element={<Zalando />} />
          <Route path="/lesson13" element={<Lesson13 />} />
          <Route path="/homework13" element={<Homework13 />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Consultation04 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09/> */}
      {/* <Homework09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Homewrok11 /> */}
    </BrowserRouter>
  );
}

export default App;
