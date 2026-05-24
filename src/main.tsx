import { createRoot } from "react-dom/client";
import App from "./app/App";
// @ts-ignore: Side-effect CSS import without type declarations
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);