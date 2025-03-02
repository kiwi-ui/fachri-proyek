import FormContext from '../context/FormContext';
import { useState } from 'react';
import Biodata from './Biodata/Biodata';
import ComfortPage from './ComfortPage/ComfortPage';
import Opening from './Opening/Opening';
import Arausal from './Arausal/Arausal';
import DominancePage from './DominancePage/DominancePage';
import style from './style.module.css';
import Music from './Music/MusicPlayer';
import Closing from './Closing';

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
        DominanceLanggam: '',
        PAD: ''
    });

    const [emptyFields, setEmptyFields] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [toggleClosingModal, setToggleClosingModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); 
    
    const validateForm = () => {
        const emptyInputs = Object.keys(formData).filter(key => formData[key] === '');
        
        setEmptyFields(emptyInputs)
    
        return emptyInputs.length === 0
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
            setCurrentPage(4)
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
            alert('Masih ada yang belum terisi')
            return;
        }

        fetch(url, {
          method: 'POST',
          body: CompleteformData
        })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            // setFormData({nama:'', umur:'', jenisKelamin:''})
            setIsSuccess(true) 
            setToggleClosingModal(true)
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
        <FormContext.Provider value={{ formData, setFormData, currentPage, setCurrentPage, handleChange, setToggleClosingModal }}>
            <body className={`${style.bg} h-100 `}>

                { toggleClosingModal ? <Closing /> : 
                    <div className={`container py-5 ${currentPage == 1 ? 'd-flex flex-wrap flex-column vh-100  justify-content-center px-3' : ''}`}>
                        <form name="survey-fachri" id="form" className={`form-wrapper row py-1 ${style.glass} mx-2 py-5 px-3`} method="post">
                            { currentPage == 0 && <Opening /> }
                            { currentPage ==1 && <Biodata /> }
                            { currentPage == 2 && <ComfortPage /> }
                            { currentPage == 3 && <Arausal /> }
                            { currentPage == 4 && <DominancePage /> }
                        </form>

                        <div className={`d-flex px-1 pt-4 ${currentPage === 0 ? 'justify-content-center' : 'justify-content-between' }`}>
                            <a className={`btn btn-lg ${currentPage === 0 ? 'd-none' : ''} ${style.glass} text-black px-3 fw-semibold shadow`} role="button" onClick={ handlePrevPages } >Sebelum</a>
                            {
                                currentPage == 4 ? 
                                <div>
                                        <a href='blank' type="submit" className={`shadow px-3 border-0 fw-semibold btn btn-lg ${ isLoading ? 'disabled' : '' } btn ${ style.glass }`} aria-disabled="true" role='button' onClick={ handleSubmit }>
                                            { isLoading ? <span className="spinner-border spinner-border-sm p-0" role="status"></span> : <p className="mb-0 text-black p-0">Submit</p> }
                                        </a>
                                        { isSuccess && <p className="position-relative bg-text-primary mb-0">Berhasil</p> }
                                </div> 
                                        : 
                                <a className={ `btn btn-lg ${style.glass} text-black px-3 fw-semibold shadow` } role="button" onClick={ handleNextPages }>{currentPage === 0 ? 'Mulai Survey' : 'Selanjutnya'}</a>
                            }
                        </div>

                        <Music />
                    </div>
                }                  
            </body>
        </FormContext.Provider>
    )
  }

export default Form
