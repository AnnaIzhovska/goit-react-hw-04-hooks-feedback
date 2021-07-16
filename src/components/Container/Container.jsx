import { Container } from './Container.styles';
import PropTypes from 'prop-types'

const Containers = ({ children }) => {
    return (
            <Container>{children}</Container>
    )
}

Container.propTypes = {
//   title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Containers;