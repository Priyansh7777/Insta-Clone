import React from "react";

function Explore() {
  const dataSet = [
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=nshyjApIovo",
      height: 350,
    },
    {
      id: 2,
      link: "https://www.youtube.com/watch?v=oZH70U5t55M",
      height: 350,
    },
    {
      id: 3,
      link: "https://www.youtube.com/shorts/qQcV63EMSHE",
      height: 350,
    },
    {
      id: 4,
      link: "https://www.youtube.com/shorts/n48UGPGhPsE",
      height: 350,
    },
    {
      id: 5,
      link: "https://www.youtube.com/shorts/ALa1KeH_g6U",
      height: 350,
    },
    {
      id: 6,
      link: "https://www.youtube.com/shorts/CoK_Kzq9Fkk",
      height: 350,
    },
    {
      id: 7,
      link: "https://www.youtube.com/shorts/sXblhJTopSE",
      height: 350,
    },
    {
      id: 8,
      link: "https://www.youtube.com/shorts/FNXxqlTQXio",
      height: 350,
    },
    {
      id: 9,
      link: "https://www.youtube.com/shorts/wknZ7W6wjaY",
      height: 350,
    },
    {
      id: 10,
      link: "https://www.youtube.com/shorts/1Kb0gYuSwTs",
      height: 350,
    },
    {
      id: 11,
      link: "https://www.youtube.com/shorts/ALa1KeH_g6U",
      height: 350,
    },
    {
      id: 12,
      link: "https://www.youtube.com/shorts/1Kb0gYuSwTs",
      height: 350,
    },
  ];
  return (
    <div className="p-2 bgcolor-white border-radius-1">
      <p className="font-size font bold">Explore</p>
      <div className="grid-masnaory">
        {dataSet?.map((item) => (
          <video
            className="grid-element"
            width="320"
            height={item.height}
            controls
            
          >

            <source src="https://www.youtube.com/watch?v=4ILzJGtw9sA" type="video/youtube" />

            <a href="https://www.youtube.com/watch?v=4ILzJGtw9sA">WEBM</a>
          </video>
        ))}
      </div>
    </div>
  );
}

export default Explore;
