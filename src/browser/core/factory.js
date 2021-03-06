const
dateformat          = require('dateformat'),
Core                = require('common/core'),
ConfigFetcher       = require('browser/core/config-fetcher'),
consoleDefaults     = require('browser/core/console/defaults'),
ConsoleFactory      = require('browser/core/console/factory'),
ServiceLoader       = require('browser/core/service-loader'),
Locator             = require('common/core/locator'),
Deepclone           = require('common/core/deepclone'),
Deepfreeze          = require('common/core/deepfreeze'),
Deepfind            = require('common/core/deepfind'),
Deepmerge           = require('common/core/deepmerge'),
DeepAssign          = require('common/core/deepassign'),
CoreString          = require('common/core/string'),
Configuration       = require('common/core/configuration'),
Metrics             = require('common/core/metrics'),
Timer               = require('common/core/timer'),
EventEmitterFactory = require('common/core/event-emitter/factory')

class CoreFactory
{
  create(components)
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    for(const component of components)
      core.add(component.name, component.path)

    return core
  }

  createLocator()
  {
    const
    locator             = new Locator(),
    deepclone           = new Deepclone(),
    deepfreeze          = new Deepfreeze(),
    deepmerge           = new Deepmerge(),
    deepfind            = new Deepfind(),
    deepassign          = new DeepAssign(deepclone),
    configuration       = new Configuration(deepclone, deepmerge, deepfind, deepfreeze),
    timer               = new Timer(),
    metrics             = new Metrics(timer),
    coreString          = new CoreString(),
    consoleFactory      = new ConsoleFactory(dateformat, console, consoleDefaults, coreString),
    eventEmitterFactory = new EventEmitterFactory(consoleFactory)

    locator.set('core/timer', timer)
    locator.set('core/string', coreString)
    locator.set('core/deepclone', deepclone)
    locator.set('core/metrics', metrics)
    locator.set('core/console/factory', consoleFactory)
    locator.set('core/event-emitter/factory', eventEmitterFactory)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/deepassign', deepassign)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports = CoreFactory
