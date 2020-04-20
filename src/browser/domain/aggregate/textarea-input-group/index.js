const Component = require('../component')

class TextAreaInputGroupComponent extends Component
{
  validateInput(value)
  {
    const
    textAreaInputGroup = this.getComponentContext(),
    { input: { required }, label } = textAreaInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    this.setComponentContext({
      ...textAreaInputGroup,
      input :
      {
        ...textAreaInputGroup.input,
        value
      },
      error :
      {
        message,
        code
      }
    })

    this.emit('input.validated', { value, isValid: !message })
  }
}

module.exports = TextAreaInputGroupComponent