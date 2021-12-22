import React, { useState } from "react";

const App = () => {
  const comments = [
    {
      id: 0,
      title: "1",
      content: "Blah bloo blaah",
    },
    {
      id: 1,
      title: "2",
      content: "flapstain",
    },
    {
      id: 2,
      title: "3",
      content: "caroooo",
    },
    {
      id: 3,
      title: "4",
      content: "Blah bleep blaah",
    },
    {
      id: 4,
      title: "5",
      content: "Carpe diem",
    },
  ];

  const loading = false;
  const [showComments, setShowComments] = useState(false);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="container">
      <h1>Me list!</h1>
      <button
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        Show/hide comments
      </button>
      {showComments && (
        <div className="comments">
          <h2>{comments.length}</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.title}</h3>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
