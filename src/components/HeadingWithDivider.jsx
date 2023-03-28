import React from 'react';

function HeadingWithDivider({ label }) {
  return (
    <>
      <h2 className="font-semibold">{label}</h2>
      <hr />
    </>
  );
}

export default HeadingWithDivider;
