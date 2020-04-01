module.exports = {
  core :
  {
    component :
    {
      'text-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'text-input/command/validate-input-data'
          },
          {
            event   : 'input.data.validated',
            map     : 'set.error.message',
            emitTo  : 'error'
          },
          {
            event   : 'validate.input.data',
            locator : 'text-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'text-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'change',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'text-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'text-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/text-input'                          : __dirname
    }
  }
}