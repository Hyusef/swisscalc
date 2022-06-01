import Navbar from "./Navbar";
import styled from "styled-components";
import Particles from "react-tsparticles";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #e74d4d, #8c000c);
  background-size: 200% 100%;
  animation: gradient 30s alternate infinite;
  height: 80vh;
  width: 100%;
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
 }
.particles{
  top:10%;
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height:70vh;
  z-index: 10;
}
}
`;



const Headers = styled.h1`
  font-size: 4rem;
  color: white;w
  font-family: "Source Serif Pro", serif;
  @media screen and (max-width: 925px) {
  font-size:3.5rem;
  }
  @media screen and (max-width: 809px) {
    font-size:2.7rem;
    }
  
`;

const HeadersContainer = styled.div`
  margin-top: 10%;
  @media screen and (max-width: 925px) {
    margin-top:25%;
    }
  
  p {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 300;
    font-family: "Source Serif Pro", serif;
    text-align: center;
    @media screen and (max-width: 925px) {
      font-size:1.3rem;
      }
    
  }
`;

/*"../Assets/Images/swisscalcLogo.png" */

function Header() {
  return (

    <HeaderContainer>
          <Particles
          className="particles"
          
            params={
              {fullScreen: {
                enable: false,zIndex:0
              },
              fpsLimit: 60,
              particles: {
                links: {
                  color: "white",
                  distance: 150,
                  enable: false,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  attract: { enable: false, rotateX: 600, rotateY: 1200 },
                  bounce: true,
                  direction: "none",
                  enable: true,
                  out_mode: "out",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 8 },
                shape: {
                  character: [
                    {
                      fill: true,
                      font: "Verdana",
                      value: ["✙"],
                      style: "",
                      weight: 400,
                    },
                  ],
                  stroke: { color: "white", width: 1 },
                  type: "char",
                },
                size: {
                  anim: { enable: true, minimumValue: 8, speed: 10, sync: false },
                  random: { minimumValue: 8, enable: true },
                  value: 32,
                },
              },
              detectRetina: true,
            }}
          />
      <Navbar />
      <HeadersContainer>
        <Headers>Multi-purpose Swiss Calculator</Headers>
        <p>Just like the Swiss knife, the Swisscalc™ is a powerful tool.</p>
      </HeadersContainer>
    </HeaderContainer>


  );
}
export default Header;
