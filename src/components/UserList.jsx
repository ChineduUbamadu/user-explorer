import React, { useState } from 'react';

const UserList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNextUser = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  };

  // Fetch first user on initial render
  React.useEffect(() => {
    fetchNextUser();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      {loading ? (
        <p className="text-gray-700">Loading user...</p>
      ) : user ? (
        <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400">
            {user.location.city}, {user.location.country}
          </p>
        </div>
      ) : (
        <p>No user to display</p>
      )}

      <button
        onClick={fetchNextUser}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Next User
      </button>
    </div>
  );
};

export default UserList;
