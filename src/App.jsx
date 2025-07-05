import { useState } from "react";
import { EntrySection } from "./components/EntrySection"
import { SearchSection } from "./components/SearchSection"

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  }

  return (
    <div className="flex items-center justify-between">
      <EntrySection onSave={addEntry}/>
      <SearchSection entries={entries}/>
    </div>
  )
}

export default App
