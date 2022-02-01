import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [teams, setTeams] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{teams.length} Premiere League Team</h3>
        <List teams={teams} />
        <button onClick={() => setTeams([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
