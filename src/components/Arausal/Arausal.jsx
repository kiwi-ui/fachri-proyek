import React from 'react'
import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const Arausal = () => {
  const { handleChange } = useContext(FormContext);

  const questions = [
    {
      id: 'ArausalLayout1',
      question: 'Saya meraasa bersemangat ketika memasuki perpustakaan ini karena layout baik.'
    },
    {
      id: 'ArausalLayout2',
      question: 'Layout perpustakaan yang baik membuat saya lebih produktif dalam menemukan buku yang saya butuhkan.'
    },
    {
      id: 'ArausalLayout3',
      question: 'Layout perpustakaan ini membuat saya bergerak lebih mudah saat berpindah dari satu area ke area lain'
    },
    {
      id: 'ArausalVariasiJenisRuang1',
      question: 'Variasi ruang yang disediakan perpustakaan membuat saya lebih bergairah untuk berlama-lama disini.'
    },
    {
      id: 'ArausalVariasiJenisRuang2',
      question: 'Saya merasa lebih antusias menggunakan berbagai ruang yang ada untuk keperluan yang berbeda di perpustakaan ini.'
    },
    {
      id: 'ArausalVariasiJenisRuang3',
      question: 'Keberadaan ruang yang bervariasi membuat saya lebih produktif dalam mengerjakan tugas dengan suasana yang sesuai kebutuhan.'
    },
    {
      id: 'ArausalHirarkiVisual1',
      question: 'Hirarki visual perpustakaan yang baik membuat saya merasa lebih bersemangat untuk belajar disini.'
    },
    {
      id: 'ArausalHirarkiVisual2',
      question: 'Saya merasa lebih mudah bergerak melihat hirarki visual yang dirancang dengan baik dan optimal'
    },
    {
      id: 'ArausalHirarkiVisual3',
      question: 'Penataan hirarki visual yang baik membuat saya lebih bergairah untuk mencari inspirasi di berbagai sudut perpustakaan.'
    },
    {
      id: 'ArausalAreaPersonal1',
      question: 'Saya merasa tergugah untuk lebih fokus bekerja di area privasi yang disediakan perpustakaan.'
    },
    {
      id: 'ArausalAreaPersonal2',
      question: 'Ruang privasi yang ada di perpustakaan membuat saya lebih bersemangat untuk bekerja tanpa gangguan.'
    },
    {
      id: 'ArausalAreaPersonal3',
      question: 'Saya merasa lebih produktif ketika berada di area privasi yang memungkinkan saya bekerja dengan tenang.'
    },
    {
      id: 'ArausalPencahayaan1',
      question: 'Pencahayaan yang baik membuat saya lebih bergairah untuk belajar dan membaca di perpustakaan ini.'
    },
    {
      id: 'ArausalPencahayaan2',
      question: 'Saya merasa lebih antusias untuk menghabiskan waktu di perpustakaan karena pencahayaan yang baik dan sesuai kebutuhan.'
    },
    {
      id: 'ArausalPencahayaan3',
      question: 'Cahaya yang ada di perpustakaan ini membuat saya lebih berenergi dan produktif dalam bekerja.'
    },
    {
      id: 'ArausalLanggam1',
      question: 'Langgam yang digunakan perpustakaan yang optimal membuat saya merasa tergugah untuk berlama-lama disini.'
    },
    {
      id: 'ArausalLanggam2',
      question: 'Saya merasa lebih bersemangat ketika berada di perpustakaan ini karenan menarik dan estetik.'
    },
    {
      id: 'ArausalLanggam3',
      question: 'langgam yang digunakan perpustakaan ini membuat saya merasa lebih antusias untuk bekerja dan mebaca dalam jangka waktu yang lama.'
    }
]
  return (
    <section className="">
      <h3 className="fw-bold text-center mb-3">Arausal (gairah)</h3>
      <p className="text-center fw-normal mb-3">Arausal (gairah) Pada sesi ini akan berfokus pada poin gairah saat beraktifikas di Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan, berdasar pernyataan dibawah ini pilihlah angka yang mewakili persepsi gairah anda saat berada di perpustakaan tersebut. </p>
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
      
    </section>
  )
}

export default Arausal
