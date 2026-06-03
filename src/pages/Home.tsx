import React from "react";

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <main className="home">
      <section className="img-container-1">
        <div className="grid-1">
          <div className="text1">
            Create and share your photo Stories Photosnap is a platform for
            photographers and visual storytellers. We make it easy to share
            photos, tell stories and connect with others.
          </div>
          <div className="img1">
            <img
              src={`${baseUrl}/assets/home/desktop/create-and-share.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="grid-1 reverse">
          <div className="img1">
            <img
              src={`${baseUrl}/assets/home/desktop/beautiful-stories.jpg`}
              alt=""
            />
          </div>
          <div className="text1 ">
            Beautiful stories every time We provide design templates to ensure
            your stories look terrific. Easily add photos, text, embed maps and
            media from other networks. Then share your story with everyone.View
            the stories
          </div>
        </div>
        <div className="grid-1">
          <div className="text1">
            Designed for everyone Photosnap can help you create stories that
            resonate with your audience. Our tool is designed for photographers
            of all levels, brands, businesses you name it.View the stories
          </div>
          <div className="img1">
            <img
              src={`${baseUrl}/assets/home/desktop/designed-for-everyone.jpg`}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="img-container-2">
        <div className="grid-2">
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/mountains.jpg`} />
            <div className="text-con">
              The Mountains by John Appleseed Read Story
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/cityscapes.jpg`} />

            <div className="text-con">
              {" "}
              Sunset Cityscapes by Benjamin Cruz Read Story
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/18-days-voyage.jpg`} />
            <div className="text-con">
              18 Days Voyage by Alexei Borodin Read Story
            </div>
          </div>
          <div className="item">
            <img src={`${baseUrl}/assets/stories/desktop/architecturals.jpg`} />
            <div className="text-con">
              Architecturals by Samantha Brooke Read Story
            </div>
          </div>
        </div>
      </section>
      <section className="text-container-1">
        <div className="item">
          100% Responsive No matter which the device you’re on, our site is
          fully responsive and stories look beautiful on any screen.
        </div>
        <div className="item">
          No Photo Upload Limit Our tool has no limits on uploads or bandwidth.
          Freely upload in bulk and share all of your stories in one go.
        </div>
        <div className="item">
          Available to Embed Embed Tweets, Facebook posts, Instagram media,
          Vimeo or YouTube videos, Google Maps, and more.
        </div>
      </section>
    </main>
  );
}
