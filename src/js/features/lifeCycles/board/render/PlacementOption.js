import rotateIcon from "@/assets/rotate.svg";

export default (shipImg) => `
  <div class="ship-placement-container">
    <div class="ship-preview-info-container">
      Ship -  
      ${shipImg || ""}
    </div>
    <div class="ship-orient-container">
      <button id="rotate-btn">
        <img src="${rotateIcon}"/>
        <span>
          Rotate
        </span>
      </button>
    </div>
  </div>
`;
