import { useState } from "react";

export default function Pricing() {
  type subsription = "basic" | "pro" | "business";
  const baseUrl = import.meta.env.BASE_URL;
  const [plan, setPlan] = useState<boolean>(false);
  const [choosen, setChoosen] = useState<subsription>("pro");

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
        <div className="subscriptions">
          <div className={`item ${choosen === "basic" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Basic</h3>
                <p>
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "190" : "19"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"} </span>
              </div>
            </div>
            <button
              onClick={() => {
                setChoosen("basic");
              }}
            >
              Pick Plan
            </button>
          </div>
          <div className={`item ${choosen === "pro" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Pro</h3>
                <p>
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "390" : "39"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setChoosen("pro");
              }}
            >
              Pick Plan
            </button>
          </div>
          <div className={`item ${choosen === "business" ? "active" : ""}`}>
            <div className="devision">
              <div className="left">
                <h3>Business</h3>
                <p>
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="right">
                <span className="price">${plan ? "990" : "99"}</span>
                <span className="per">{plan ? "Per Year" : "Per Month"}</span>
              </div>
            </div>
            <button onClick={() => setChoosen("business")}>Pick Plan</button>
          </div>
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
