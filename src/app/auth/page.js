"use client";
import { Field, Form, Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { app } from "../../../firebase.config";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const router = useRouter();
  const handleSubmit = async (values) => {
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          localStorage.setItem("accessToken", user.accessToken);
          router.push("/upload");
          toast.success("Logged in successfully!");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="login-form size-full h-screen flex flex-col w-screen items-center justify-center gap-4">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        <Form className="size-fit bg-white p-4 text-center">
          <span className="font-bold  text-slate-400 text-2xl">
            Hawa Production Portal
          </span>

          <div className="grid gap-1 text-start">
            <label>Username</label>
            <Field name="username" />
          </div>
          <div className="grid gap-1 text-start">
            <label>Password</label>
            <Field name="password" type="password" />
          </div>
          <button
            type="submit"
            className="border-2 border-black py-2 bg-black text-white w-full hover:bg-transparent hover:text-black"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
