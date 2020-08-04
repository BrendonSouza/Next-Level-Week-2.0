import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/59096165?s=460&u=cfa7751ada8a4093f0068156cb1fb428adea8d3e&v=4" alt="Luciano Junior" />
                <div>
                    <strong>Luciano Junior</strong>
                    <span>JavaScript</span>
                </div>
            </header>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quasi libero quas voluptatum.<br /> <br />  Voluptatum maiores voluptatibus,
                    numquam nulla earum dicta officiis in, unde illo eos eius ut voluptas
                    libero magnam?</p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$65,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}
export default TeacherItem;