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
            <img
              src={`${baseUrl}/assets/pricing/desktop/hero.jpg`}
              alt="hero"
            />
          </div>
        </div>
      </section>
      <section className="plan-container">
        <div className="plan-btn">
          <span className={`monthly ${plan ? "" : "active"}`}>Monthly</span>
          <div className={`checkbox-container ${plan ? "active" : ""}`}>
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
              type="button"
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
              type="button"
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
            <button type="button" onClick={() => setChoosen("business")}>
              Pick Plan
            </button>
          </div>
        </div>
      </section>
      <section className="table">
        <h3>Compare</h3>

        <table>
          <tr className="head">
            <th>The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
          <tr>
            <td>Unlimited Story Posting</td>
            <td>
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Unlimited Photo Upload</td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Embedding Custom Content</td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Customize Metadata</td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Advanced Metrics</td>
            <td></td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Photo Downloads</td>
            <td></td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>SEARCH ENGINE INDEXING</td>
            <td></td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
          <tr>
            <td>Custom Analytics</td>
            <td></td>
            <td></td>
            <td>
              {" "}
              <img src={`${baseUrl}/assets/pricing/desktop/check.svg`} alt="" />
            </td>
          </tr>
        </table>
      </section>
    </main>
  );
}
