import React from "react";

const Loisirs = () => {
  return (
    <div className="cv__loisirs">
      <h3>Intérêt</h3>
      <div className="cv__list">
        <ul>
          <li>
            <i class="fa-solid fa-leaf"></i>
            Nature
          </li>
          <li>
            <i class="fa-solid fa-earth-europe"></i>
            Ecologie
          </li>
          <li>
            <i class="fa-solid fa-utensils"></i>
            Cuisine
          </li>
          <li>
            <i class="fa-solid fa-dragon"></i>
            Animation Manga
          </li>
          <li>
            <i class="fa-solid fa-gamepad"></i>
            Jeux video
          </li>
          <li>
            <i class="fa-solid fa-film"></i>
            Montage video
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loisirs;
