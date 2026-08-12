import React from 'react';

/**
 * Sahulatcart Logo with gradient wordmark.
 * "Sahulat" — horizontal gradient: slate gray-blue (#6D7486) → charcoal navy (#0A0D13 @ 70%)
 * "cart" — vertical gradient: medium green (#268D3C) → forest green (#113320) → mint green (#C2FFB4)
 */
const Logo = ({ className = '' }) => (
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
    className={`flex items-center gap-2 ${className}`}
  >
    <img src="/logo.png" alt="Sahulatcart" className="h-8 w-auto" />
    <svg
      viewBox="0 0 210 40"
      className="h-6 w-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sahulatcart"
    >
      <defs>
        {/* "Sahulat" horizontal gradient: slate → charcoal navy */}
        <linearGradient id="sahulat-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#6D7486" />
          <stop offset="100%" stopColor="#0A0D13" stopOpacity="0.7" />
        </linearGradient>
        {/* "cart" vertical gradient: green → forest → mint */}
        <linearGradient id="cart-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#268D3C" />
          <stop offset="50%" stopColor="#113320" />
          <stop offset="100%" stopColor="#C2FFB4" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="30"
        fontFamily="'Kaisei Decol', serif"
        fontWeight="700"
        fontSize="32"
        fill="url(#sahulat-grad)"
      >
        Sahulat
      </text>
      <text
        x="120"
        y="30"
        fontFamily="'Kaisei Decol', serif"
        fontWeight="700"
        fontSize="32"
        fill="url(#cart-grad)"
      >
        cart
      </text>
    </svg>
  </a>
);

export default Logo;
