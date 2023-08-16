const Images = {
    'Signpost01' : require('./signpost_test.png'),
    'Signpost02' : require('./signpost_test.png'),
    'Signpost03' : require('./signpost_test.png'),
    'Signpost04' : require('./signpost_test.png'),
    'Signpost05' : require('./signpost_test.png'),
};

export function imageSelect(id) {
    const imageArray = {
      '01' : Images.Signpost01,
      '02' : Images.Signpost02,
      '03' : Images.Signpost03,
      '04' : Images.Signpost04,
      '05' : Images.Signpost05,
    } 
    return imageArray[id]
  };