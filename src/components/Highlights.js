import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';

class Highlights extends Component {

    render() {
        return (
            <div >    
            <h4 className="text-center">Highlights of the week (Nationally)</h4>
            
            <div className="row">
              <div className="col-6">
                <p className="text-white bg-dark">Nationally</p>
                <p className="text-center">Disease Specific Reports</p>
                <p className="text-white bg-dark">Malaria</p>
                <p className="text-white bg-dark">Cholera</p>
                <p className="text-white bg-dark">Dengue Fever</p>
                <p className="text-white bg-dark">Acute malnutrition</p>
                <p className="text-white bg-dark">Rabies</p>
                <p className="text-white bg-dark">Acute Jaundice</p>
                <p className="text-white bg-dark">Neonatal Deaths</p>
              </div>
              <div className="col-6">
                <p className="text-white bg-dark">Measles</p>
                <p className="text-white bg-dark">Dysentery</p>
                <p className="text-white bg-dark">Typhoid fever</p>
                <p className="text-white bg-dark">Meningococcal Meningitis</p>
                <p className="text-white bg-dark">AFP</p>
                <p className="text-white bg-dark">NNT</p>
                <p className="text-white bg-dark">Guniea Worm</p>
                <p className="text-white bg-dark">Anthrax</p>
                <p className="text-white bg-dark">Influenza</p>
                <p className="text-white bg-dark">Maternal Deaths</p>

              </div>
            </div>
            </div>
        )
    }
}
export default Highlights;