"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import toast, { Toaster } from "react-hot-toast";

import { MdDelete, MdEdit, MdLogout } from "react-icons/md";
import { redirect, useRouter } from "next/navigation";

export default function Uploader() {
  const router = useRouter();
  useEffect(() => {
    handleFetchGallery();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      redirect("/auth");
    }
  }, [localStorage]);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/auth");
  };
  const [gallery, setGallery] = useState();
  const [galleryData, setGalleryData] = useState({
    description: "",
    title: "",
    type: "",
    thumbnail: "",
    url: "",
  });
  const initialValues = {
    description: "",
    title: "",
    type: "",
    thumbnail: "",
    url: "",
  };
  const handleFetchGallery = async () => {
    let gallerySnapshots = await getDocs(collection(firestore, "gallery"));
    const galleryData = await gallerySnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGallery(galleryData);
  };
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Type is required"),
    thumbnail: Yup.string()
      .url("Invalid URL format")
      .required("URL is required"),
    url: Yup.string().url("Invalid URL format").required("URL is required"),
  });

  // Form submit handler
  const handleSubmit = async (values) => {
    try {
      if (!values.id) {
        let uplaodDataRef = collection(firestore, "gallery");
        const docRef = await addDoc(uplaodDataRef, values);
        if (docRef.id) {
          toast.success("Video Uploaded Successfully!");
        }
      } else {
        let updateRef = doc(firestore, "gallery", values.id);
        await updateDoc(updateRef, values);
        toast.success("Video updated successfully!");
      }

      handleReset();
      handleFetchGallery();
    } catch (error) {
      toast.error("Couldn't upload file", error);
    }
  };
  const handleEdit = async (values) => {
    setGalleryData(values);
  };
  const handleDeleteItem = async (values) => {
    deleteDoc(doc(firestore, "gallery", values.id));
    handleFetchGallery();
  };
  const handleReset = () => {
    setGalleryData(initialValues);
  };
  return (
    <div className="uploader flex gap-4 items-center justify-center min-h-screen bg-black flex-wrap">
      <div className="bg-white w-[90%] lg:size-6/12 rounded-xl overflow-hidden max-h-[600px] overflow-scroll">
        <div className="grid grid-cols-3  w-full gap-1 p-2">
          {gallery?.map((item) => (
            <div
              className="group relative rounded-lg overflow-hidden"
              key={item.id}
            >
              <img
                className="w-[300px] h-full object-cover hover:bg-opacity-80"
                src={item.thumbnail}
              />
              <span className="z-10 inset-0 group-hover:bg-opacity-40  absolute w-full h-full bg-black bg-opacity-0 flex items-center gap-2 justify-center">
                <MdEdit
                  className="text-white text-2xl hidden group-hover:block"
                  onClick={() => handleEdit(item)}
                />
                <MdDelete
                  className="text-red-400 text-2xl hidden group-hover:block"
                  onClick={() => handleDeleteItem(item)}
                />
              </span>
              <span className="absolute bg-black text-white w-full px-3 bottom-0">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white size-6/12 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-black">
          Upload Your Videos Here
        </h1>
        <Formik
          initialValues={galleryData}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
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
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 outline-none border-2 border-black hover:bg-transparent hover:text-black ease-linear duration-300"
              >
                Submit
              </button>

              <button
                type="button"
                className="border-2 border-black py-2 px-4 ml-2"
                onClick={handleReset}
              >
                Reset
              </button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-2 py-1 rounded-sm flex items-center gap-1 absolute bottom-10"
      >
        <MdLogout />
        <span>Log out</span>
      </button>
    </div>
  );
}
