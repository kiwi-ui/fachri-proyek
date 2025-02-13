import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const Biodata = () => {
    const {setFormData, formData, currentPage, handleChange, isInputEmpty} = useContext(FormContext);
    
    return (
        <section className="">
            <div className="">
                <div className="col-12 rounded-3 mb-3">
                    <label className="form-label fw-semibold" >Nama</label>
                    <input className=" form-control w-100 rounded-1 border-0 p-2" name="nama" type="text" placeholder="Nama" value={formData.nama} onChange={ handleChange } />
                    { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> }
                </div>
                <div className="col-12 rounded-3 mb-3">
                    <label className="form-label fw-semibold" >Umur</label>
                    <input className="form-control w-100 rounded-1 border-0 p-2" name="umur" type="text" placeholder="Umur" value={formData.umur} onChange={ handleChange } />
                    { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> }
                </div>
                <div className="col-12 rounded-3">
                    <label className='form-label fw-semibold'>Jenis Kelamin</label>
                    <select className="form-select " aria-label="Default select example" name='jenisKelamin' value={ formData.jenisKelamin } onChange={ handleChange }>
                        <option value=""></option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
            </div>
        </section>
  )
}

export default Biodata
