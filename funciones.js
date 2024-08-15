document.addEventListener('DOMContentLoaded', function() {
    const textAreain = document.querySelector('.text_area_in');
    const textAreaout = document.querySelector('.text_area_out');
    const mensaje = document.querySelector('.text_area_out');

    const encriptarBtn = document.querySelector('.btn-encriptar');
    const desencriptarBtn = document.querySelector('.btn-desencriptar');
    const copiarBtn = document.querySelector('.btn-copiar');

    const encriptar = (texto) => {
        let encriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encriptado;
    };

    const desencriptar = (texto) => {
        let desencriptado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return desencriptado;
    };

    encriptarBtn.addEventListener('click', function() {
        const texto = textAreain.value;
        mensaje.value = encriptar(texto);
        textAreain.value="";
        copiarBtn.style.display = 'block';
        mensaje.style.backgroundImage = 'none';
    });

    desencriptarBtn.addEventListener('click', function() {
        const texto = textArea.value;
        mensaje.value = desencriptar(texto);
        textArea.value="";
    });

    copiarBtn.addEventListener('click', function() {
        mensaje.select();
        document.execCommand('copy');
    });
});
