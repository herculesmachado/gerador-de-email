let btn = document.getElementById('template');

btn.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    // let cnpj = document.getElementById('cnpj').value;
    let email = document.getElementById('email');

    const temp = `
    <div style="font-family: Arial, Helvetica, sans-serif; margin: 0 auto; max-width: 600px; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin-top: 50px;">
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="font-size: 30px; color: #1f497d;">Prezado(a) <span style="color: #1f497d;">Microempreendedor(a)</span></h2>
            <hr style="height: 3px; background-color: #1f497d; border: none; margin-top: 10px;">
        </div>

        <div style="font-size: 18px; line-height: 1.6; color: #333;">
            <p>Prezado(a): ${name}</p>
            <p>Me chamo Pablo e sou especialista em serviços contábeis. Minha empresa, Pablo Contabilidades, oferece soluções contábeis personalizadas para empresas de diversos setores, visando eficiência e precisão.</p>
            <p>Nossos serviços incluem escrituração contábil, apuração de impostos, relatórios financeiros, assessoria fiscal e tributária, além de consultoria contábil. Estamos comprometidos em entender as necessidades do seu negócio e oferecer soluções sob medida.</p>
            <p>Gostaríamos de ter a oportunidade de contribuir para o sucesso da sua empresa. Estou à disposição para agendar uma reunião e apresentar uma proposta personalizada.</p>
            <p style="font-weight: bold;">Pablo Contabilidades</p>
            <p>(79) 9 9999-9999</p>
        </div>
    </div>
    `;

    email.innerText = temp
    // email.innerHTML = temp
})







