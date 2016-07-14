module.exports = config => {
  config.set({
    files: ['spec/*.js'],
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    reporters: ['mocha'],
    preprocessors: {'**.js': 'babel'}
  });
};
