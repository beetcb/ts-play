function Component(selector: string, template: string) {
  return function (_: Function) {
    console.log(selector, template)
  }
}

@Component(
  'app-hero-child',
  `
    <h3>{{ hero.name }} says:</h3>
    <p>I, {{ hero.name }}, am at your service, {{ masterName }}.</p>
  `
)
export class HeroChildComponent {
  test = ''
}
