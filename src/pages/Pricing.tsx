import { useState } from "react";

export default function Pricing() {
  // type Plan = "monthly" | "yearly";
  const baseUrl = import.meta.env.BASE_URL;
  const [plan, setPlan] = useState<boolean>(false);

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
      <section className="plan-container">
        <div className="plan-btn">
          <span className={`monthly ${plan ? "" : "active"}`}>Monthly</span>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={plan}
              onChange={() => setPlan((prev) => !prev)}
            />
            <span className="checkmark"></span>
          </div>
          <span className={`monthly ${plan ? "active" : ""}`}>Yearly</span>
        </div>
      </section>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </main>
  );
}
