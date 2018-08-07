export default class GulpClass {

  constructor(settings) {
    this.states = Object.assign({}, settings);
  }

  getStatesOfType(type) {
    const states = this.states[type];

    if(!states) {
      throw `${type}은 존재하지 않습니다.`;
    }

    return states;
  }

  getPaths(type) {
    const paths = this.getStatesOfType(type).paths;

    return paths.length > 0 ? paths : this.getPublicOpts(type);
  }

  getWatchPath(type) {
    const watch = this.getStatesOfType(type).watch;

    return watch.path ? watch.path : null;
  }

  getPublicOpts(type) {
    const publicOpts = this.getStatesOfType(type).public;

    return publicOpts ? publicOpts : null;
  }

}