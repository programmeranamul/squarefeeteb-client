import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Carear.css";

const Carear = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const carearStore = useSelector((state) => state.carearReducer);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="carear-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div>
            <h2 className="text-center bg-primary text-white d-inline-block p-2 rounded">Careers</h2>
            <h6 className="mb-4 bg-orange d-inline-block p-2 rounded text-justify">
              We will offer exciting career opportunities soon. Whether it's the
              diverse challenges daily within the job or the large scope for
              applying creativity in your work. There are enough reasons to
              join our motivated team.
            </h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mx-auto border rounded px-4 pb-4 pt-3 bg-white">
              <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    {...register("name", { required: true, minLength: 3 })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-danger mt-2 d-block">
                      This field is required
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="text-danger mt-2 d-block">
                      Name Must be more then 3 charecter
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-danger mt-2 d-block">
                      This field is required
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-danger mt-2 d-block">
                      Enter Valid Email
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Cell</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    {...register("cell", { required: true, pattern: /^[0-9]/ })}
                  />
                  {errors.cell?.type === "required" && (
                    <span className="text-danger mt-2 d-block">
                      This field is required
                    </span>
                  )}
                  {errors.cell?.type === "pattern" && (
                    <span className="text-danger mt-2 d-block">
                      Please Enter Only Number
                    </span>
                  )}
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload your resume</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Upload your resume"
                    required
                  />
                </Form.Group>

                <button
                  className="btn bg-orange tw-600 text-white mt-2"
                  type="submit"
                >
                  Send Email
                  {carearStore.loading && (
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  )}
                </button>
              </Form>
              <p className="text-center mt-3 text-secondary">
                Stay in touch with our recruitment team,{" "}
                <a href="mailto:web@programming-hero.com">
                  career@squarefeetbd.com
                </a>{" "}
                 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carear;
