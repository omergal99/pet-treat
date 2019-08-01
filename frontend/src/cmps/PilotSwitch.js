import React from 'react';

function PilotSwitch({ isChecked }) {

  return (
    <div className="pilot-switch">
      <span class="switch">
        <span class="switch-border1">
          <span class="switch-border2">
            <input id="switch1" type="checkbox" defaultChecked={isChecked} />
            <label for="switch1"></label>
            <span class="switch-top"></span>
            <span class="switch-shadow"></span>
            <span class="switch-handle"></span>
            <span class="switch-handle-left"></span>
            <span class="switch-handle-right"></span>
            <span class="switch-handle-top"></span>
            <span class="switch-handle-bottom"></span>
            <span class="switch-handle-base"></span>
            <span class="switch-led switch-led-green">
              <span class="switch-led-border">
                <span class="switch-led-light">
                  <span class="switch-led-glow"></span>
                </span>
              </span>
            </span>
            <span class="switch-led switch-led-red">
              <span class="switch-led-border">
                <span class="switch-led-light">
                  <span class="switch-led-glow"></span>
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



