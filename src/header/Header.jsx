import React from 'react';
import Nav from './Nav';
import ButtonNav from './ButtonNav';

export default function Header() {
  const [nav, setNav] = React.useState(false);

  return (
    <header>
      <div className="logo" />
      <ButtonNav nav={nav} setNav={setNav} />
      <Nav nav={nav} setNav={setNav} />
    </header>
  );
}
