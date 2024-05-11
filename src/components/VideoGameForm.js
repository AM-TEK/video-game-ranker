import { useState } from 'react';

const VideoGameForm = ({ videoGames, setVideoGames }) => {
  const [formData, setFormData] = useState({
    title: '',
    developer: '',
    year: '',
  });
  const [numGames, setNumGames] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;
    for (let i = 0; i < numGames; i++) {
      if (formData[`title${i}`].trim() === '') {
        isFormValid = false;
        break;
      }
    }
    if (isFormValid) {
      const newGames = Array.from({ length: numGames }, (_, index) => ({
        id: videoGames.length + index + 1,
        title: formData[`title${index}`],
        developer: formData[`developer${index}`],
        year: formData[`year${index}`],
      }));
      setVideoGames(newGames);
      setFormData({
        title: '',
        developer: '',
        year: '',
      });
    } else {
      alert('Title is required');
    }
  };
  
  const handleNumGamesChange = (e) => {
    setNumGames(parseInt(e.target.value, 10));
  };

  const renderGameInputs = () => {
    return Array.from({ length: numGames }).map((_, index) => (
      <div key={index}>
        <label htmlFor={`title${index}`} className="block text-sm font-medium text-gray-700">
          Title {index + 1} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`title${index}`}
          name={`title${index}`}
          value={formData[`title${index}`] || ''}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <label htmlFor={`developer${index}`} className="block text-sm font-medium text-gray-700">
          Developer {index + 1}
        </label>
        <input
          type="text"
          id={`developer${index}`}
          name={`developer${index}`}
          value={formData[`developer${index}`] || ''}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <label htmlFor={`year${index}`} className="block text-sm font-medium text-gray-700">
          Year {index + 1}
        </label>
        <input
          type="text"
          id={`year${index}`}
          name={`year${index}`}
          value={formData[`year${index}`] || ''}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="numGames" className="block text-sm font-medium text-gray-700">
          Number of Games <span className="text-red-500">*</span>
        </label>
        <select
          id="numGames"
          name="numGames"
          value={numGames}
          onChange={handleNumGamesChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {[...Array(20)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      {renderGameInputs()}
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Video Games
      </button>
    </form>
  );
};

export default VideoGameForm;
