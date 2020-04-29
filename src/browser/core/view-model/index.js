class ViewModel
{
  constructor(initialViewModel = {}, channel, viewModelAggregate)
  {
    this.viewModel          = initialViewModel
    this.channel            = channel
    this.viewModelAggregate = viewModelAggregate

    this[Symbol.for('id')] = this.getPage()
  }

  getViewModel()
  {
    return { ...this.viewModel }
  }

  getPage()
  {
    const
    url      = new URL(window.location.href),
    pathname = url.pathname.slice(1),
    page     = `${pathname !== '' ? pathname : 'home'}-page`

    return page
  }

  composeViewModel(state)
  {
    return this.viewModelAggregate.compose(this[Symbol.for('id')], state)
  }

  setViewModelFromState(state)
  {
    const viewModel = this.composeViewModel(state)
    this.setViewModel(viewModel)
  }

  setViewModel(viewModel)
  {
    this.viewModel = viewModel
    this.channel.emit('view.model.changed', { viewModel })
  }
}

module.exports = ViewModel
