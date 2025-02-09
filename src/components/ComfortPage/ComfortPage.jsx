import React from 'react'
import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const ComfortPage = () => {
  const {setFormData, formData, currentPage, handleChange} = useContext(FormContext);
  return (
    <section className="">
      <p className="text-black">Pleasure (kenyamanan) Pada sesi ini akan berfokus pada poin kenyamanan dari kondisi Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan, berdasar pernyataan dibawah ini pilihlah angka yang mewakili persepsi anda terhadap kenyamanan perpustakaan tersebut. </p>
      <div className="col-12 mb-2 row">
          <label className='form-label'>Jenis Kelamin</label>
              <select className="form-select" aria-label="Default select example" name='jenisKelamin' value={ formData.jenisKelamin } onChange={ handleChange }>
              <option value=""></option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
          </select>
      </div>
    </section>
  )
}

export default ComfortPage
