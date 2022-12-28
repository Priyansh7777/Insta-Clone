import React from "react";
import StoryCircleIcon from "../../components/StoryCircleIcon";
import Carousel from "react-elastic-carousel";
import PostCard from "../../components/cards/PostCard";
function Dashboard() {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 420, itemsToShow: 2 },
  //   { width: 550, itemsToShow: 3 },
  //   { width: 780, itemsToShow: 4 },
  //   { width: 1000,itemsToShow: 5}
  // ];
  const dataSet=[
    {
      name:"Rohan"
    },
    {
      name:"Suresh"
    },
    {
      name:"John"
    },
    {
      name:"Soniya"
    },
    {
      name:"Shanaya"
    },
    {
      name:"Natasha"
    },
    {
      name:"Peter"
    },
    {
      name:"Robert"
    },
    {
      name:"Andrew"
    },
    {
      name:"Simon"
    },
    {
      name:"Rohan"
    },
    {
      name:"Suresh"
    },
    {
      name:"John"
    },
    {
      name:"Soniya"
    },
    {
      name:"Shanaya"
    },
    {
      name:"Natasha"
    }

  ];
  const postDataSet=[];
  return (
    <div className="mt-1">
      <div className="display-flex gap bgcolor-white p-2 border-radius-1" style={{width:"65rem"}}>
        <Carousel itemsToShow={7}>
         {
          dataSet?.map((item)=>(
            <StoryCircleIcon name={item.name}/>
          ))
         }
        </Carousel>
      </div>
      <div className="display-flex-column gap mt-1 p-2 bgcolor-white align-items-center">
        <PostCard name="Rohan" postTitle="React Freek" postImage="/logo192.png"/>
        <PostCard name="John" postTitle="Good One" postImage="/like-1.png"/>
        <PostCard name="Rohan" postTitle="React Freek" postImage="/logo192.png"/>
        <PostCard name="John" postTitle="Good One" postImage="/like-1.png"/>
        <PostCard name="Rohan" postTitle="React Freek" postImage="/logo192.png"/>
        <PostCard name="John" postTitle="Good One" postImage="/like-1.png"/>
        <PostCard name="Rohan" postTitle="React Freek" postImage="/logo192.png"/>
        <PostCard name="John" postTitle="Good One" postImage="/like-1.png"/>
      </div>

    </div>
  );
}

export default Dashboard;
