import React from "react";
import { rubik400, rubik500 } from "../../assets/fonts";
import Image from "next/image";

const ProfileCard = ({ user, index }) => {
  return (
    <div
      className="w-96 hover:border-bgRed border-2 rounded-lg p-5 min-h-52 min-w-96 mr-5"
      key={index}
    >
      <div className="flexBetween">
        <div className="flexBetween">
          <Image src={user?.imageUri} width={50} height={50} alt="" />
          <div className="ml-3">
            <p className={`${rubik500.className} text-lg text-textBlack`}>
              {user?.name}
            </p>
            <p className={`${rubik400.className} text-sm text-textGrey`}>
              {user?.location}
            </p>
          </div>
        </div>
        <div className="flexBetween">
          <p className={`${rubik400.className} text-textBlack text-base mr-3`}>
            {user?.rating}
          </p>
          <Image src="/ant-design_star-filled.svg" width={16} height={16} />
        </div>
      </div>
      <p className={`${rubik400.className} text-base text-textBlack mt-5`}>
        {user?.review}
      </p>
    </div>
  );
};

export default ProfileCard;
