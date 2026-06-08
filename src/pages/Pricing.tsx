import React from "react";

export default function Pricing() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <main>
      <section className="img-container-4">
        <div className="grid-4">
          <div className="item">
            <div className="text">
              <h1> Pricing</h1>
              <p>
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
          <div className="item-img p">
            <img src={`${baseUrl}/assets/pricing/desktop/hero.jpg`} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
