import React from 'react';
import arrow from '../assets/arrow.svg';

const Collapse = () => {
  return (
    <div className='collapse_container'>
      <div className='collapse_header'>
        <h1>collapse title</h1>
        <img className='collapse_arrow' src={arrow} alt='fleche_dropdown' />
      </div>
      <p className='collapse_description'> 
        "collapse description ou equipement"
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at facere doloremque deleniti pariatur, voluptates quod autem sequi quis dignissimos, cumque totam impedit delectus ea minus quisquam debitis asperiores! Vel perspiciatis numquam nemo? Nam dignissimos temporibus rem ullam numquam. Veritatis explicabo cumque laboriosam delectus mollitia eaque dolorum ipsum facilis ea.
      </p>
    </div>
  );
};

export default Collapse;
