"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import toast, { Toaster } from "react-hot-toast";
const Uploader = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
    type: Yup.string()
      .oneOf(["video"], 'Type must be "video"')
      .required("Type is required"),
    thumbnail: Yup.string()
      .url("Invalid URL format")
      .required("URL is required"),
    url: Yup.string().url("Invalid URL format").required("URL is required"),
  });

  // Initial form values
  const initialValues = {
    description: "",
    title: "",
    type: "",
    thumbnail: "",
    url: "",
  };

  // Form submit handler
  const handleSubmit = async (values) => {
    try {
      const uploadData = collection(firestore, "gallery");
      const docRef = await addDoc(uploadData, values);
      if (docRef.id) {
        toast.success("Video Uploaded Successfully!");
      }
    } catch (error) {
      toast.error("Couldn't upload file", error);
    }
  };

  return (
    <div className="uploader flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-black">
          Upload Your Videos Here
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex flex-col gap-2  field">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-black"
                >
                  Title
                </label>
                <Field type="text" name="title" className="" />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2  field">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-black"
                >
                  Description
                </label>
                <Field type="text" name="description" className="" />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2  field">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-black"
                >
                  Type
                </label>
                <Field type="text" name="type" className="" />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2  field">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-black"
                >
                  Thumbnail
                </label>
                <Field type="text" name="thumbnail" className="" />
                <ErrorMessage
                  name="thumbnail"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2  field">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-black"
                >
                  URL
                </label>
                <Field type="text" name="url" className="" />
                <ErrorMessage
                  name="url"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button className="bg-black text-white py-2 px-4 outline-none border-2 border-black hover:bg-transparent hover:text-black ease-linear duration-300">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </div>
    </div>
  );
};

export default Uploader;
