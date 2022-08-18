import React from "react";
import Dish from "../dish/Dish";
import "./menu.css";
import img7 from "../../img/img7.jpg";
import img6 from "../../img/img6.jpg";
import img5 from "../../img/img5.jpg";
import img4 from "../../img/img4.jpg";

const Menu = () => {
  const menuData = [
    {
      title: "PEAR SALAD / $11",
      text: `Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette        `,
    },
    {
      title: "BRODETTO DI PESCE / $9",
      text: `
      Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine Scallop / Celery / Olive `,
    },
    {
      title: "FARM GREENS / $9",
      text: `
      Honey Vinaigrette / House Cheese Crouton / Fine Herbs/ Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette `,
    },
    {
      title: "PEAR SALAD / $11",
      text: `Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette        `,
    },
    {
      title: "GRILLED KALE / $9",
      text: ` Bitter Greens / House Cheese Crouton / Kamon Iberico/ Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette`,
    },
    {
      title: "FARM GREENS / $9",
      text: ` Honey Vinaigrette / House Cheese Crouton / Fine Herbs / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette`,
    },
  ];

  return (
    <section className="menu">
      <h3>OUR MENU</h3>
      <h1>Delicious From The Chef</h1>
      <div className="menu-main">
        {menuData.map((menu) => (
          <Dish data={menu} />
        ))}
      </div>
      <div className="menu-img">
        <div className="menu-img-left">
          <img src={img6} alt="dish" />
        </div>
        <div className="menu-img-right">
          <img src={img4} alt="dish" />
          <div className="right-img-divider">
            <img src={img7} alt="dish" />
            <img src={img5} alt="dish" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
