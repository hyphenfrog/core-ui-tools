const TextInputComposer = require('.')

class TextInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.text-input-group')

    return new TextInputComposer(this.locator, options)
  }
}

module.exports = TextInputComposerLocator
