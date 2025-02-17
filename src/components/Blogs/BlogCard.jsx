import React from "react";

const BlogCard = ({ image, title, description, textAlign = "left" }) => {
  return (
    <div className={`flex flex-col items-center gap-6 text-${textAlign} w-full rounded-xl shadow-lg p-6 sm:p-8 md:p-10`}>
      {/* Blog Image */}
      <img
        src={image}
        alt={title}
        className="object-cover rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/4 h-72"
      />
      
      {/* Blog Text */}
      <div className="w-full md:w-4/5 lg:w-3/4">
        <h2 className="text-3xl font-semibold mt-4">{title}</h2>
        <p className="text-lg mt-3 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;