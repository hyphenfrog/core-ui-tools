const CheckboxInputComposer = require('.')

class CheckboxInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.checkbox-input')

    return new CheckboxInputComposer(this.locator, options)
  }
}

module.exports = CheckboxInputComposerLocator
