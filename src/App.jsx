import { useState } from "react";
import "./App.css";
import Form from "./features/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./features/Form/LoginForm/LoginForm";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-100%  box-border flex items-center justify-center">
      <LoginForm></LoginForm>
    </main>
  );
}

export default App;
