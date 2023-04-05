import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 230px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      When I'm creating graphic illustrations, I lose myself in the process and become fully immersed in the design.
      I enjoy exploring various color palettes, experimenting with different textures and styles, and playing with typography to create unique and impactful designs.
      To me, each project is an opportunity to learn and grow, to push my creative boundaries and come up with something new and exciting.
      </Desc>
    </>
  );
};

export default ProductDesign;
