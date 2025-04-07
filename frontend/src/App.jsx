import Home from "./components/Home";
import "./app.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import Terms from "./components/Terms";
import Reviews from "./components/Reviews";
import PrivacyPolicy from "./components/PrivacyPolicy";
import MyList from "./components/MyList";
import Navbar from "./components/Navbar";
import UpdateTask from "./components/UpdateTask";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTasks } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="/"
            element={<Home tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/todos"
            element={<MyList tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/updateTask/:id"
            element={<UpdateTask setTasks={setTasks} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
