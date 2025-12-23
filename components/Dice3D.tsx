
import React from 'react';

interface Dice3DProps {
  value: number;
  isRolling: boolean;
}

const Dice3D: React.FC<Dice3DProps> = ({ value, isRolling }) => {
  // Pre-defined rotations for each face
  const getRotation = (val: number) => {
    switch (val) {
      case 1: return 'rotateX(0deg) rotateY(0deg)';
      case 2: return 'rotateX(0deg) rotateY(-180deg)';
      case 3: return 'rotateX(0deg) rotateY(-90deg)';
      case 4: return 'rotateX(0deg) rotateY(90deg)';
      case 5: return 'rotateX(-90deg) rotateY(0deg)';
      case 6: return 'rotateX(90deg) rotateY(0deg)';
      default: return 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div className="dice-container p-4 select-none">
      <div 
        className={`dice ${isRolling ? 'rolling' : ''}`} 
        style={{ transform: isRolling ? undefined : getRotation(value) }}
      >
        {/* Face 1 */}
        <div className="dice-face face-1">
          <div className="dot"></div>
        </div>
        {/* Face 2 */}
        <div className="dice-face face-2 flex flex-col justify-between p-3">
          <div className="flex justify-end w-full"><div className="dot"></div></div>
          <div className="flex justify-start w-full"><div className="dot"></div></div>
        </div>
        {/* Face 3 */}
        <div className="dice-face face-3 flex flex-col justify-between p-3">
          <div className="flex justify-end w-full"><div className="dot"></div></div>
          <div className="flex justify-center w-full"><div className="dot"></div></div>
          <div className="flex justify-start w-full"><div className="dot"></div></div>
        </div>
        {/* Face 4 */}
        <div className="dice-face face-4 p-3 grid grid-cols-2 content-between h-full">
          <div className="dot"></div>
          <div className="dot justify-self-end"></div>
          <div className="dot"></div>
          <div className="dot justify-self-end"></div>
        </div>
        {/* Face 5 */}
        <div className="dice-face face-5 p-3 flex flex-col justify-between h-full">
          <div className="flex justify-between w-full">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="flex justify-center w-full">
            <div className="dot"></div>
          </div>
          <div className="flex justify-between w-full">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        {/* Face 6 */}
        <div className="dice-face face-6 p-3 grid grid-cols-2 content-between h-full gap-y-2">
          <div className="dot"></div>
          <div className="dot justify-self-end"></div>
          <div className="dot"></div>
          <div className="dot justify-self-end"></div>
          <div className="dot"></div>
          <div className="dot justify-self-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Dice3D;
