import React from "react";
import Button from "../Components/Button";
import FacebookButton from "../Components/FacebookButton";
import GoogleButton from "../Components/GoogleButton";
import AppleButton from "../Components/AppleButton";
import uploadlogo from "../Assests/logos/Upload.svg";
import Input from "../Components/Input";
import SignupImage from "../Assests/images/Signup.png";
const SignupPage = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${SignupImage})` }}
    >
      <div
        className="absolute inset-y-0 right-0 grid grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-8 w[250px] "
        dir="rtl"
      >
        <form className="row-span-1 col-span-2">
          <h2 className="text-2xl font-bold text-center mb-8">إنشاء حساب</h2>
        </form>
        <form className="">
          <div className="mb-4 " dir="rtl">
            <Input title={"الايميل"} />
            <Input title={" اسم المستخدم"} />
            <Input title={"رقم الهاتف "} />
            <Input title={" كلمة المرور"} />
            <Input title={" كلمة المرور"} />
          </div>
        </form>
        <form className="">
          <div>
            <div className="mb-4 bg-slate-300  p-4 outline-dashed outline-1 rounded-lg ">
              <label
                className="block text-gray-700 text-sm text-right font-bold mb-2"
                htmlFor="personalPhoto"
              >
                الصورة الشخصية
              </label>
              <div className="flex text-xs text-right">
                <p>اسحب و افلت الصورة هنا او قم برفعها من الملفات</p>
                <img src={uploadlogo} alt="uploadlogo" />
              </div>
              <p className="text-xs text-gray-500 text-right mt-1">
                الحجم الأقصى: 2MB
              </p>
            </div>

            <div
              className="mb-4 bg-slate-300  p-4 outline-dashed outline-1 rounded-lg "
              dir="rtl"
            >
              <label
                className="block text-gray-700 text-sm text-right font-bold mb-2"
                htmlFor="personalPhoto"
              >
                إثبات شخصية
              </label>
              <div className="flex text-xs">
                <p>اسحب و افلت الصورة هنا او قم برفعها من الملفات</p>
                <img src={uploadlogo} alt="uploadlogo" />
              </div>
              <p className="text-xs text-gray-500 text-right mt-1">
                الحجم الأقصى: 1MB
              </p>
            </div>
          </div>
          <Button>إنشاء حساب</Button>

          <div className="text-center">
            <p className="text-gray-600">
              لديك حساب؟
              <a href="/login" className="text-indigo-500">
                تسجيل الدخول
              </a>
            </p>
          </div>
        </form>
        <form className="row-span-1 col-span-2">
          <div className=" text-center ">
            <p className="text-gray-600 mb-4">أو</p>
            <div className="flex justify-center  items-center text-center ">
              <div className="flex max-w-96">
                <FacebookButton />
                <AppleButton />
                <GoogleButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
