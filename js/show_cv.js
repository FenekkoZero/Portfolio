

  function abrirModal() {
    document.getElementById("cvModal").style.display = "block";
  }

  function cerrarModal() {
    document.getElementById("cvModal").style.display = "none";
  }

  // Cerrar si haces clic fuera del modal
  window.onclick = function(e) {
    const modal = document.getElementById("cvModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }