import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faPrint, faGem } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){

return (

    <footer className="text-center bg-dark text-white">
        <div className="container p-4">
            <section className="mb-4">
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="/" className="btn btn-outline-light btn-floating m-1 rounded-circle">
                    <FontAwesomeIcon icon={faGithub} />
                </a> 
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faGem} /> Empresa
                            </h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit tenetur eaque ea nulla quidem hic necessitatibus minus. At officia quaerat rem, magnam aperiam velit debitis illum fugit minus ipsum delectus.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                            <h6 className="text-uppercase fw-bold mb-4">
                                Productos
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Enlaces
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Precios</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Configuración</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Pedidos</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Ayuda</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contacto
                            </h6>
                            <p><FontAwesomeIcon icon={faHome} /> Cali, Valle </p>
                            <p> <FontAwesomeIcon icon={faEnvelope} /> henlo@henlo.com </p>
                            <p><FontAwesomeIcon icon={faPhone} /> + 57 317 5855 458 </p>
                            <p><FontAwesomeIcon icon={faPrint} /> + 57 317 5855 459 </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="text-center p-4" style={{ "backgroundColor" : 'rgba(0, 0, 0, 0.05)'}}>
            © 2022 Henlo
            
        </div>
    </footer>

    );
}