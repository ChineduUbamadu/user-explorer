import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-10 flex justify-center px-4">
        <UserList />
      </main>
    </div>
  );
}

export default App;
