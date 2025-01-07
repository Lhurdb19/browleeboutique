import React from 'react'

function Blogdate() {
    const blogDate = new Date("2024-01-06T02:58:00");
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = blogDate.toLocaleDateString('en-GB', options).replace(',', ' at');
  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  )
}

export default Blogdate;
