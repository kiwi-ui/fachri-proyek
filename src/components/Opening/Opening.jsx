import { useContext } from 'react';
import FormContext from '../../context/FormContext';

const Opening = () => {
  const {setFormData, formData, currentPage} = useContext(FormContext);
  return (
    <div >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt explicabo eveniet voluptatum expedita nisi laudantium illum ut, sunt nostrum nemo a modi architecto voluptatem magni omnis ipsam reiciendis earum fugit?
    </div>
  )
}

export default Opening
