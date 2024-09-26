import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  icon: IconDefinition; // Icono de FontAwesome
  onClick?: () => void; // Acción al hacer clic
  className?: string; // Clases CSS adicionales
  ariaLabel?: string;
  type: 'button' | 'submit';
}

export const PreviousNextBtn: React.FC<ButtonProps> = ({
  icon,
  onClick,
  className = '',
  ariaLabel = 'button',
  type,
}) => {
  return (
    <button
      className={`hover:text-red-600 ${className}`} // Añadir clases personalizadas
      onClick={onClick} // Acción cuando se hace clic
      aria-label={ariaLabel} // Accesibilidad
      type={type}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
