import React from "react";

export default function Pricing() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <main>
      <section className="img-container-3">
        <div className="grid-3">
          <div className="img-item">
            <img src={`${baseUrl}/assets/pricing/desktop/basic.jpg`} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
