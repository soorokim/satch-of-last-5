import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import useGoal from '../../hooks/useGoal';
import SetSatchForm from '../../components/SetSatchForm';
import { goalListState } from '../../atoms/goalList';

interface SatchProps {
  name: string;
  price: number;
  date: Date;
}

const EditSatchItem = () => {
  const navigate = useNavigate();
  const {
    state: { id, satchItem, satchPrice, satchDate },
  } = useLocation();
  const goalList = useRecoilValue(goalListState);
  const goalId = goalList[goalList.length - 1].id;
  const { updateSatch } = useGoal(goalId);

  const { register, handleSubmit, formState } = useForm<SatchProps>();

  const onValid = ({ name, price, date }: SatchProps) => {
    const numberPrice = Number(price);

    updateSatch(id)({
      name,
      price: numberPrice,
      date,
    });
    navigate('/');
  };

  return (
    <SetSatchForm
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onValid={onValid}
      satchItem={satchItem}
      satchPrice={satchPrice}
      satchDate={satchDate}
    />
  );
};

export default EditSatchItem;
