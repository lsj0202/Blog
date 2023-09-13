import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/posts" element={<h1>posts</h1>} />
        <Route path="/posts/:id" element={<h1>posts:id</h1>} />
        <Route path="/posts/new" element={<h1>posts:new</h1>} />
        <Route path="/posts/edit/:id" element={<h1>posts:edit:id</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
