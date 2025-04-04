import { redirect, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Tesla" },
    { name: "description", content: "Welcome to Tesla!" },
  ];
};

export const loader: LoaderFunction = async () => {
  return redirect("/home");
}

export default function Index() {

  // This is the main layout for the app
  return null;
}
