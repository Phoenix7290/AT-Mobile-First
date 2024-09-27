import PropTypes from 'prop-types';

const SellerInfo = ({ seller }) => (
  <div className="seller-info">
    <h2>Informações do Vendedor</h2>
    <p>Nome: {seller.name}</p>
    <p>Email: {seller.email}</p>
    <p>Telefone: {seller.phone}</p>
    <p>Nota: {seller.rating} / 5</p>
  </div>
);

SellerInfo.propTypes = {
  seller: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
};

export default SellerInfo;
