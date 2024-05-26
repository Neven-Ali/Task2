import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import FacebookButton from "../Components/FacebookButton";
import GoogleButton from "../Components/GoogleButton";
import AppleButton from "../Components/AppleButton";
import LoginImage from "../Assests/images/LoginImage.png";

const Login = () => {
  return (
    <div className="relative h-full bg-contain flex items-center justify-center">
      <div
        className="  absolute top-20 bg-contain bg-no-repeat flex items-center justify-center rounded-lg  w-[700px] h-[440px] "
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className="min-h-screen flex items-center justify-center ">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-8">
              تسجيل الدخول
            </h2>
            <Input title={"الايميل أو رقم الهاتف"} />
            <Input title={" كلمة المرور"} />
            <Button>تسجيل الدخول</Button>
            <form dir="rtl  ">
              <div className="text-center">
                <p className="text-gray-600">
                  ليس لديك حساب؟
                  <a href="/#" className="text-indigo-500 m-2">
                    إنشاء حساب
                  </a>
                  <a href="/#" className="text-indigo-500 m-2">
                    نسيت كلمة المرور
                  </a>
                </p>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-600">أو</p>
                <div className="flex justify-around items-center">
                  <GoogleButton />
                  <AppleButton />
                  <FacebookButton />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
