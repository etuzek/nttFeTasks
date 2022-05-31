import { useSelector } from 'react-redux';
import OfferItem from './OfferItem';

const OffersList =() => {
	const {offerList} = useSelector((state)=>state.offer)
	return (
		<section>
			{offerList.map((item,index) => {
				return <OfferItem   key={index} {...item} />;
			})}
		</section>
	)
}

export default OffersList;