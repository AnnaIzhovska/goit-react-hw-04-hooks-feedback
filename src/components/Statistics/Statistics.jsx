  
import PropTypes from "prop-types";
import { Text } from './Statistics.styles';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg'

const Statistics = ({good, neutral, bad, total, positivePercentage="100"}) => (
        <ul>
            <Text><CgSmile/> Good: {good}</Text>
            <Text><CgSmileNone/> Neutral: {neutral}</Text>
            <Text><CgSmileSad/> Bad: {bad}</Text>
            <Text>Total: {total}</Text>
            <Text>Positive feedback: {positivePercentage}%</Text>   
        </ul>
        )

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;