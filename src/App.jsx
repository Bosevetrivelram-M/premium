import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { NewPolicy } from "./pages/newPolicy";
import { PaymentDue } from "./pages/paymentDue";
import { Layout } from "./layout/layout";

function App() {
  return (
    <>
     <Layout />
    </>
  )
}

export default App
