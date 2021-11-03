import React from 'react';

// eslint-disable-next-line react/prop-types
const AboutUs = ({ data }) => (
  <>
    <section className="about" id="about">
      <div
        className="img-section"
        style={{
          backgroundImage: `url(${data &&
            data.aboutMeImage &&
            data.aboutMeImage.fields &&
            data.aboutMeImage.fields.file.url})`,
        }}
      />
      <div className="content">
        <h2 className="icon-heading">
          <span className="box bg-primary" />
          <span className="heading text-primary">
            {data && data.aboutMeText}
          </span>
        </h2>
        <div className="title">
          <h3>Elias Uribe</h3>
          <p className="m-lg-0 font-size-lg">
            I&#39;m a young entreprenuer who came to Bozeman Initially for rock
            climbing and outdoor scene. In 2020 I formulated my LLC and now have
            4 employees who help me serve Bozeman and the greater areas. In my
            free time you can find me on the ski slopes or practicing jiujitsu.
          </p>
        </div>
      </div>
    </section>
    <section className="clients">
      <div className="content">
        <div className="text-center">
          <h2 className="icon-heading">
            <span className="box bg-primary" />
            <span className="heading text-primary">
              {data && data.whatMyClientsSay}
            </span>
          </h2>
        </div>
        <div className="clients-container">
          <div className="client-holder">
            <p className="font-size-lg">
              <span className="bold">
                Jeff Browning | Designer & Ultrarunning Coach{' '}
              </span>
              <br />
              &quot;Elias was prompt, hard-working, and has a positive attitude.
              He made sure the job was done right. Good attention to detail.
              I&#39;d definitely hire him again.&quot; <br />
            </p>
          </div>
          <div className="client-holder">
            <p className="font-size-lg">
              <span className="bold">John Dolan | MA, DDS, MS </span>
              <br />
              &quot;Elias Uribe has worked on several projects for me over the
              last three years on property in Cottonwood Canyon south of
              Bozeman. Elias is profoundly thoughtful in his work. I have never
              hired or worked with a professional who is equally dedicated,
              skilled and tireless. Elias will bring insight and problem-solving
              skills to your project. You will find that he is personable with
              clients and colleagues alike. I can’t recommend Elias highly
              enough and I look forward to hiring him on my upcoming
              architectural projects. There is no one I would rather have on my
              team.&quot;
            </p>
          </div>
          <div className="client-holder">
            <p className="font-size-lg">
              <span className="bold">Seth Bork | Project Management </span>
              <br />
              &quot;Elias&#39;s work was quality, on time, on budget, and with a
              great attitude. I will work with Elias again!&quot;
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="img-section" />
    </section>
  </>
);

export default AboutUs;
