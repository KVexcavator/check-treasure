/* GET 'hone' page */
module.exports.homelist = function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function (req, res, next) {
  res.render('index', {
    title: 'Location info'
  });
};

/* GET 'Add refiew' page */
module.exports.addReview = function (req, res, next) {
  res.render('index', {
    title: 'Add review'
  });
};