import { BrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import { NewPolicy } from "./pages/newPolicy";
import { PaymentDue } from "./pages/paymentDue";
import { Layout } from "./layout/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
