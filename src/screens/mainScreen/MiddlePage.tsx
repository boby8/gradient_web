import "../styles.css";
import data from "../../assets/Union.png";
import Circle from "../../assets/Circle.png";

const MiddlePage = () => {
  interface brandIdentityArray {
    id: number;
    description: string;
  }

  const brandIdentityArray: brandIdentityArray[] = [
    {
      id: 1,
      description:
        "We create unique brand identities that resonate with your target audience and help you stand out in a crowded marketplace.",
    },
    {
      id: 2,
      description:
        "Our team of experts specializes in crafting distinctive brand identities that make a lasting impact on your audience.",
    },
    {
      id: 3,
      description:
        "With a focus on creativity and innovation, we design brand identities that tell your unique story and capture attention.",
    },
    {
      id: 4,
      description:
        "Let us help you define your brand with a powerful and memorable identity that sets you apart from the competition.",
    },
  ];

  return (
    <div className="middleContainer">
      <div style={{ display: "flex", alignItems: "end", gap: 20 }}>
        <div className="firstWrapper">
          <div className="discription">
            <p className="textWithGradient" style={{ fontSize: 12 }}>
              London 2006
            </p>
            <div>
              <p>
                Our creative design bureau is based in the heart of London and
                <br />
                specializes in digital branding, website design, and influence
                marketing.
              </p>

              <p>
                We believe in the power of digital media to transform businesses
                and
                <br />
                connect them with their audiences in meaningful ways.
              </p>
            </div>
          </div>
          <div style={{}}>
            <p className="textWithGradient" style={{ fontSize: 54 }}>
              We turn your digital
              <br /> dreams into reality
            </p>
            <p className="textWithGradient" style={{ fontSize: 48 }}>
              ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
            </p>
          </div>
          <div className="discription">
            <img src={data} alt="" />
            <div>
              <p>
                Our team of experienced designers and marketing professionals
                work <br /> closely with each client to understand their unique
                vision and develop <br />
                tailored solutions that align with their goals.
              </p>

              <p>
                From designing eye-catching logos and brand identities, to
                building <br /> custom websites that engage and convert
                visitors, to crafting effective <br /> influencer marketing
                campaigns, we are dedicated to helping our clients <br />{" "}
                succeed in the digital space.
              </p>
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="block">
            <img src={Circle} alt="" />
            <p className="textWithGradient" style={{ fontSize: 12 }}>
              Since 2006
            </p>
          </div>
        </div>
      </div>
      <div className="listWrapper">
        {brandIdentityArray.map((res, index) => (
          <div style={{ background: "", width: "50%" }}>
            <div className="listDiscription ">
              <p className="listNumber">{res.id}</p>
              <p className="listText">{res.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="clientsWrapper">
        <div className="helpingContainer">
          <p className="textWithGradient" style={{ fontSize: 48 }}>
            ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
          </p>
          <p className="textWithGradient" style={{ fontSize: 54 }}>
            Help our clients achive <br /> their business objectives
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
