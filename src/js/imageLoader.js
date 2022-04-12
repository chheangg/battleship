function importAll(r) {
  const images = {};
  r.keys().map((item, index) => {
    images[item.replace(/(.\/|\.png$)/g, '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../assets/ships', false, /\.png$/));

function loadIcon(type, num, dir) {
  let dirArr;
  let dirName;
  if (!dir) {
    dirArr = document.getElementsByClassName('dir-option');
    dir = [...dirArr].filter((dirObj) => dirObj.checked)[0].value;
  }
  console.log(dir);
  if (dir === 'horizontal') {
    dirName = 'hori';
  }
  if (dir === 'vertical') {
    dirName = 'vert';
  }
  return images[`${type}-${dirName}_0${num}`];
}

export { loadIcon };
