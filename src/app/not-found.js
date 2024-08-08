import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Page is Not Found</h1>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
