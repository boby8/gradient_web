import "../styles.css";
import data from "../../assets/Union.png";
import Circle from "../../assets/Circle.png";
import img1 from "../../assets/Group1.png";
import img2 from "../../assets/Group2.png";
import img3 from "../../assets/Group3.png";
import star from "../../assets/Star1.png";

const MiddlePage = () => {
  interface brandIdentityArray {
    id: number;
    description: string;
  }

  interface marketingList {
    imgurl: string;
    description: string;
    title: string;
  }

  const marketingList: marketingList[] = [
    {
      imgurl: img1,
      description:
        "Our team of experts specializes in creating unique and effective designs ",
      title: "Branding",
    },
    {
      imgurl: img2,
      description:
        "Innovative and effective design solutions for business of our clients",
      title: "Design",
    },
    {
      imgurl: img3,
      description:
        "Our team of experienced designers and marketing professionals work closely ",
      title: "Marketing",
    },
  ];

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="textWithGradient" style={{ fontSize: 12 }}>
              Since 2006
            </p>
          </div>
          <div>
            <p>
              Influenzilla is a leading design and marketing agency that
              <br />
              offers creative solutions to businesses of all sizes. Our team
              <br />
              of experts specializes in creating unique and effective designs
              <br />
              that help our clients stand out in a crowded market.
              <br />
            </p>

            <p>
              Our mission is to help our clients achieve their business
              <br />
              objectives through innovative and effective design solutions.
              <br /> We believe that great design is more than just aesthetics.
              It's
              <br />
              about creating a seamless user experience that engages and
              <br />
              delights your audience.
            </p>
          </div>
          <div>
            <p>
              Influenzilla is a leading design and marketing agency that
              <br />
              offers creative solutions to businesses of all sizes. Our team
              <br />
              of experts specializes in creating unique and effective designs
              <br />
              that help our clients stand out in a crowded market.
              <br />
            </p>

            <p>
              Our mission is to help our clients achieve their business
              <br />
              objectives through innovative and effective design solutions.
              <br /> We believe that great design is more than just aesthetics.
              It's
              <br />
              about creating a seamless user experience that engages and
              <br />
              delights your audience.
            </p>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: 'space-between', marginTop: "50px" }}
        >
          <div>
            <img src={star} />
          </div>
          <div
          style={{ display: "flex", justifyContent: "end", marginTop: "50px" }}
        >
          {marketingList.map((res, index) => (
            <div
              key={res.title}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #ffffff ",
                width: "30%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ 
                  borderBottom: "1px solid #ffffff",
                   padding: "10px", 
                   height:"145px",
                   display: "flex",
                   justifyContent: "flex-start",
                   alignItems: "center",
                   paddingLeft: "51px",
                  }}
              >
                <img src={res.imgurl} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  // alignItems: "center",
                  flexDirection: "column",
                  padding: "36px 0 47px 51px",
                }}
              >
                <p className="textWithGradient">{res.title}</p>
                <p style={{
                   fontSize: 12, 
                  //  textAlign: "center", 
                  margin: "0px",
                   width: "50%" }}>
                  {res.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
