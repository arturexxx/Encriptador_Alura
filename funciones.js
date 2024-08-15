document.addEventListener('DOMContentLoaded', function() {
    const mensaje_entrada = document.querySelector('.text_area_in');
    const mensaje_salida = document.querySelector('.text_area_out');

    const encriptarBtn = document.querySelector('.btn_encriptar');
    const desencriptarBtn = document.querySelector('.btn_desencriptar');
    const copiarBtn = document.querySelector('.btn_copiar');

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
        const texto = mensaje_entrada.value;
        mensaje_salida.value = encriptar(texto);
        mensaje_entrada.value="";
        copiarBtn.style.display = 'block';
        mensaje_salida.style.backgroundImage = 'none';
    });

    desencriptarBtn.addEventListener('click', function() {
        const texto = mensaje_entrada.value;
        mensaje_salida.value = desencriptar(texto);
        mensaje_entrada.value="";
    });

    copiarBtn.addEventListener('click', function() {
        mensaje_salida.select();
        document.execCommand('copy');
        mensaje_salida.value="";
        copiarBtn.style.display = 'none';
    });
});
