import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleCheckStatus}
      >
        Check Status
      </button>
      <h3>{allCategories}</h3>
    </div>
  );
};
export default Categories;
