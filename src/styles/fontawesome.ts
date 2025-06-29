// Importar los estilos básicos de Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css';

// Configurar Font Awesome para evitar el parpadeo de iconos
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Importar los iconos que necesitamos
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCamera, 
  faHome, 
  faUser, 
  faLightbulb, 
  faMagic, 
  faStar, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebook, 
  faVimeo, 
  faPinterest
} from '@fortawesome/free-brands-svg-icons';

// Añadir los iconos a la biblioteca
library.add(
  faCamera, 
  faHome, 
  faUser, 
  faLightbulb, 
  faMagic, 
  faStar, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faChevronDown,
  faInstagram, 
  faFacebook, 
  faVimeo, 
  faPinterest
);
