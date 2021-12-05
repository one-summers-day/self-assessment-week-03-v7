class FishTableRow extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com
  render() {
    return (
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">{this.props.fish.name}</td>
        <td>
          <img src={this.props.fish.image} />
        </td>
        {this.state.showDescription ? <td className="fish-description">{this.props.fish.description}</td> : null}
      </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: PropTypes.object.isRequired
};


// import and export statements don't work in the Spectator Enviroment.
// Please leave these lines commented out. They are implied.
//export default FishTableRow;
