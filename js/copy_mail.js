function copiarCorreo() {
    const correo = document.querySelector(".header_correo").textContent;
    const toast = document.getElementById("mensajeCopiado");

    navigator.clipboard.writeText(correo)
        .then(() => {
            toast.classList.add("visible");
            setTimeout(() => {
                toast.classList.remove("visible");
            }, 2000); // El mensaje desaparece después de 2 segundos
        })
        .catch(() => {
            alert("Hubo un error al copiar 😞");
        });
    }