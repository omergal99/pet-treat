import React from 'react';

function PilotSwitch({ isChecked }) {

  return (
    <div className="pilot-switch">
      <span className="switch">
        <span className="switch-border1">
          <span className="switch-border2">
            <input id="switch1" type="checkbox" defaultChecked={isChecked} />
            <label for="switch1"></label>
            <span className="switch-top"></span>
            <span className="switch-shadow"></span>
            <span className="switch-handle"></span>
            <span className="switch-handle-left"></span>
            <span className="switch-handle-right"></span>
            <span className="switch-handle-top"></span>
            <span className="switch-handle-bottom"></span>
            <span className="switch-handle-base"></span>
            <span className="switch-led switch-led-green">
              <span className="switch-led-border">
                <span className="switch-led-light">
                  <span className="switch-led-glow"></span>
                </span>
              </span>
            </span>
            <span className="switch-led switch-led-red">
              <span className="switch-led-border">
                <span className="switch-led-light">
                  <span className="switch-led-glow"></span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default React.memo(PilotSwitch)



