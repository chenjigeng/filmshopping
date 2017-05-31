// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {}
  }
}


class parent {
  constructor(name) {
    this.name = name;
  }
}

class child extends parent{
  constructor(name) {
    super(name);
  }
}