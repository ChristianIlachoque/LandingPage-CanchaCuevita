# Cancha Cuevita - Landing Page

![Cancha Sintética Deportiva](path_to_logo_or_screenshot)

Una landing page moderna y responsiva para promocionar una cancha sintética deportiva. Este proyecto está desarrollado con React y Vite, y utiliza EmailJS para manejar los formularios de contacto.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Características](#características)
- [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/cancha-sintetica-landing.git
    cd cancha-sintetica-landing
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura las variables de entorno (ver [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)).

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

## Uso

Después de seguir los pasos de instalación, abre tu navegador y navega a `http://localhost:3000` para ver la landing page.

## Tecnologías

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/) o [SweetAlert2](https://sweetalert2.github.io/) para notificaciones

## Características

- **Formulario de contacto**: Permite a los usuarios enviar mensajes directamente desde la página.
- **Responsive Design**: La página se adapta a diferentes tamaños de pantalla, asegurando una buena experiencia en dispositivos móviles y de escritorio.
- **Mensajes personalizados**: Uso de bibliotecas como `react-toastify` o `sweetalert2` para mostrar mensajes de éxito o error.

## Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
