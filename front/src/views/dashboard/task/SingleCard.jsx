const SingleCard = () => {
  return (
    <div className="box intro-y p-5 pb-5">
      <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
        <div className="font-medium truncate ">Tasks</div>
      </div>
      <div className="flex">
        <label className="form-label"> Card </label>

        <input type="checkbox" name="" />
        <input type="checkbox" name="" />
         <input type="checkbox" name="" />
      </div>
    </div>
  );
};

export default SingleCard;
