import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)


    const [formData, setFormData] = useState({
        name: '',
        gender: ''
    });
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleNameChange = (e) => {
      setFormData((prevData) => ({
          ...prevData,
          name: e.target.value,
      }));
    };  
    const handleGender = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        gender: e.target.value
      }))
    };  

    const handleSubmit = (event) =>  {
        event.preventDefault();
        const url = 'https://script.google.com/macros/s/AKfycbx2OVLht0TqIGKtu7jkE-snVFix1GmoJfP9Un-TgM-QFfloD4P7jILd5D4rek4_HmSj/exec';
        const form = document.getElementById('form');

        if (!formData.name || !formData.gender) {
          setIsInputEmpty((e) => !e)
          setIsSuccess(e => !e)
          return;
        }

        fetch(url, {
          method: 'POST',
          body: new FormData(form) // Send formData as JSON
        })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({name:'', date: '', gender:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 1500);
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)
    }

    return (
        <section className="wish  bg-danger">
            <div className={ `rounded-4 shadow-lg` }>
                <div id="wish" className="py-5 container">
                    <p className={`fw-bold m-0 text-center fs-1 mb-3 pb-2`}>Form</p>

                    <form name="survey-fachri" id="form" className="form-wrapper row py-1" method="post">
                        <div className="col-12 bg-info py-5 rounded-3 mb-3">
                          <label className="form-label" >Nama</label>
                          <input className="w-100 text-bold rounded-1 border-0 fw-bold bg-white text-black p-2" name="name" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name }/>
                          {/* { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> } */}
                        </div>

                        <div className="col-12 bg-info rounded-3 py-3">
                          <label className='form-label'>Jenis Kelamin</label>
                            <input className="form-check-input" type="radio" name="jenis-kelamin" checked={formData.gender == 'Laki-laki'} onClick={ handleGender } value="Laki-laki"/>
                            <label className="form-check-label">
                                Laki-laki
                            </label>

                            <input className="form-check-input" type="radio" name="jenis-kelamin" checked={formData.gender == 'Perempuan'} onClick={ handleGender } value="Perempuan"/>
                            <label className="form-check-label">
                              Perempuan
                            </label>
                        </div>

                        {/* <div className="col-md-6 col-12 my-3">
                            <input className="w-100 p-3 rounded-1 border-0 fw-bold bg-white" name="no" type="number" placeholder="Nomor ponsel (opsional)" />
                        </div>
                        <div className="col-12">
                            <textarea className="w-100 pb-5 pt-2 px-3 rounded-1 border-0 fw-bold bg-white" name="harapan" placeholder="Harapan untuk pengantin" onChange={ handleWishChange } value={ formData.harapan } required />
                            { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk kepengantin</p> }
                        </div> */}
                    </form>

                    <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative">
                        <a href='blank' type="submit" className={`py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold btn ${isLoading ? 'disabled' : '' } btn btn-light`} aria-disabled="true" onClick={ handleSubmit }>
                            { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <p className="mb-0 text-black">Submit</p> }
                        </a>
                        {/* { isSuccess && <p className="position-relative bg-text-primary">Pesan Terkirim!</p> } */}
                    </div>
                </div>
            </div>
        </section>
    )
  }

export default App
