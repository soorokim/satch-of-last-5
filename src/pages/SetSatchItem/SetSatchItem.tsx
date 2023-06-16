import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import SetSatchForm from '../../components/SetSatchForm';
import { goalListState } from '../../atoms/goalList';
import useGoal from '../../hooks/useGoal';

interface SatchProps {
  name: string;
  price: number;
  date: Date;
}

const SetSatchItem = () => {
  const navigate = useNavigate();
  const goalList = useRecoilValue(goalListState);
  const goalId = goalList[goalList.length - 1].id;
  const { createSatch } = useGoal(goalId);
  const { register, handleSubmit, formState } = useForm<SatchProps>();

  const onValid = ({ name, price, date }: SatchProps) => {
    const satchPrice = Number(price);

    createSatch({
      name,
      price: satchPrice,
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
    />
  );
};

export default SetSatchItem;
