import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import MyInfo from "pages/MyInfo";
import ReadReview from "pages/ReadReview";
import PostReview from "pages/PostReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/me" element={<MyInfo />} />
          <Route path="/reviews/:reviewId" element={<ReadReview />} />
          <Route path="/post/review/:bookId" element={<PostReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
