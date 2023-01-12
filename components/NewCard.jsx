const NewCard = () => {
  return (
    <div className="opacity-[1] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] p-[1.5rem] rounded-[1rem] bg-[#252525]">
      <div>
        <h4 className="text-[grey] font-[700] text-[1.5rem] tracking-[0.015625rem] leading-[1.33] font-['ClashDisplay-Variable']">
          01
        </h4>
        <div className="padding"></div>
        <h4 className="text-[#fff] font-[700] text-[1.5rem] tracking-[0.015625rem] leading-[1.33]">
          $1000 in Prizes
        </h4>
        <div className="padding"></div>
        <p className="text-[#fff]">
          The top 3 teams, will be awarded an initial grant to pursue their
          ideas.
        </p>
      </div>
    </div>
  );
};

export default NewCard;
