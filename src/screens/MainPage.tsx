import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import "./styles.css";
import MiddlePage from "./mainScreen/MiddlePage";

const Header: React.FC = () => {
  interface list {
    name: string;
  }

  const list: list[] = [
    { name: "About" },
    { name: "About" },
    { name: "About" },
    { name: "About" },
    { name: "About" },
  ];
  const headerBottom: list[] = [
    { name: "digital branding" },
    { name: "influence marketing" },
    { name: "content creation" },
    { name: "design" },
  ];
  return (
    <>
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "24%",
            border: "1px solid #ffffff",
            alignItems: "center",
            gap: 30,
            padding: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <LanguageIcon />
            <p>Influenzilla</p>
          </div>

          <p>bespoke design and marketing services</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {list.map((res, index) => (
              <p
                style={{
                  padding: "23px",
                  border: "1px solid #ffffff",
                  width: "18%",
                  marginTop: 0,
                  marginBottom: 0,
                  textAlign: "center",
                }}
                key={index}
              >
                {res.name}
              </p>
            ))}
            {/* <p style={{ padding: "10px", border: "1px solid #ffffff" }}>
              <LanguageIcon />
            </p> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {list.map((res, index) => (
              <p
                style={{
                  padding: "23px",
                  border: "1px solid #ffffff",
                  width: "18%",
                  marginTop: 0,
                  marginBottom: 0,
                  textAlign: "center",
                }}
                key={index}
              >
                {res.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* second <section></section>   radial-gradient(black, transparent)*/}

      <div className="bannerCenter">
        <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
          <p className="textWithGradient" style={{ fontSize: 27 }}>
            2023
          </p>
          <p className="textWithGradient" style={{ fontSize: 12 }}>
            hi there, <br />
            let's get started!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "end" }}>
            <p className="textWithGradient" style={{ fontSize: 54, margin: 0 }}>
              Influence your <br />
              audience
            </p>
            <p className="">
              boost your brand with our <br /> marketing expertise
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              <LanguageIcon />
            </p>
            <p className="textWithGradient" style={{ fontSize: 14 }}>
              We believe in the power of digital
              <br /> media to transform businesses and
              <br />
              connect them with their audiences
              <br /> in meaningful ways.
            </p>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="headerBottom">
        {headerBottom.map((res, index) => (
          <p
            className="textWithGradient"
            style={{
              fontSize: 15,
              padding: 15,
              borderBottom: "2px solid #ffffff",
            }}
            key={index}
          >
            {res.name}
          </p>
        ))}
      </div>
    </div>
          <MiddlePage />
</>
  );
};

export default Header;
