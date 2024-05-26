import React from "react";
import Button from "../Components/Button";
import LoginImage from "../Assests/images/LoginImage.png";

const Logout = () => {
  return (
   
    <div className="relative h-full bg-contain flex items-center justify-center">
      <div
        className="  absolute top-40 bg-contain bg-no-repeat flex items-center justify-center rounded-lg  w-[600px] h-[255px] "
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className=" flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-8">
              هل أنت متأكد من تسجيل الخروج
            </h2>

            <form>
              <div>
                <Button>تأكيد</Button>
                <Button>تراجع</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
