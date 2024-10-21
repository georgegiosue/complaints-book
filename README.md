# Libro de Reclamaciones Virtual para Perú

Este proyecto proporciona una implementación de un Libro de Reclamaciones Virtual según el formato de Indecopi (DS N 101-2022-PCM) usando Next.js, Bun & Shadcn/ui.  Está diseñado para ser fácilmente adaptable a diferentes organizaciones mediante la configuración de variables de entorno y un endpoint para la lista de productos o servicios.

**Estado:** En desarrollo (Descarga de PDF y envío de emails pendientes de implementar).

## Características

* Interfaz de usuario intuitiva para el registro de reclamaciones.
* Adaptable a cualquier organización a través de la configuración de productos/servicios.
* Formato de reclamación según el modelo de [Indecopi](https://cdn.www.gob.pe/uploads/document/file/3510113/Anexo%20I%20DS%20N%20101-2022-PCM_.pdf.pdf).
* Utiliza Bun como runtime para un rendimiento mejorado.
* Integración con reCAPTCHA (opcional).

## Instalación y Uso

1. **Clonar el repositorio:**
   Como este repositorio está marcado como plantilla, puedes generar un nuevo repositorio a partir de ella.  Alternativamente, puedes clonarla:

   ```bash
   git clone https://github.com/georgegiosue/complaints-book
   ```

2. **Instalar dependencias:**
   Navega al directorio del proyecto y ejecuta:

   ```bash
   bun install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto y configura las siguientes variables:

   ```
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   NEXT_PUBLIC_PRODUCTS_ENDPOINT="http://localhost:3000/data/products.json"
   COMPANY_NAME="Nombre de la Empresa"
   FORM_TITLE="Libro de Reclamaciones"
   FORM_SUBTITLE="Hoja de Reclamación"
   CURRENCY_SYMBOL="S/"
   CURRENCY_NAME="Soles Peruanos"
   MAX_RESPONSE_TIME=15 # En días

   RECAPTCHA_ENABLED=false
   RECAPTCHA_WEB_KEY=...
   RECAPTCHA_SECRET_KEY=... # Reemplazar con tu WEB SITE KEY en http://www.google.com/recaptcha/admin 
   ```

   **Explicación de las variables:**

   * `NEXT_PUBLIC_APP_URL`: URL de la aplicación.
   * `NEXT_PUBLIC_PRODUCTS_ENDPOINT`: URL del endpoint que devuelve la lista de productos/servicios.
   * `COMPANY_NAME`: Nombre de la empresa.
   * `FORM_TITLE`: Título del formulario.
   * `FORM_SUBTITLE`: Subtítulo del formulario.
   * `CURRENCY_SYMBOL`: Símbolo de la moneda.
   * `CURRENCY_NAME`: Nombre de la moneda.
   * `MAX_RESPONSE_TIME`: Tiempo máximo de respuesta en días.
   * `RECAPTCHA_ENABLED`: Habilitar o deshabilitar reCAPTCHA (true/false).
   * `RECAPTCHA_WEB_KEY`: Clave web de reCAPTCHA.
   * `RECAPTCHA_SECRET_KEY`: Clave secreta de reCAPTCHA.


4. **Configurar la lista de productos/servicios:**
   Crea un archivo `products.json` en la carpeta `public/data` (o ajusta la ruta en `NEXT_PUBLIC_PRODUCTS_ENDPOINT`) con el siguiente formato:

   ```json
   {
     "products": [
       {"id": 1, "name": "Producto 1"},
       {"id": 2, "name": "Producto 2"},
       {"id": 3, "name": "Servicio 1"},
       // ... más productos/servicios
     ]
   }
   ```

5. **Ejecutar la aplicación:**

   ```bash
   bun --bun run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.



## Tareas Pendientes

* **Implementar descarga de PDF:**  Generar un PDF de la reclamación una vez enviada.
* **Implementar envío de emails:**  Enviar la reclamación por correo electrónico a la empresa y al usuario.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y envía un pull request.

Aquí tienes la traducción al español:

1. Haz un **fork** del proyecto.
2. Crea tu **rama de características** (`git checkout -b feature/AmazingFeature`).
3. Realiza un **commit** de tus cambios (`git commit -m 'Agregar alguna característica asombrosa'`).
4. Haz **push** a la rama (`git push origin feature/AmazingFeature`).
5. Abre un [**Pull Request**](https://github.com/georgegiosue/complaints-book/pulls).

## Troubleshooting 🔧

Si encuentras algún problema al configurar o ejecutar la aplicación, por favor revisa la sección de [Issues](https://github.com/georgegiosue/complaints-book/issues) de este repositorio para ver si tu problema ya ha sido abordado. Si no es así, siéntete libre de abrir un nuevo issue con una descripción del problema que estás experimentando.

## Licencia

GNU AFFERO GENERAL PUBLIC LICENSE Version 3
