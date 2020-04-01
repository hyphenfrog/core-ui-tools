const NumberInputComponent = require('.')

class NumberInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('core/bus')

    return new NumberInputComponent(ui, bus)
  }
}

module.exports = NumberInputComponentLocator