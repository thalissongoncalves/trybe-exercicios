import React, { useState } from "react";
import '../App.css';

function TrybeEmail() {
    const [emailOne, setEmailOne] = useState(0);
    const [emailTwo, setEmailTwo] = useState(0);
    const [emailThree, setEmailThree] = useState(0);
    const bold = 'bold';
    const notBold = 'notBold';

    if (emailOne === 1 && emailTwo === 1 && emailThree === 1) {
        alert('Parabéns, você leu todos os e-mails')
    }

    return(
        <>
        <div className="title">
            <h1>TrybeMail</h1>
        </div>
        <div className="dualBtn">
            <button 
            className="allRead"
            onClick={() => [setEmailOne(1), setEmailTwo(1), setEmailThree(1)]}
            >
                Marcar todas como lida
            </button>
            <button 
            className="allNotRead"
            onClick={() => [setEmailOne(0), setEmailTwo(0), setEmailThree(0)]}
            >
                Marcar todas como não lida
            </button>
        </div>
        <section className="allEmailList">
            <label className={
                emailOne === 0 ? bold : notBold
            }>
                Olá! Tenho uma vaga que bate com o seu perfil, podemos marcar uma conversa?
                <button 
                className="read"
                onClick={() => setEmailOne(1)}
                >
                    📫
                </button>
                <button 
                className="notRead"
                onClick={() => setEmailOne(0)}
                >
                    📬
                </button>
            </label>
            <label className={
                emailTwo === 0 ? bold : notBold
            }>
                Parabéns! Você avançou no processo da vaga Pessoa Desenvolvedora
                <button 
                className="read"
                onClick={() => setEmailTwo(1)}
                >
                    📫
                </button>
                <button 
                className="notRead"
                onClick={() => setEmailTwo(0)}
                >
                    📬
                </button>
            </label>
            <label className={
                emailThree === 0 ? bold : notBold
            }>
                RE: Entrevista marcada
                <button 
                className="read"
                onClick={() => setEmailThree(1)}
                >
                    📫
                </button>
                <button 
                className="notRead"
                onClick={() => setEmailThree(0)}
                >
                    📬
                </button>
            </label>
        </section>
        </>
    );
}

export default TrybeEmail;
