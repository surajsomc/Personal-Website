import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  text-decoration: none;
  color: inherit;

  @media only screen and (max-width: 768px) {
    display: none;
    text-decoration: none;
    color: inherit;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #191970;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// New styled-component for the anchor tag
const Link = styled.a.attrs({
  className: "link",
  children: props => props.children
})`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const openGithub = () => {
  window.open("https://github.com/surajsomc", "_blank");
};
const handleDownload = () => {
  window.open("https://github.com/surajsomc", "_blank");
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            {/* Wrap the "Works" text with an anchor tag */}
            <ListItem onClick={openGithub}>
                Works
            </ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Button>Contact Me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
