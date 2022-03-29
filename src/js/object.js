/* eslint-disable no-use-before-define */
function ship(length, axis, coordinate) {
  function expander() {
    const body = [];
    for (let i = 0; i < length; i++) {
      if (axis === 'horizontal') {
        body.push([coordinate[0], coordinate[1] + i]);
      }
      if (axis === 'vertical') {
        body.push([coordinate[0] + i, coordinate[1]]);
      }
    }

    return body;
  }

  function hit(value) {
    position.forEach((pos) => {
      if (value[0] === pos[0] && value[1] === pos[1] && !damage.includes(value)) {
        damage.push(value);
      }
    });
  }

  function isSunk() {
    if (damage.length === length) {
      return true;
    }

    return false;
  }

  const damage = [];
  const position = expander();
  return {
    length,
    damage,
    axis,
    position,
    hit,
    isSunk,
  };
}

// eslint-disable-next-line import/prefer-default-export
export { ship };
