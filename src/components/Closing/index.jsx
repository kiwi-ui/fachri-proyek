import { useContext } from 'react';
import style from './style.module.css';
import FormContext from '../../context/FormContext';

const Closing = () => {
  const { setToggleClosingModal, setCurrentPage } = useContext(FormContext);
  
  const backHome = () => {
    setToggleClosingModal(false);
    setCurrentPage(0)
  }

  return (
    <section className='d-flex flex-column align-content-center px-4 justify-content-center flex-wrap vh-100'>
        <div className={ `${ style.glass } container py-5 text-center` }>
            <h3>Terimakasih atas ketersediaannya mengisi form!</h3>
            <p className="py-3">Kami sangat menghargai waktu dan perhatian Anda dalam mengisi formulir ini. Formulir telah berhasil terkirim.</p>
            <button className="btn fw-semibold" style={{backgroundColor:'#f98787'}} onClick={ backHome }>Kembali ke beranda</button>
        </div>
    </section>
  )
}

export default Closing
