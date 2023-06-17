import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import SetSatchForm from '../../components/SetSatchForm';
import { currentGoalState } from '../../atoms/goalList';
import useGoal from '../../hooks/useGoal';

interface SatchProps {
  name: string;
  price: number;
  date: Date;
}

const SetSatchItem = () => {
  const navigate = useNavigate();
  const currentGoal = useRecoilValue(currentGoalState);
  const goalId = currentGoal?.id;
  const { createSatch } = useGoal(goalId);
  const { register, handleSubmit, formState } = useForm<SatchProps>({ mode: 'onChange' });

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
      satchItem={undefined}
      satchPrice={undefined}
      satchDate={undefined}
    />
  );
};

export default SetSatchItem;
