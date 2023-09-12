import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTags = links.map(elem => <a key={elem} href={`#${elem}`}>{elem}</a>);

  return (
    <nav>
      {aTags}
    </nav>
  );
}

export default NavBar;
