import React, { useState } from "react";
import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
import { styled } from "styled-components";
import "./select.css";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const CreateJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  min-height: 100vh;
`;
const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 0 auto;
  width: 30%;
`;

const Label = styled.label`
  min-width: 100%;
  font-size: 15px;
`;
const Input = styled.input`
  min-width: 100%;
  padding: 1rem;
  border-radius: 7px;
  margin-top: 0.5rem;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;
const Button = styled.button`
  align-self: flex-end;
  padding: 1rem;
  background-color: #4348db;
  color: #fff;
  border: none;
`;

const InputField = styled.input`
  display: none;
`;

const CustomInputLabel = styled.label`
  display: flex;
  align-self: flex-start;
  width: fit-content;
  padding: 12px;
  background-color: #4348db;
  color: #fff;
  text-align: center;
  border: 1px solid #007bff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-top: 0.5rem;
`;
const FileNameDisplay = styled.div`
  margin-top: 10px;
`;

const ErrorParagraph = styled.span`
  color: red;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const Create = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState({
    job_name: "",
    job_about: "",
    companyName: "",
    salary: "",
    location: "",
    idealCandidate: "",
    jobType: "",
    jobCategory: "",
    tag: "",
    responsabilities: "",
  });
  const [formData, setFormData] = useState({
    companyName: "",
    job_name: "",
    salary: "",
    location: "",
    idealCandidate: "",
    jobType: "",
    jobCategory: "",
    tag: [{ name: "" }],
    responsabilities: [{ name: "" }],
  });

  const setFormError = (setError, fieldName, errorMessage) => {
    setError((prev) => ({
      ...prev,
      [fieldName]: errorMessage,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "tag" || name === "responsabilities") {
      const arrayValue = value
        .split(",")
        .map((item) => ({ name: item.trim() }));
      setFormData((prevData) => ({
        ...prevData,
        [name]: arrayValue,
      }));
      setFormError(setError, name, "");
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setFormError(setError, name, "");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.job_name ||
      !formData.companyName ||
      !formData.idealCandidate ||
      !formData.jobCategory ||
      !formData.location ||
      !formData.job_about ||
      !formData.jobType ||
      !formData.responsabilities.every(
        (responsibility) => responsibility.name
      ) ||
      !formData.salary ||
      !formData.tag.every((tag) => tag.name)
    ) {
      setError({
        job_name: !formData.job_name ? "Podaj nazwę pracy" : "",
        job_about: !formData.job_about
          ? "Podaj jaką rolę będzie pełnił pracownik"
          : "",
        companyName: !formData.companyName ? "Wpisz nazwę firmy!" : "",
        idealCandidate: !formData.idealCandidate
          ? "To pole nie może być puste."
          : "",
        jobCategory: !formData.jobCategory ? "Wpisz kategorię." : "",
        location: !formData.location ? "Podaj lokalizację firmy." : "",
        responsabilities: !formData.responsabilities.every(
          (responsibility) => responsibility.name
        )
          ? "Obowiązki pracownika muszą być uzupełnione."
          : "",
        salary: !formData.salary ? "Wpisz odpowiednie widełki" : "",
        tag: !formData.tag.every((tag) => tag.name)
          ? "Wpisz tagi dla oferty pracy."
          : "",
        jobType: !formData.jobType ? "Podaj typ pracy" : "",
      });
      return;
    }

    try {
      const tagArray = Array.isArray(formData.tag)
        ? formData.tag
        : [{ name: "" }];
      const responsabilitiesArray = Array.isArray(formData.responsabilities)
        ? formData.responsabilities
        : [{ name: "" }];

      const response = await fetch("https://localhost:7274/api/Job/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tag: tagArray.map((tag) => ({ name: tag.name })),
          responsabilities: responsabilitiesArray.map((responsability) => ({
            name: responsability.name,
          })),
        }),
      });

      if (response.ok) {
        setFormData({
          job_name: "",
          job_about: "",
          companyName: "",
          salary: "",
          location: "",
          idealCandidate: "",
          jobType: "",
          jobCategory: "Fulltime",
          tag: [{ name: "" }],
          responsabilities: [{ name: "" }],
        });

        setSelectedFile(null);
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating job offer:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <CreateJobWrapper>
        <Heading>Stwórz ofertę pracy</Heading>
        <Form onSubmit={handleSubmit}>
          <Label>
            <p>Nazwa firmy</p>
            <Input
              type="text"
              placeholder="Company sp z.o.o"
              name="companyName"
              onChange={handleInputChange}
            />
          </Label>
          <ErrorParagraph>
            {error.companyName && error.companyName}
          </ErrorParagraph>
          <Label>
            <p>Stanowisko</p>
            <Input
              type="text"
              placeholder="Designer"
              name="jobType"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.jobType && error.jobType}</ErrorParagraph>
          </Label>
          <Label>
            <p>Nazwa pracy</p>
            <Input
              type="text"
              name="job_name"
              placeholder="UI/UX Designer"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.job_name && error.job_name}</ErrorParagraph>
          </Label>
          <Label>
            <p>Lokalizacja</p>
            <Input
              type="text"
              name="location"
              placeholder="Remote"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.location && error.location}</ErrorParagraph>
          </Label>
          <Label>
            <p>Widełki</p>
            <Input
              type="text"
              name="salary"
              placeholder="$50k-$90k"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.salary && error.salary}</ErrorParagraph>
          </Label>
          <Label>
            <p>Typ stanowiska</p>
            <select
              name="jobCategory"
              value={formData.jobCategory}
              onChange={handleInputChange}
            >
              <option>-- Wybierz --</option>
              <option value={"Internship"}>Internship</option>
              <option value={"Designer"}>Designer</option>
              <option value={"Marketer"}>Marketer</option>
              <option value={"FullTime"}>FullTime</option>
              <option value={"Engineering"}>Engineering</option>
              <option value={"Other"}>Other</option>
            </select>

            <ErrorParagraph>
              {error.jobCategory && error.jobCategory}
            </ErrorParagraph>
          </Label>
          <Label>
            <p>O roli</p>
            <Input
              type="text"
              name="job_about"
              placeholder="jako designer w naszej firmie..."
              onChange={handleInputChange}
            />
          </Label>
          <ErrorParagraph>{error.job_about && error.job_about}</ErrorParagraph>
          <Label>
            <p>Obowiązki (Dodaj po przecinku)</p>
            <Input
              type="text"
              name="responsabilities"
              placeholder="Projektowanie, mockupy, kontakt z klientem"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.responsabilities}</ErrorParagraph>
          </Label>
          <Label>
            <p>Tagi (Dodaj po przecinku)</p>
            <Input
              type="text"
              name="tag"
              placeholder="User Interface Design, Experience Design, Contract Based Work"
              onChange={handleInputChange}
            />
            <ErrorParagraph>{error.tag}</ErrorParagraph>
          </Label>
          <Label>
            <p>Opis idealnego kandydata</p>
            <Input
              name="idealCandidate"
              type="text"
              onChange={handleInputChange}
              placeholder="Nasz idealny kandydat..."
            />
            <ErrorParagraph>{error.idealCandidate}</ErrorParagraph>
          </Label>
          <InputField type="file" id="fileInput" onChange={handleFileChange} />
          <CustomInputLabel htmlFor="fileInput">Logo firmy</CustomInputLabel>
          {selectedFile && (
            <FileNameDisplay>
              Wybrane zdjęcie: {selectedFile.name}
            </FileNameDisplay>
          )}
          <Button type="submit">Dodaj ofertę</Button>
        </Form>
      </CreateJobWrapper>
      <Footer />
    </>
  );
};
