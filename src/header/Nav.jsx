import React from 'react';

export default function Nav({ nav, setNav }) {
  if (nav) {
    return (
      <nav>
        <button
          onClick={() => setNav(false)}
          className="buttonNav buttonNavClose"
        >
          x
        </button>
        <ul>
          <a href="">
            <li>ESTOQUE</li>
          </a>
          <a href="">
            <li>ENCOMENDA</li>
          </a>
        </ul>
      </nav>
    );
  }
  return null;
}
