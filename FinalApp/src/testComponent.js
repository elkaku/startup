class TestComponent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    p.then(() => {
      this.setState({
        msg: 'Success'
      })
    })
  }

  render () {
    return (
      <div>{this.state.msg || 'Wait'}</div>
    )
  }
}

