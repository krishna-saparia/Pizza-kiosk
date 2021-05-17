import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
} from "./FooterElement";
import { FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo
                to="Hero"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={10}
              >
                Pizza
              </SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
