import Canvas from "@/components/Canvas";
import React from "react";

const canvas = () => {
  const canvasData = [
    {
      canvas: "basetitle Day in London",
      title: "title 1",
      description: "description 1",
      img: "/assets/istock.jpg",
    },
    {
      canvas: "data 2",
      title: "title 2",
      description: "description 2",
      img: "/assets/istock1.jpg",
    },
    {
      canvas: "data 3",
      title: "title 3",
      description: "description 3",
      img: "/assets/istock.jpg",
    },
    {
      canvas: "data 4",
      title: "title 4",
      description: "description 4",
      img: "/assets/istock3.jpg",
    },
    {
      canvas: "things to do in London",
      title: "title 5",
      description: "description 5",
      img: "/assets/istock2.jpg",
    },
  ];
  return (
    <div>
      <p>Rhis is canvas</p>
      <Canvas data={canvasData} />
    </div>
  );
};

export default canvas;
