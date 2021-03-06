class SelectInputGroupFlowMiddleware
{
  constructor({
    actionComposer,
    eventComposer,
    bus
  })
  {
    this.actionComposer = actionComposer
    this.eventComposer  = eventComposer
    this.bus            = bus
  }


  middleware()
  {
    return  store => next => action =>
    {
      next(action)

      const { meta: { emitter, name }, data } = action

      switch(name)
      {
      case 'validate.select.input.group':
      {
        const
        { value }                 = data,
        selectInputValidatedEvent = this.eventComposer.compose('select.input.group.validated', { value })
        this.bus.emit(emitter, selectInputValidatedEvent)
        break
      }
      }
    }
  }
}

module.exports = SelectInputGroupFlowMiddleware
