import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p className="text-green-600">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Provide your feedback here..."
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 w-full bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
