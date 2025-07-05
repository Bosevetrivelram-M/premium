import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { EntrySection } from "./components/EntrySection"
import { SearchSection } from "./components/SearchSection"
import { Home } from "./components/Home";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  }

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/entry" element={<EntrySection onSave={addEntry}/>}/>
          <Route path="/search" element={<SearchSection entries={entries}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
