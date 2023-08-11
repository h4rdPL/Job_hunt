import React, {useState} from 'react'
import { Hero } from '../Hero/Hero';
import { Navbar } from '../Navbar/Navbar';
import { styled } from 'styled-components';
import axios from 'axios'
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
    margin-top: .5rem;
`;

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`;
const Button = styled.button`
    align-self: flex-end;
    padding: 1rem;
    background-color: #4348DB;
    color: #fff;
    border-radius: 7px;
    border: none;`;
export const Create = () => {
    const [formData, setFormData] = useState({
        job_name: '',
        companyName: '',
        salary: '',
        location: '',
        idealCandidate: '',
        jobType: '',
        jobCategory: 'Fulltime',
        tag: [{ name: '' }],
        responsabilities: [{ name: '' }],
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'tag') {
            const tagsArray = value.split(',').map(tag => ({ name: tag.trim() }));
            setFormData(prevData => ({
                ...prevData,
                tag: tagsArray,
            }));
        } else if (name === 'responsabilities') {
            const responsabilitiesArray = value.split(',').map(responsability => ({ name: responsability.trim() }));
            setFormData(prevData => ({
                ...prevData,
                responsabilities: responsabilitiesArray,
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const tagArray = Array.isArray(formData.tag) ? formData.tag : [{ name: '' }];
          const responsabilitiesArray = Array.isArray(formData.responsabilities) ? formData.responsabilities : [{ name: '' }];
      
          const response = await fetch("https://localhost:7274/api/Job/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              tag: tagArray.map(tag => ({ name: tag.name })),
              responsabilities: responsabilitiesArray.map(responsability => ({ name: responsability.name }))
            }),
          });
          console.log(formData)
          if (response.ok) {
            // Success: Clear form or perform other actions
            console.log('Job offer created successfully');
            setFormData({
              job_name: '',
              companyName: '',
              salary: '',
              location: '',
              idealCandidate: '',
              jobType: '',
              jobCategory: 'Fulltime',
              tag: [{ name: '' }],
              responsabilities: [{ name: '' }],
            });
          } else {
            // Error: Display error message or handle as needed
            console.error('Error creating job offer');
          }
        } catch (error) {
          console.error('Error creating job offer:', error);
        }
      };
      
  return (
    <>
    <Navbar />
    <Hero />
        <CreateJobWrapper>

            <Heading>
                Stwórz ofertę pracy 
            </Heading>
            <Form onSubmit={handleSubmit}>
                <Label>
                    <p>
                        Nazwa firmy
                    </p>
                    <Input 
                    type="text"
                    placeholder='Company sp z.o.o'
                    name='companyName'
                    onChange={handleInputChange} />
                </Label>
                <Label>
                    {/*// TODO: 
                    
                        select / option -> enum

                    */}
                    <p>
                        Stanowisko
                    </p>
                    <Input type="text" placeholder='Designer' name='jobType' onChange={handleInputChange} />
                </Label>
                <Label>
                    <p>
                        Nazwa pracy
                    </p>
                    <Input type="text" name="job_name" placeholder='UI/UX Designer' onChange={handleInputChange} />
                </Label>
                <Label>
                    <p>
                        Lokalizacja
                    </p>
                    <Input type="text" name="location" placeholder='Remote' onChange={handleInputChange} />
                </Label>                


                <Label>
                    <p>
                        Widełki
                    </p>
                    <Input type="text" name="salary" placeholder='$50k-$90k' onChange={handleInputChange} />
                </Label>
                <Label>
                    {/*// TODO: 

                        select / option -> enum
                    */}
                    <p>
                        Typ stanowiska
                    </p>
                    <Input type="text" name="jobCategory" placeholder='Staż' onChange={handleInputChange} />
                </Label>
                <Label>
                    <p>
                        O roli
                    </p>
                    <Input type="text" name="about" placeholder='jako designer w naszej firmie...' onChange={handleInputChange}/>
                </Label>
     
                <Label>
                    <p>
                        Obowiązki (Dodaj po przecinku)
                    </p>
                    <Input type="text" name="responsabilities" placeholder='Projektowanie, mockupy, kontakt z klientem' onChange={handleInputChange} />
                </Label>

                <Label>
                    <p>
                        Tagi (Dodaj po przecinku)
                    </p>
                    <Input type="text" name="tag" placeholder='User Interface Design, Experience Design, Contract Based Work' onChange={handleInputChange} />
                </Label>
                <Label>
                    <p>
                        Opis idealnego kandydata
                    </p>
                    <Input name="idealCandidate" type="text"  onChange={handleInputChange} placeholder='Nasz idealny kandydat...' />
                </Label>
                <Button type="submit">
                    Dodaj ofertę    
                </Button>

            </Form>
        </CreateJobWrapper>

    </>
  )
}
