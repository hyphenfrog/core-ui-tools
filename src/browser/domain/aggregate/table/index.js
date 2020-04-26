const Component = require('../component')

class TableComponent extends Component
{
  actionClicked(action, index)
  {
    this.emit('action.clicked', { action, index })
  }
}

module.exports = TableComponent
