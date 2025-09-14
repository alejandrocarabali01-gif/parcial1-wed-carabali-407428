const sections = {
  muro: `
    <div>
      <textarea placeholder="Pon algo aquí..." rows="3"></textarea>
      <button class="btn">Compartir</button>
      <hr/>
      <!-- Primera publicación -->
      <div class="post">
        <p><strong>ROSA ISELA</strong> - Lunes a las 8:45pm</p>
        <p>ME ENCANTA👍</p>
        <a href="#">Ver los 6 comentarios</a>
        <img src="assets/mujer.jpg" alt="Descripción de la imagen" style="width: 100%; max-width: 400px; margin-top: 10px;">
        <img src="assets/perfil.jpg" alt="Imagen adicional 1" style="width: 100%; max-width: 400px; margin-top: 10px;">
      </div>
      <!-- Segunda publicación -->
      <div class="post">
        <p><strong>ALEJANDRO CARABALI</strong> - Lunes a las 11:46pm</p>
        <p>ME COMPRE MI GUITARRA...</p>
        <img src="assets/perfil.jpg" alt="Imagen adicional 2" style="width: 100%; max-width: 400px; margin-top: 10px;">
      </div>
      <!-- Tercera publicación -->
      <div class="post">
        <p><strong>HADUER CARABALI</strong> - Martes a las 9:00am</p>
        <p>¡DE PASEO! 🌞</p>
        <a href="#">Ver los 3 comentarios</a>
        <img src="assets/perfil.jpg" alt="Descripción de la imagen" style="width: 100%; max-width: 400px; margin-top: 10px;">
        <img src="assets/mujer.jpg" alt="Imagen adicional 3" style="width: 100%; max-width: 400px; margin-top: 10px;">
      </div>
      <!-- Cuarta publicación -->
      <div class="post">
        <p><strong>Usuario 4</strong> - Martes a las 12:30pm</p>
        <p>Visitando un nuevo lugar...</p>
        <a href="#">Ver los 4 comentarios</a>
        <img src="assets/mujer.jpg" alt="Descripción de la imagen" style="width: 100%; max-width: 400px; margin-top: 10px;">
        <img src="assets/perfil.jpg" alt="Imagen adicional 4" style="width: 100%; max-width: 400px; margin-top: 10px;">
      </div>
      <!-- Quinta publicación -->
      <div class="post">
        <p><strong>MARTIN</strong> - Miércoles a las 1:45pm</p>
        <p>¡QUE RICO ES PASEAR ! 💻</p>
        <a href="#">Ver los 2 comentarios</a>
        <img src="assets/mujer.jpg" alt="Descripción de la imagen" style="width: 100%; max-width: 400px; margin-top: 10px;">
        <img src="assets/mujer.jpg" alt="Imagen adicional 5" style="width: 100%; max-width: 400px; margin-top: 10px;">
      </div>
    </div>
  `,
  info: `
    <div>
      <h2>Información</h2>

        <p><strong>INTERES:</strong> ME GUSTA TOCAR GUITARRA</p>
      <p><strong>Correo:</strong> alejandro@correo.com</p>
      <p><strong>Situacion sentimental:</strong> soltero </p>
      <p><strong>Telefono:</strong> 3122223262</p>
      <p><strong>Edad:</strong> 21</p>
      <img src="assets/perfil.png" alt="Imagen de perfil" style="width: 150px; border-radius: 50%;">
      <img src="assets/perfil.png" alt="Imagen extra de información" style="width: 100%; max-width: 200px; margin-top: 10px;">
    </div>
  `,
  photos: `
    <div>
      <h2>Fotos</h2>
      <div style="display:flex; gap:10px;">
        <div class="amigo">
          <img src="assets/perfil.png" alt="Amigo 1" style="width: 100px; height: 250px; border-radius: 100%;">
        </div>
        <div class="amigo">
          <img src="assets/descarga.jpg" alt="Amigo 2" style="width: 100px; height: 100px; border-radius: 50%;">
        </div>
        <div class="amigo">
          <img src="assets/mujer.jpg" alt="Amigo 3" style="width: 100px; height: 100px; border-radius: 50%;">
        </div>
      </div>
      <div style="display:flex; gap:10px; margin-top: 20px;">
        <div class="amigo">
          <img src="assets/mujer.jpg" alt="Foto extra 1" style="width: 100px; height: 100px; border-radius: 50%;">
        </div>
        <div class="amigo">
          <img src="assets/perfil.png" alt="Foto extra 2" style="width: 100px; height: 100px; border-radius: 50%;">
        </div>
      </div>
    </div>
  `,
  boxes: `
    <div>
      <h2>Cajas</h2>
      <p>Espacio para apps extra o widgets.</p>
      <img src="assets/perfil.png" alt="Imagen de cajas" style="width: 100%; max-width: 200px;">
      <img src="assets/perfil.png" alt="Imagen extra en cajas" style="width: 100%; max-width: 200px; margin-top: 10px;">
    </div>
  `
};

// Cargar por defecto muro
const content = document.getElementById("content");
content.innerHTML = sections.muro;

// Cambiar contenido al hacer clic
document.querySelectorAll(".nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    content.innerHTML = sections[btn.dataset.section];
  });
});