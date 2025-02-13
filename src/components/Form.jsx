import FormContext from '../context/FormContext';
import { useState } from 'react';
import Biodata from './Biodata/Biodata';
import ComfortPage from './ComfortPage/ComfortPage';
import Opening from './Opening/Opening';
import Arausal from './Arausal/Arausal';
import DominancePage from './DominancePage/DominancePage';
import style from './style.module.css';

  const Form = () => {
    const [formData, setFormData] = useState({
        nama: '',
        umur: '',
        jenisKelamin: '',
        Layout1: '',
        Layout2: '',
        Layout3: '',
        Layout4: '',
        VariasiJenisRuang1: '',
        VariasiJenisRuang2: '',
        VariasiJenisRuang3: '',
        HirarkiVisual1: '',
        HirarkiVisual2: '',
        HirarkiVisual3: '',
        HirarkiVisual4: '',
        AreaPersonal1: '',
        AreaPersonal2: '',
        AreaPersonal3: '',
        AreaPersonal4: '',
        AreaPersonal5: '',
        Pencahayaan1: '',
        Pencahayaan2: '',
        Pencahayaan3: '',
        Pencahayaan4: '',
        Langgam1: '',
        Langgam2: '',
        Langgam3: '',
        Langgam4: '',
        Langgam5: '',
        ArausalLayout1: '',
        ArausalLayout2: '',
        ArausalLayout3: '',
        ArausalVariasiJenisRuang1: '',
        ArausalVariasiJenisRuang2: '',
        ArausalVariasiJenisRuang3: '',
        ArausalHirarkiVisual1: '',
        ArausalHirarkiVisual2: '',
        ArausalHirarkiVisual3: '',
        ArausalAreaPersonal1: '',
        ArausalAreaPersonal2: '',
        ArausalAreaPersonal3: '',
        ArausalPencahayaan1: '',
        ArausalPencahayaan2: '',
        ArausalPencahayaan3: '',
        ArausalLanggam1: '',
        ArausalLanggam2: '',
        ArausalLanggam3: '',
        DominanceLayout: '',
        DominanceVariasiJenisRuang: '',
        DominanceHirarkiVisual: '',
        DominanceAreaPersonal: '',
        DominancePencahayaan: '',
        DominanceLanggam: ''
    });

    const [emptyFields, setEmptyFields] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); 
    const validateForm = () => {
        const emptyInputs = Object.keys(formData).filter(key => formData[key] === '');
        
        setEmptyFields(emptyInputs); // Simpan input yang kosong ke dalam state
    
        return emptyInputs.length === 0; // Return true jika semua terisi, false jika ada yang kosong
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNextPages = (e) => {
        e.preventDefault();
        if(currentPage < 5){
            setCurrentPage(page => page + 1);
        }else {
            setCurrentPage(5)
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
        if (!validateForm()) {
            alert(`Harap isi semua kolom berikut:${emptyFields.join(', ')}`);
            console.log(emptyFields)
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
            <body className={`${style.bg} h-100 `}>
                    <div className={`container py-5`}>

                        <form name="survey-fachri" id="form" className="form-wrapper row py-1" method="post">
                            { currentPage == 0 && <Opening /> }
                            { currentPage ==1 && <Biodata /> }
                            { currentPage == 2 && <ComfortPage /> }
                            { currentPage == 3 && <Arausal /> }
                            { currentPage == 4 && <DominancePage /> }
                            
                        </form>

                        <div className={`d-flex px-1 pt-4 ${currentPage === 0 ? 'justify-content-center' : 'justify-content-between' }`}>
                            <a className={`btn btn-primary ${currentPage == 0 ? 'd-none' : ''}`} role="button" onClick={ handlePrevPages }>Kembali</a>
                            
                            {currentPage == 4 ? 
                                <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative">
                                    <a href='blank' type="submit" className={`py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold btn ${isLoading ? 'disabled' : '' } btn btn-light`} aria-disabled="true" onClick={ handleSubmit }>
                                        { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <p className="mb-0 text-black">Submit</p> }
                                    </a>
                                    { isSuccess && <p className="position-relative bg-text-primary">Berhasil</p> }
                                </div> 
                                    : 
                                <a className={`btn btn-primary `} role="button" onClick={ handleNextPages }>{currentPage === 0 ? 'Mulai' : 'Selanjutnya'}</a>
                            }
                        </div>
                    </div>
            </body>
        </FormContext.Provider>
    )
  }

export default Form
