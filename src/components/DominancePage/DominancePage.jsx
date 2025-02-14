import React from 'react'
import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const DominancePage = () => {
  const {setFormData, formData, currentPage, handleChange} = useContext(FormContext);

  const questions = [
    {
      id: 'DominanceLayout',
      question: 'Dengan kondisi layout pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    },
    {
      id: 'DominanceVariasiJenisRuang',
      question: 'Dengan kondisi variasi jenis ruang pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    },
    {
      id: 'DominanceHirarkiVisual',
      question: 'Dengan kondisi hirarki visual pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    },
    {
      id: 'DominanceAreaPersonal',
      question: 'Dengan kondisi area personal pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    },
    {
      id: 'DominancePencahayaan',
      question: 'Dengan kondisi pencahayaan pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    },
    {
      id: 'DominanceLanggam',
      question: 'Dengan kondisi langgam pada perpustakaan ini saya akan mengunjungi kembali perpustakaan ini.'
    }
]
  return (
    <section className="px-3">
      <h3 className="fw-bold text-center mb-3">Domminance (Perilaku)</h3>
      <p className="text-center fw-normal mb-3">Pada sesi ini akan berfokus pada poin perilaku dari kondisi Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan, berdasar pernyataan dibawah ini pilihlah angka yang mewakili persepsi anda terhadap perilaku perpustakaan tersebut. </p>
        { questions.map((survey) => 
          <div key={survey.id} className='py-3 border-top border-black'>
            <p className="text-black">
              {survey.question}
            </p>

            <div className="col-12 mb-2 row px-3">
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={1} onClick={ handleChange }></input>
                <label className="form-check-label">Tidak setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={2} onClick={ handleChange }></input>
                <label className="form-check-label">Kurang setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={3} onClick={ handleChange }></input>
                <label className="form-check-label">setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={4} onClick={ handleChange }></input>
                <label className="form-check-label">Sangat setuju</label>
              </div>
            </div>
          </div>
        )}
        
      <div className="form-floating mb-4 border-top border-black py-3">
        <p>Berdasarkan pertanyaan sebelumnya deskripsikan gambaran bagaimana kualitas elemeen interior perpustakaan ini memberi rasa nyaman, membuat anda bersemangat dan bekeinginan untuk kembali lagi menurut pendapat dan keinginan anda.</p>
        <textarea className="form-control py-2" style={{height: '100px'}} name="PAD" onChange={ handleChange }></textarea>
      </div>
      
    </section>
  )
}

export default DominancePage
