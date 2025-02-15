import React from 'react';

const AssignmentPage = () => {
  return (
    <div>
      <h1>This is the page for a singular assignment!</h1>

      <h2>Select Assignment</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <h2>Upload File</h2>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
    </div>
  );
};

export default AssignmentPage;
