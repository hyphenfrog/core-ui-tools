const HandlebarsBootstrap = require('.')

class HandlebarsBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    handlebars = this.locator.locate('core/handlebars'),
    path       = this.locator.locate('core/path')

    return new HandlebarsBootstrap(path, handlebars)
  }
}

module.exports = HandlebarsBootstrapLocator
