import React from "react";

export default function Stories() {
  const baseUrl = import.meta.env.BASE_URL;
  console.log(baseUrl);
  return (
    <main>
      <section className="img-container-3">
        <div className="grid-3">
          <div className="img-item">
            <img
              src={`${baseUrl}/assets/stories/desktop/moon-of-appalacia.jpg`}
              alt=""
            />
          </div>
          <div className="text-abs2">
            <strong>Last month's featured story</strong>
            <h1>Hazy full moon of Appalachia</h1>
            <p>
              March 2nd 2020 <span> by John Appleseed </span>
            </p>
            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <a
              href="
            "
            >
              Read the story
              <img src={`${baseUrl}/assets/shared/desktop/arrow.svg`} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/mountains.jpg`} />
            <div className="text-abs">
              <h4>The Mountains</h4>
              <p>by John Appleseed</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/cityscapes.jpg`} />

            <div className="text-abs">
              {" "}
              <h4>Sunset Cityscapes</h4>
              <p>by Benjamin Cruz</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/18-days-voyage.jpg`} />
            <div className="text-abs">
              <h4>18 Days Voyage</h4>
              <p>by Alexei Borodin</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/architecturals.jpg`} />
            <div className="text-abs">
              <h4>Architecturals</h4>
              <p>by Samantha Brooke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/world-tour.jpg`} />
            <div className="text-abs">
              <p>April 7th 2020</p>
              <h4>World Tour 2019</h4>
              <p>by Timothy Wagner</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/unforeseen-corners.jpg`}
            />

            <div className="text-abs">
              {" "}
              <p>April 3rd 2020</p>
              <h4>Unforeseen Corners</h4>
              <p>by William Malcolm Read Story</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/king-on-africa.jpg`} />
            <div className="text-abs">
              <p>March 29th 2020</p>
              <h4>King on Africa: Part II</h4>
              <p>by Tim Hillenburg</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img
              src={`${baseUrl}/assets/stories/desktop/trip-to-nowhere.jpg`}
            />
            <div className="text-abs">
              <p>March 21st 2020</p>
              <h4>The Trip to Nowhere</h4>
              <p>by Felicia Rourke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/mountains.jpg`} />
            <div className="text-abs">
              <h4>The Mountains</h4>
              <p>by John Appleseed</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/cityscapes.jpg`} />

            <div className="text-abs">
              {" "}
              <h4>Sunset Cityscapes</h4>
              <p>by Benjamin Cruz</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/18-days-voyage.jpg`} />
            <div className="text-abs">
              <h4>18 Days Voyage</h4>
              <p>by Alexei Borodin</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/architecturals.jpg`} />
            <div className="text-abs">
              <h4>Architecturals</h4>
              <p>by Samantha Brooke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/mountains.jpg`} />
            <div className="text-abs">
              <h4>The Mountains</h4>
              <p>by John Appleseed</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/cityscapes.jpg`} />

            <div className="text-abs">
              {" "}
              <h4>Sunset Cityscapes</h4>
              <p>by Benjamin Cruz</p>
              <div className="border"></div>
              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/18-days-voyage.jpg`} />
            <div className="text-abs">
              <h4>18 Days Voyage</h4>
              <p>by Alexei Borodin</p>
              <div className="border"></div>

              <a href="">
                {" "}
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/architecturals.jpg`} />
            <div className="text-abs">
              <h4>Architecturals</h4>
              <p>by Samantha Brooke</p>
              <div className="border"></div>

              <a href="">
                Read Story
                <img
                  src={`${baseUrl}/assets/shared/desktop/arrow.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
