import React from 'react';
import  {SketchPicker} from 'react-color';
import { snapshot, useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        // If I want to change preset colors by my own then
        // presetColors={[
                // Write color name here For eg. #000000 etc.
        // ]}
      />
    </div>
  )
}

export default ColorPicker
