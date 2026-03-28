import React from "react";

const Avely = () => {
  return (
    <section className="container-wrapper h-[900px]">
      <iframe
        src="https://avely.me/eyexo"
        title="Avely Bento Grid"
        width="100%"
        height="100%"
        /* The 'dark:invert' class below will flip the colors 
           of the iframe when your site enters Dark Mode.
           'dark:hue-rotate-180' keeps the colors from looking "weird".
        */
        className="rounded-xl border-none transition-all duration-300 invert hue-rotate-180"
        allow="payment; clipboard-write"
      ></iframe>
    </section>
  );
};

export default Avely;