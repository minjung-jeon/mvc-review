export class TodoCountTemplate {
  constructor() {
    this.defaultemplate = `
      all({{all}}), active({{active}}), done({{done}})
    `;
  }

  insert({ all, active, done }) {
    let template = this.defaultemplate;

    template = template.replace('{{all}}', all);
    template = template.replace('{{active}}', active);
    template = template.replace('{{done}}', done);

    return template;
  }
}
