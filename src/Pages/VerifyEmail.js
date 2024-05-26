import React from "react";
import Button from "../Components/Button";
import CodeEmail from "../Components/CodeEmail";
import LoginImage from "../Assests/images/LoginImage.png";

export default function VerifyEmail() {
  return (
    <div className=" translate-x-32 ">
      <div className="relative h-full bg-contain flex items-center justify-center">
        <div
          className="  absolute top-20 bg-contain bg-no-repeat flex items-center justify-center rounded-lg  w-[1000px] h-[440px] "
          style={{ backgroundImage: `url(${LoginImage})` }}
        ></div>

        <div className="absolute top-20  bg-primary-white-l  px-14 py-8 rounded-lg w-[450px] h-[440px]">
          <h2 className=" text-primary-blue-dark text-center text-2xl font-bold  ">
            RED مرحباً بك
          </h2>
          <div className="my-9 flex justify-around text-sm">
            :لقد تم إرسال رمز التأكيد إلى (red1234@gmail.com)
          </div>
          <CodeEmail />
          <Button>تأكيد</Button>
          <div className="my-9 flex justify-around text-sm">
            إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد 4:20 د
          </div>
          <Button>إعادة الإرسال</Button>
        </div>
      </div>
    </div>
  );
}
