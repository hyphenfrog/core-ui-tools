/**
 * @implements {common/core/reducer/action}
 */
class RedirectAction
{
  execute(action, state)
  {
    const { data: { url } } = action

    window.location.href = url

    return state
  }
}

module.exports = RedirectAction
