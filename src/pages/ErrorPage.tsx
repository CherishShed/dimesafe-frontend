import { useLoaderData } from "react-router-dom";
import { Error } from "../components";
const ErrorPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex flex-col pt-10 text-4xl text-primary">
      <div className="self-center">Error Page</div>
      <Error />
    </div>
  );
};

export async function ErrorLoader() {
  const res = await fetch("http://localhost:4000/carrer");
  return res.json();
}

export default ErrorPage;
