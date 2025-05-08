import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const [travelDocs, setTravelDocs] = useState(() => {
    const saved = localStorage.getItem('travelDocs');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddDoc = () => {
    if (!location.trim() || !note.trim()) return;

    const newDoc = {
      location,
      note,
      photos: photoUrl ? [photoUrl] : [],
    };

    const updatedDocs = [...travelDocs, newDoc];
    setTravelDocs(updatedDocs);
    setLocation('');
    setNote('');
    setPhotoUrl('');
  };

  useEffect(() => {
    localStorage.setItem('travelDocs', JSON.stringify(travelDocs));
  }, [travelDocs]);

  return (
    <div>
      {/* 🌍 Fullscreen Carousel */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3500}
          className="h-full"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Tropical Beach"
              className="w-full h-screen object-cover"
            />
            <p className="legend">Tropical Beach</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1673859054724-d3ce699da39d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Snowy Mountains"
              className="w-full h-screen object-cover"
            />
            <p className="legend">Snowy Mountains</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
              alt="Cityscape"
              className="w-full h-screen object-cover"
            />
            <p className="legend">Vibrant City</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1699534957519-1e4b571be973?q=80&w=3570&auto=format&fit=crop"
              alt="Desert Dunes"
              className="w-full h-screen object-cover"
            />
            <p className="legend">Desert Dunes</p>
          </div>
        </Carousel>
      </div>

      {/* 📄 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 pt-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Explore the World</h1>

        {/* 📒 Travel Journal Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add to Your Travel Journal</h2>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          <textarea
            placeholder="Write your notes..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="text"
            placeholder="Add photo URL (optional)"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          <button
            onClick={handleAddDoc}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Travel Doc
          </button>
        </div>

        {/* 📍 Saved Travel Docs */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Saved Locations</h2>
          {travelDocs.length === 0 ? (
            <p className="text-gray-600">No travel docs saved yet.</p>
          ) : (
            travelDocs.map((doc, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded shadow mb-4">
                <h3 className="text-xl font-bold text-gray-800">{doc.location}</h3>
                <p className="mt-2 text-gray-700">{doc.note}</p>
                <div className="flex gap-3 mt-3 flex-wrap">
                  {doc.photos.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Travel ${i}`}
                      className="w-32 h-32 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* ⭐ Popular Places */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Popular Travel Places</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
              { name: 'New York', img: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88' },
              { name: 'Tokyo', img: 'https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82' },
              { name: 'Sydney', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9' },
              { name: 'Dubai', img: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8' },
              { name: 'Rome', img: 'https://images.unsplash.com/photo-1529260830199-42c24126f198' },
            ].map((place, i) => (
              <div key={i} className="bg-white shadow rounded overflow-hidden">
                <img src={place.img} alt={place.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
