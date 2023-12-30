import React from "react";
import Image from "next/image";

// Components
import Button from "./Button";
import Link from "next/link";

const TeamCard = ({ className = "", image, name, bio, skills, socials }) => {
  return (
    <div
      className={`${className} bg-[#EBEBEB] p-[12px] rounded-[20px] flex flex-col`}
    >
      <div className="relative w-full h-[20vw] rounded-[12px] overflow-hidden">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="mt-[24px] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((label, i) => (
              <p
                key={i}
                className="w-fit bg-white text-black rounded-[8px] px-[8px] py-[6px] text-[14px]"
              >
                {label}
              </p>
            ))}
          </div>
          {bio && <p className="mt-[16px] text-[14px] text-black">{bio}</p>}
        </div>
        <div className="mt-[16px] grid grid-cols-2 gap-[16px]">
          {socials.map((s, i) => (
            <Link key={i} href={s.url} target="_blank">
              <Button variant={s.theme} size="small">
                {s.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
