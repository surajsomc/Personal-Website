import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #87cefa;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #191970;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const handleDownload = () => {
  window.open("https://github.com/surajsomc", "_blank");
};

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Thinking outside the box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>
            I am a creative developer with a passion for Frontend Development in addition to Artificial Intelligence.
            My love for these areas is evident in the level of dedication and attention to detail I bring to my work.
            I have a deep understanding of the principles and techniques involved in Frontend Development, and I am always looking for new and innovative ways to incorporate these skills into my projects.
            In addition to my expertise in Frontend Development, I have a particular interest in Artificial Intelligence.
            I am fascinated by the ways in which AI can be used to improve our lives, and I am always looking for opportunities to incorporate AI into my work.
            Whether I am working on a complex web application or building an intelligent chatbot, I am always looking for ways to leverage AI to create a better user experience.
          </Desc>
          <Button onClick={handleDownload}>See my work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
