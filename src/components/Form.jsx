import FormContext from '../context/FormContext';
import { useState } from 'react';
import Biodata from './Biodata/Biodata';
import ComfortPage from './ComfortPage/ComfortPage';
import Opening from './Opening/Opening';

 const Form = () => {
    const [formData, setFormData] = useState({
        nama: '',
        umur: '',
        jenisKelamin: ''
    });

    const [currentPage, setCurrentPage] = useState(0);
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData)
    };
    const handleNextPages = (e) => {
        e.preventDefault();
        if(currentPage < 3){
            setCurrentPage(page => page + 1);
        }else {
            setCurrentPage(3)
        }
    }

    const handlePrevPages = (e) => {
        e.preventDefault();
        if(currentPage > 0){
            setCurrentPage(page => page - 1);
        }else{
            setCurrentPage(0)
        }
    }

    const handleSubmit = async (event) =>  {
        event.preventDefault();
        const url = 'https://script.google.com/macros/s/AKfycbx2OVLht0TqIGKtu7jkE-snVFix1GmoJfP9Un-TgM-QFfloD4P7jILd5D4rek4_HmSj/exec';
        const form = document.getElementById('form');
        const CompleteformData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            CompleteformData.append(key, value);
        })

        if (!formData.nama ) {
          setIsInputEmpty((e) => !e)
          setIsSuccess(e => !e)
          return;
        }

        fetch(url, {
          method: 'POST',
          body: CompleteformData
        })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({nama:'', umur:'', jenisKelamin:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 1500);
            console.log(formData)
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)

    }

    return (
        <FormContext.Provider value={{ formData, setFormData, currentPage, handleChange }}>
            <section className="bg-danger">
                <div className={ `rounded-4 shadow-lg` }>
                    <div id="wish" className="py-5 container">
                        <p className={`fw-bold m-0 text-center fs-1 mb-3 pb-2`}>Form</p>

                        <form name="survey-fachri" id="form" className="form-wrapper row py-1" method="post">
                            { currentPage == 0 && <Opening /> }
                            { currentPage===1 && <Biodata /> }
                            { currentPage == 2 && <ComfortPage /> }
                        </form>

                        <div className="d-flex justify-content-between px-1 pt-4">
                            <a className={`btn btn-primary ${currentPage == 0 ? 'd-none' : ''}`} role="button" onClick={ handlePrevPages }>Back</a>
                            
                            {currentPage == 3 ? 
                                <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative">
                                    <a href='blank' type="submit" className={`py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold btn ${isLoading ? 'disabled' : '' } btn btn-light`} aria-disabled="true" onClick={ handleSubmit }>
                                        { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <p className="mb-0 text-black">Submit</p> }
                                    </a>
                                    {/* { isSuccess && <p className="position-relative bg-text-primary">Pesan Terkirim!</p> } */}
                                </div> 
                                    : 
                                <a className={`btn btn-primary ${currentPage == 3 ? 'disabled' : ''}`} role="button" onClick={ handleNextPages }>Next</a>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </FormContext.Provider>
    )
  }

export default Form
