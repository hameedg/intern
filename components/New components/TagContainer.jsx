import React from "react";
import Tag from "./Tag";

const TagContainer = () => {
  return (
    <>
      <div className="w-[700px] flex flex-wrap gap-[14px] md:w-[100%]">
        <Tag name="Next.js" />
        <Tag name="Tailwind CSS" />
        <Tag name="Typescript" />
        <Tag name="Node.js" />
        <Tag name="AWS" />

        <Tag name="React Native" />
        <Tag name="Flutter" />
        <Tag name="Kotlin" />
        <Tag name="Python" />
        <Tag name="Golang" />
        <Tag name="Figma" />
        <Tag name="Market Research" />
        <Tag name="UX Research" />
        <Tag name="Digital Illustrations" />
        <Tag name="Sales" />
        <Tag name="Adobe Illustrator" />
        <Tag name="Talent Sourcing" />
        <Tag name="Tech Recruiting" />
        <Tag name="Growth Hacking" />
        <Tag name="Creative Writing" />
      </div>
    </>
  );
};

export default TagContainer;
