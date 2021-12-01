// Import and export statements are not currently supported in the Spectator Enviroment.
// We have them here to illustrate the implicit import of the related code. 
// Please leave these lines commented out. 
// import FishTableRow from './FishTableRow.js';

var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow />
      <FishTableRow />
      <FishTableRow />
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: PropTypes.array.isRequired
};



// import and export statements don't work in the Spectator Enviroment.
// Please leave these lines commented out. They are implied.
//export default FishTable;
