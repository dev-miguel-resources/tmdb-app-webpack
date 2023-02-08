import { LogoContainer, LogoImg, LogoTitle } from "./StyledLogo";
import s from "./style.module.css";

// STATELESS / SIN ESTADO / SIN COMPORTAMIENTO PROPIO
const Logo = ({ title, image }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
  </div>
);

// STYLED-COMPONENTS
/*const Logo = ({ title, image }) => (
  <div>
    <LogoContainer>
      <LogoImg src={image} alt="logo" />
      <LogoTitle>{title}</LogoTitle>
    </LogoContainer>
  </div>
);*/

export default Logo;
