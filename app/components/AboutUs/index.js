import React from 'react';

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
            I'm an entrepreneur who initially came to Bozeman in 2018 for rock
            climbing and stayed for the building. I specialize in home remodels
            and in my free time I like to get out in nature and practice
            jiujitsu.
          </p>
        </div>
        {/* <ul className="list">
          <li>JOGeneral Contractor</li>
          <li>Project Management</li>
          <li>Construction Management</li>
          <li>Consistently exceeding our</li>
        </ul> */}
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
              Jeff Browning | Designer & Ultrarunning Coach
              <br />
              &quot;Elias was prompt, hard-working, and has a positive attitude.
              He made sure the job was done right. Good attention to detail. I'd
              definitely hire him again.&quot; <br />
            </p>
          </div>
          <div className="client-holder">
            <p className="font-size-lg">
              John Dolan | MA, DDS, MS
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
              Seth Bork | Project Management
              <br />
              &quot;Elias' work was quality, on time, on budget, and with a
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
