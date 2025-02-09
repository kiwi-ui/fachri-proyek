import { useContext } from 'react'
import FormContext from '../../context/FormContext'

const Biodata = () => {
    const {setFormData, formData, currentPage, handleChange} = useContext(FormContext);
    
    
    return (
        <section>
            <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita consequatur cum tenetur cumque! Excepturi, harum numquam adipisci omnis ducimus consectetur, consequuntur praesentium alias nam blanditiis necessitatibus. Perferendis, inventore excepturi?</p>
            </div>
            <div className="col-12 rounded-3 mb-3">
                <label className="form-label" >Nama</label>
                <input className=" form-control w-100 rounded-1 border-0 p-2" name="nama" type="text" placeholder="Nama" value={formData.nama} onChange={ handleChange } />
                {/* { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> } */}
            </div>
            <div className="col-12 rounded-3 mb-3">
                <label className="form-label" >Umur</label>
                <input className="form-control w-100 rounded-1 border-0 p-2" name="umur" type="text" placeholder="Umur" value={formData.umur} onChange={ handleChange } />
                {/* { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> } */}
            </div>
            <div className="row rounded-3 pb-3 px-3">
                <label className='form-label'>Jenis Kelamin</label>
                {/* <div className="form-check col-6">
                    <input className="form-check-input" type="radio" name="jenis-kelamin"  onClick={ handleChange } value="Laki-laki"/>
                    <label className="form-check-label">Laki-laki</label>
                </div>
                <div className="form-check col-6">
                    <input className="form-check-input" type="radio" name="jenis-kelamin"  onClick={ handleChange } value="Perempuan"/>
                    <label className="form-check-label">Perempuan</label>
                </div> */}
                <select className="form-select" aria-label="Default select example" name='jenisKelamin' value={ formData.jenisKelamin } onChange={ handleChange }>
                    <option value=""></option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
        </section>
  )
}

export default Biodata
