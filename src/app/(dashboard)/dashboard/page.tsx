import React from 'react';

const Page: React.FC = () => {
  // Dummy data for profile
  const userProfile = {
    username: 'JohnDoe',
    displayName: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    followers: 1000,
    following: 500,
    tweets: 1500,
    profileImageUrl: 'https://via.placeholder.com/200', // URL of profile photo
    coverImageUrl: 'https://via.placeholder.com/800x400', // URL of cover photo
  };

  return (
  <div className="bg-gray-200 min-h-screen">
    {/* Cover Photo */}
    <div className="bg-cover bg-center h-60 relative" style={{ backgroundImage: `url(${userProfile.coverImageUrl})` }}>
     {/* Profile Photo */}
    <div className="absolute bottom-0 left-0">
      <img className="rounded-full ml-5 border-4 border-white w-25 h-25" src={userProfile.profileImageUrl} alt="Profile" />
    </div>
    </div>
    {/* Profile Details */}
    <div className="p-4">
    <h2 className="font-bold text-xl">{userProfile.displayName}</h2>
    <p className="text-gray-600">@{userProfile.username}</p>
    <p className="text-gray-800 mt-2">{userProfile.bio}</p>
    <div className="flex mt-4">
      {/* Add additional profile details here */}
    </div>
    </div>
  </div>

  );
};

export default Page;
