import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";

function New() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      title: "",
      character: "",
      genre: "",
      family: "",
    },
  });
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("Form  Submitted");
    setIsSubmitted(true);
    console.log(data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Add new item</title>
      </Helmet>
      <Header title="Disney Catalogue" />
      <section className="forms">
        <div className="design">
          <div>
            <p className="message">{isSubmitted ? "Form submitted" : ""}</p>
            <h2>Add a Character</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="title"
                {...register("title", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "⚠️Title: needs more than 2 characters ",
                  },
                })}
                aria-invalid={errors.character ? "true" : "false"}
              />
              <p className="validation">
                {errors.title ? errors.title.message : ""}
              </p>
              <input
                type="text"
                placeholder="Character"
                {...register("character", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "⚠️Character: needs more than 2 characters",
                  },
                })}
                aria-invalid={errors.character ? "true" : "false"}
              />
              <p className="validation">
                {errors.character ? errors.character.message : ""}
              </p>{" "}
              <input
                type="text"
                placeholder="genre"
                {...register("genre", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "⚠️Genre: needs more than 2 characters",
                  },
                })}
                aria-invalid={errors.genre ? "true" : "false"}
              />
              <p className="validation">
                {errors.genre ? errors.genre.message : ""}
              </p>
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default New;
