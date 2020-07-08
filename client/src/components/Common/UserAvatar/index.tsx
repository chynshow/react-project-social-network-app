import React from 'react';

interface PropTypes {
  src: string;
  size: string;
  alt: string;
  className?: string;
}

const UserAvatar: React.FC<PropTypes> = ({ src, size, alt, className }) => {
  return (
    <div className={`c-user-avatar ${className}`}>
      <img
        style={{ width: size }}
        className="c-user-avatar__img"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default React.memo(UserAvatar);
