import ProgressBar from '../../components/ProgressBar';
import SatchList from '../../components/SatchList';

const Main = () => {
    return (
        <div>
            <ProgressBar satchPrice={50000} totalPrice={100000} />
            <SatchList totalPrice={100000} />
        </div>
    );
};

export default Main;