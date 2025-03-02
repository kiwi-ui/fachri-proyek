import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const ComfortPage = () => {
  const { handleChange, formData } = useContext(FormContext);

  const questions = [
    {
      id: 'Layout1',
      question: 'Saya merasa terbantu dengan sistem layout-pada perpustakaan ini.'
    },
    {
      id: 'Layout2',
      question: 'Kegiatan saya lebih teratur dengan pola layout yang diterapkan pada perpustakaan ini.'
    },
    {
      id: 'Layout3',
      question: 'Dengan layout perpustakaan kegiatan saya menjadi lebih tertata.'
    },
    {
      id: 'Layout4',
      question: 'Saya menjadi lebih mudah berkegiatan didalam perpustakaan dengan layout tersebut.'
    },
    {
      id: 'VariasiJenisRuang1',
      question: 'Saya menjadi lebih mudah berkegiatan dengan variasi ruang yang diberikan oleh perpustakaan ini.'
    },
    {
      id: 'VariasiJenisRuang2',
      question: 'Kegiatan saya menjadi lebih terfokus dengan adanya variasi jenis ruang pada perpustakaan ini.'
    },
    {
      id: 'VariasiJenisRuang3',
      question: 'Dengan adanya variasi jenis ruang perpustakaan kegiatan saya menjadi lebih tertata.'
    },
    {
      id: 'HirarkiVisual1',
      question: 'Saya merasa terbantu dengan sistem hirarki visual pada perpustakaan ini.'
    },
    {
      id: 'HirarkiVisual2',
      question: 'Saya menjadi lebih mudah berkegiatan didalam perpustakaan dengan hirarki visual tersebut.'
    },
    {
      id: 'HirarkiVisual3',
      question: 'Saya merasa nyaman berkegiatan dengan adanya hirarki visual perpustakaan.'
    },
    {
      id: 'HirarkiVisual4',
      question: 'Kegiatan saya lebih teratur dengan pola hirarki visual yang diterapkan pada perpustakaan ini.'
    },
    {
      id: 'AreaPersonal1',
      question: 'Saya merasa nyaman berkegiatan dengan adanya area personal perpustakaan.'
    },
    {
      id: 'AreaPersonal2',
      question: 'Saya merasa rileks berkegiatan dengan adanya area personal perpustakaan.'
    },
    {
      id: 'AreaPersonal3',
      question: 'Saya merasa tenang dengan diberikannya area personal pada perpustakaan ini.'
    },
    {
      id: 'AreaPersonal4',
      question: 'Kegiatan saya diperpustakaan menjadi lebih santai dengan adanya area personal yang diberikan.'
    },
    {
      id: 'AreaPersonal5',
      question: 'Saya merasa aman dengan diberikannya area personal pada perpustakaan ini.'
    },
    {
      id: 'Pencahayaan1',
      question: 'Saya merasa nyaman berkegiatan dengan adanya pencahayaan perpustakaan.'
    },
    {
      id: 'Pencahayaan2',
      question: 'Saya merasa rileks berkegiatan dengan adanya pencahayaan perpustakaan.'
    },
    {
      id: 'Pencahayaan3',
      question: 'Saya menjadi lebih mudah berkegiatan didalam perpustakaan dengan pencahaayan tersebut.'
    },
    {
      id: 'Pencahayaan4',
      question: 'Saya merasa terbantu dengan sistem pencahayaan pada perpustakaan ini.'
    },
    {
      id: 'Langgam1',
      question: 'Saya merasa nyaman berkegiatan dengan adanya langgam perpustakaan.'
    },
    {
      id: 'Langgam2',
      question: 'Saya merasa rileks berkegiatan dengan adanya langgam perpustakaan.'
    },
    {
      id: 'Langgam3',
      question: 'Saya merasa betah dengan diberikannya langgam pada perpustakaan ini.'
    },
    {
      id: 'Langgam4',
      question: 'Kegiatan saya diperpustakaan menjadi lebih santai dengan adanya langgam yang diberikan.'
    },
    {
      id: 'Langgam5',
      question: 'Saya merasa aman dengan diberikannya langgam pada perpustakaan ini.'
    },
]
  return (
    <section className="">
      <h3 className="fw-bold text-center mb-3">Pleasure (kenyamanan)</h3>
      <p className="text-center fw-normal mb-3">Pada sesi ini akan berfokus pada poin kenyamanan dari kondisi Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan, berdasarkan pernyataan dibawah ini pilihlah angka yang mewakili persepsi anda terhadap kenyamanan perpustakaan tersebut. </p>
        { questions.map((survey) => 
          <div key={survey.id} className='py-3 border-top border-black'>
            <p className="text-black">{survey.question}</p>
            
            <div className="col-12 mb-2 row px-3">
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={1} onChange={ handleChange } checked={formData[survey.id] == 1}></input>
                <label className="form-check-label">Tidak setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={2} onChange={ handleChange } checked={formData[survey.id] == 2}></input>
                <label className="form-check-label">Kurang setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={3} onChange={ handleChange } checked={formData[survey.id] == 3}></input>
                <label className="form-check-label">setuju</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" name={survey.id} type="radio" value={4} onChange={ handleChange } checked={formData[survey.id] == 4}></input>
                <label className="form-check-label">Sangat setuju</label>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default ComfortPage
